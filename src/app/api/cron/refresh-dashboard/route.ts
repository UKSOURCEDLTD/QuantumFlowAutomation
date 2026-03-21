import { NextResponse } from "next/server";
import { verifyCronAuth } from "@/lib/cron-auth";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(req: Request) {
  const authError = verifyCronAuth(req);
  if (authError) return authError;

  try {
    const now = new Date().toISOString();

    // Aggregate dashboard metrics from available data sources
    const metrics: Record<string, unknown> = {
      refreshedAt: now,
    };

    // Fetch latest job stats if the jobs endpoint is available
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL;
    if (baseUrl) {
      const protocol = baseUrl.startsWith("http") ? "" : "https://";
      try {
        const jobsRes = await fetch(`${protocol}${baseUrl}/jobs.json`, {
          cache: "no-store",
        });
        if (jobsRes.ok) {
          const jobs = await jobsRes.json();
          metrics.totalJobs = Array.isArray(jobs) ? jobs.length : 0;
        }
      } catch {
        console.warn("Could not fetch jobs.json for dashboard metrics");
      }
    }

    console.log(`Cron: refresh-dashboard completed at ${now}`);

    return NextResponse.json({
      success: true,
      metrics,
    });
  } catch (error) {
    console.error("Cron refresh-dashboard error:", error);
    return NextResponse.json(
      { error: `Dashboard refresh failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
