import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('API Route: POST request received'); // Terminal log

  try {
    const data = await req.json();
    console.log('API Route: Parsed data:', data); // Terminal log
    
    return NextResponse.json({
      success: true,
      message: 'Form submission received'
    });
  } catch (error) {
    console.error('API Route: Error:', error); // Terminal log
    return NextResponse.json(
      { success: false, message: 'Error processing form submission' },
      { status: 500 }
    );
  }
}