import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const data = await req.json();
    const { fullName, email, subject, message } = data;
    console.log(fullName, email, subject, message);
    return NextResponse.json({ message: "success" })
}