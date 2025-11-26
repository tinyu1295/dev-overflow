import { tickets } from "@/database/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(new Error("Missing search parameter: id"), {
      status: 400,
    });
  }
  const ticket = tickets.filter((t) =>
    t.description.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json({ success: true, data: ticket });
}
