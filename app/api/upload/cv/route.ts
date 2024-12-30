import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

// Cloudinary configuration
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL, // Use the Cloudinary URL from environment variables
});

async function uploadCvToCloudinary(
  buffer: Buffer,
  folder: string,
  uniqueHash: string,
) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "auto",
          unique_filename: true, // Ensures unique filenames
          public_id: uniqueHash, // Use the hash as the public ID
          use_filename: false, // Prevent filename-based deduplication
          overwrite: false, // Avoid overwriting existing files
        },
        (error, result) => {
          if (error) {
            // If the file already exists, return the existing result
            if (error.http_code === 409) {
              // Conflict: The file already exists
              resolve({
                secure_url: `https://res.cloudinary.com/${cloudinary.config().cloud_name}/image/upload/v${error.version}/${folder}/${uniqueHash}`,
              });
            } else {
              reject(error);
            }
          } else {
            resolve(result);
          }
        },
      )
      .end(buffer);
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("cv") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    // Convert file to a buffer for Cloudinary
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate a unique hash for the file (e.g., SHA256 hash)
    const uniqueHash = require("crypto")
      .createHash("sha256")
      .update(buffer)
      .digest("hex");

    // Upload file to Cloudinary
    const result: any = await uploadCvToCloudinary(
      buffer,
      "amigo-user-cv",
      uniqueHash,
    );

    // Construct a response URL
    const fileUrl = result.secure_url;
    const isPdf = file.type === "application/pdf";

    // Return file URL and type
    return NextResponse.json(
      {
        success: true,
        url: fileUrl,
        type: isPdf ? "pdf" : "image",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "File upload failed. Please try again later." },
      { status: 500 },
    );
  }
}
