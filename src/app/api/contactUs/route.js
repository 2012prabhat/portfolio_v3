import sendEmail from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, email, message } = await request.json();
    const response = await sendEmail(email, "New Contact Form Submission", message);
    return NextResponse.json(response);
}