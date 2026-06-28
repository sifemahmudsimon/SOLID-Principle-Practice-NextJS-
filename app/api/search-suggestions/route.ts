import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q");

  if (!query) {
    return NextResponse.json([]);
  }

  const res = await fetch(
    `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
