import { NextResponse } from "next/server";
import { verifyCronAuth } from "@/lib/cron-auth";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: Request) {
  const authError = verifyCronAuth(req);
  if (authError) return authError;

  const apifyToken = process.env.APIFY_API_TOKEN;
  const actorId = process.env.APIFY_ACTOR_ID;

  if (!apifyToken || !actorId) {
    console.error("Missing APIFY_API_TOKEN or APIFY_ACTOR_ID");
    return NextResponse.json(
      { error: "Scraper not configured: missing APIFY_API_TOKEN or APIFY_ACTOR_ID" },
      { status: 500 }
    );
  }

  try {
    // Trigger the Apify actor run
    const runResponse = await fetch(
      `https://api.apify.com/v2/acts/${actorId}/runs?token=${apifyToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timeout: 120 }),
      }
    );

    if (!runResponse.ok) {
      const text = await runResponse.text();
      throw new Error(`Apify run failed (${runResponse.status}): ${text}`);
    }

    const runData = await runResponse.json();
    const runId = runData.data?.id;

    // Wait for the run to finish (poll with backoff, max ~50s)
    let status = runData.data?.status;
    let attempts = 0;
    while (status === "RUNNING" || status === "READY" || !status) {
      if (attempts++ > 10) break;
      await new Promise((r) => setTimeout(r, Math.min(3000 + attempts * 1000, 8000)));

      const statusRes = await fetch(
        `https://api.apify.com/v2/actor-runs/${runId}?token=${apifyToken}`
      );
      const statusData = await statusRes.json();
      status = statusData.data?.status;
    }

    if (status !== "SUCCEEDED") {
      return NextResponse.json(
        { error: `Apify run did not succeed. Status: ${status}`, runId },
        { status: 502 }
      );
    }

    // Fetch results from the default dataset
    const datasetRes = await fetch(
      `https://api.apify.com/v2/actor-runs/${runId}/dataset/items?token=${apifyToken}`
    );
    const jobs = await datasetRes.json();

    console.log(`Cron: refresh-jobs fetched ${jobs.length} jobs at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      jobCount: jobs.length,
      runId,
      refreshedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cron refresh-jobs error:", error);
    return NextResponse.json(
      { error: `Job refresh failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
