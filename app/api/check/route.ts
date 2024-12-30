import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { ConnectDB } from "@/lib/db";
import Application from "@/models/application";

const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .min(1, "Mobile is required"),
  dob: z.string().min(1, "Date of birth is required"),
  degree: z.string().min(1, "Degree is required"),
  department: z.string().min(1, "Department is required"),
  cv: z.string().url("CV URL must be valid").min(1, "CV URL is required"),
});

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();

    const requestBody = await req.json();
    const parsedData = applicationSchema.safeParse(requestBody);

    if (!parsedData.success) {
      const errorMessages = parsedData.error.errors
        .map((err) => err.message)
        .join(", ");

      return NextResponse.json({ message: errorMessages }, { status: 400 });
    }

    const { email } = requestBody;

    const existingApplication = await Application.findOne({ email });

    if (existingApplication) {
      return NextResponse.json(
        { message: "Application already submitted with this email" },
        { status: 400 },
      );
    }

    const application = new Application(requestBody);

    await application.save();

    return NextResponse.json(
      { message: "Application successfully saved" },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "Error saving application" },
      { status: 500 },
    );
  }
}
