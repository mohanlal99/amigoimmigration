// mailer.ts
import nodemailer from "nodemailer";

export const createTransporter = (): nodemailer.Transporter => {
  return nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "465"),
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });
};
