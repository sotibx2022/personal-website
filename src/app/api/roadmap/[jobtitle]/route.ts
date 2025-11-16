import connectToDb from '@/app/configuration/connectToDb';
import { RoadMapModel } from '@/app/models/roadmap.model';
import { NextResponse, type NextRequest } from 'next/server';
type Params = { jobtitle: string };
export async function GET(
  req: NextRequest,
  context: { params: Params } // ✅ Use Next.js expected type
) {
  const { jobtitle } = context.params;
  // Ensure the database is connected
  await connectToDb();
  try {
    // Find the roadmap by job title
    const selectedRoadmap = await RoadMapModel.findOne({ jobTitle: jobtitle });
    if (!selectedRoadmap) {
      return NextResponse.json(
        { message: `No roadmap found for job title: ${jobtitle}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ selectedRoadmap });
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
