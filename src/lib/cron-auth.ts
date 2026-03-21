import { NextResponse } from "next/server";

/**
 * Verifies that a request comes from Vercel's cron scheduler.
 * Vercel sends an `Authorization: Bearer <CRON_SECRET>` header on cron invocations.
 * Returns null if authorized, or an error response if not.
 */
export function verifyCronAuth(req: Request): NextResponse | null {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    console.warn("CRON_SECRET not set — skipping auth in development");
    return null;
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
