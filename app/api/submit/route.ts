import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbyQ1iI_cKUdvplq_2J13KUqobsl3urlemRUI2cc1cIrHTRgG_PPrjCv_pO_Si0RzIuB7w/exec';
    
    console.log("New consultation form submission received:", data);
    console.log("Forwarding to webhook URL:", webhookUrl);
    
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
