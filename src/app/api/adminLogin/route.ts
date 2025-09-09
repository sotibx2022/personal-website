// app/api/admin-login/route.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(req: NextRequest) {
  console.log("Received POST request to /api/admin-login");
  try {
    const body = await req.json();
    console.log("Request body parsed:", body);
    const { password } = body;
    console.log("env password is:",process.env.ADMINPASSWORD)
    console.log("Password received:", password ? "[REDACTED]" : "No password provided");
    if (password !== process.env.ADMINPASSWORD) {
      console.log("Password mismatch! Sending 401 response.");
      return NextResponse.json({ success: false }, { status: 401 });
    }
    console.log("Password valid. Generating JWT token...");
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    console.log("JWT token generated:", token);
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, { httpOnly: true, secure: true });
    console.log("Cookie set: admin_token");
    console.log("Sending success response to client.");
    return response;
  } catch (error) {
    console.error("Error handling /api/admin-login POST request:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
