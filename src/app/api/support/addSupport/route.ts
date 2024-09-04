// src/app/api/support/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import Support from '@/models/support';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    // Database connection
    await connect();

    // Get data from request body
    const { name, email, labelId, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !labelId || !subject || !message) {
      return NextResponse.json({
        message: "All fields are required",
        success: false,
        status: 400
      });
    }

    // Check for existing support requests with the same labelId
    const existingSupportRequests = await Support.find({ labelId });
//set maximum limit 
    if (existingSupportRequests.length >= 30) { // Update to the correct maximum limit
      return NextResponse.json({
        message: "A maximum of two requests per label is allowed.",
        success: false,
        status: 400
      });
    }

    const newSupport = new Support({
      name,
      email,
      labelId,
      subject,
      message,
    });

    const savedSupport = await newSupport.save();

    // Sending an email using Resend API
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'support@swalay.in', 
        to: email,
        subject: `Support Request Received: ${subject}`,
        html: `<p>Dear ${name},</p><p>Thank you for reaching out to us. We have received your support request and will get back to you shortly.</p><p><strong>Your message:</strong></p><p>${message}</p><p>Best regards,<br>SwaLay Support Team</p>`
      });

      return NextResponse.json({
        message: "Thank you! We will reach out to you soon.",
        success: true,
        status: 201,
        data: savedSupport
      });

    } catch (emailError) {
      console.error('Failed to send email:', emailError);

      return NextResponse.json({
        message: "Support request saved, but failed to send email.",
        success: false,
        status: 500,
        data: savedSupport
      });
    }

  } catch (error: any) {
    console.error('Error creating support request:', error);

    return NextResponse.json({
      message: "Internal server error",
      success: false,
      status: 500,
    });
  }
}
