import { tickets } from "@/database/ticket";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const ticket = tickets.find((t) => t.id === parseInt(id));
  return NextResponse.json({ success: true, data: ticket });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const ticket = tickets.find((t) => t.id === parseInt(id));
  if (!ticket) {
    return NextResponse.json(new Error("Can't find the ticket"), {
      status: 404,
    });
  }
  if (body.title) {
    ticket.title = body.title;
  }
  if (body.description) {
    ticket.description = body.description;
  }
  return NextResponse.json({ success: true, data: ticket });
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const ticketIndex = tickets.findIndex((t) => t.id === parseInt(id));
  if (ticketIndex === -1) {
    return NextResponse.json(new Error("Can't find the ticket"), {
      status: 404,
    });
  }
  tickets.splice(ticketIndex, 1);
  return NextResponse.json({ success: true, data: tickets });
}
