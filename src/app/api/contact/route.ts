import { NextResponse } from 'next/server';

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/24562229/u9yrfn6/';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Contact form submission:', data);

    // Send data to Zapier webhook
    try {
      const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!zapierResponse.ok) {
        console.error('Zapier webhook error:', await zapierResponse.text());
      } else {
        console.log('Successfully sent to Zapier');
      }
    } catch (zapierError) {
      console.error('Failed to send to Zapier:', zapierError);
      // Don't fail the entire request if Zapier fails
    }

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