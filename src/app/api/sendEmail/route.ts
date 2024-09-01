// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json();

    if (!to || !subject || !message) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields',
      });
    }

    const { error } = await resend.emails.send({
      from: 'SwaLay <support@swalay.in>',
      to,
      subject,
      text: message,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({
        success: false,
        error: 'Failed to send email',
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });

  } catch (error) {
    console.error('Error in sendEmail API:', error);
    return NextResponse.json({
      success: false,
      error: 'An error occurred while sending the email',
    });
  }
}
