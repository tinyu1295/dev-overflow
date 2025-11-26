import { tickets } from "@/database/ticket";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return new Response("Hello, this is the tickets API!");
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, data: body });
}
