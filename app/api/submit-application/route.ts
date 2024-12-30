import { NextRequest, NextResponse } from "next/server";

import {
  userDataEmailTemplate,
  welcomeEmailTemplate,
} from "@/components/Submit/emailTemplates";
import { createTransporter } from "@/components/Submit/mailer";
import { ConnectDB } from "@/lib/db";
import Application from "@/models/application";

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();

    const requestBody = await req.json();

    const { name, email } = requestBody;

    const existingApplication = await Application.findOne({ email });

    if (existingApplication) {
      return NextResponse.json(
        { message: "Application already submitted with this email" },
        { status: 400 },
      );
    }

    const newApplication = new Application(requestBody);

    await newApplication.save();

    const transporter = createTransporter();

    const welcomeEmailHtml = welcomeEmailTemplate(name);

    await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_COMPANY_NAME}" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: email,
      subject: "Welcome to Amigo Immigration!",
      html: welcomeEmailHtml,
    });

    const companyEmailHtml = userDataEmailTemplate(requestBody);

    await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_COMPANY_NAME}" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,

      to: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      subject: "New Immigration Application Received",
      html: companyEmailHtml,
    });

    return NextResponse.json(
      {
        message: "Application submitted successfully! Emails have been sent.",
        data: {
          name: newApplication.name,
          email: newApplication.email,
          department: newApplication.department,
        },
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Error processing application. Please try again." },
      { status: 500 },
    );
  }
}
