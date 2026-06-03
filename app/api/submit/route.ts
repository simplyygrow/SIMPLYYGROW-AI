import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    console.log("New consultation form submission received:", data);
    
    if (!webhookUrl) {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set in environment variables. Falling back to local log mode.");
      return NextResponse.json({ success: true, message: 'Local simulation success.' });
    }
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Google Apps Script returned status ${response.status}`);
    }
    
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Error forwarding submission to Google Sheets:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
