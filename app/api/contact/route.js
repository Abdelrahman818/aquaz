import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailSender";

export async function POST(request) {
  try {
    const data = await request.json();

    await sendMail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: error?.message || "Failed to send contact form." }, { status: 500 });
  }
}
