import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Contact form submission:', data);

    // In a real application, you would process this data:
    // - Send an email (e.g., with Nodemailer, SendGrid)
    // - Save to a database
    // - Integrate with a CRM

    return NextResponse.json({ 
      message: 'Thank you for your inquiry! We will be in touch shortly.' 
    }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ 
      error: 'Failed to process your request.' 
    }, { status: 500 });
  }
}