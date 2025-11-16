import connectToDb from '@/app/configuration/connectToDb';
import { ProfileModel } from '@/app/models/profile.model';
import { NextResponse, type NextRequest } from 'next/server';
export async function GET(req: NextRequest) {
  try {
    // Ensure DB connection
    await connectToDb();
    // Fetch profiles excluding sensitive fields
    const profiles = await ProfileModel.find().select("-email -fullName -password -_id");
    // Return response
    return NextResponse.json({ message: "success", profiles });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      { message: "Failed to fetch profiles", error: error.message },
      { status: 500 }
    );
  }
}
