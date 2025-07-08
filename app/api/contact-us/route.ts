import mongoose from "mongoose";
mongoose.connect(process.env.DB!);

import MailModel from "@/app/models/mail.model";
import { NextRequest, NextResponse as res } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "@/app/lib/emailTemplate";
import { generateConfirmationTemplate } from "@/app/lib/confirmationTemplate";

const conn = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, subject, phone_no, msg, name } = body;

    const options = {
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: subject,
      html: generateEmailTemplate(body),
    };

    const confirmationOptions = {
      from: `${process.env.SMTP_EMAIL}`,
      to: email,
      subject: "Thanks for contacting me!",
      html: generateConfirmationTemplate(name),
    };

    await conn.sendMail(options);
    await conn.sendMail(confirmationOptions);
    const data = await MailModel.create(body);
    
    return res.json({ message: "Email Sent" }, { status: 200 });
  } 
  catch (error) {
    return res.json({ message: "Error in sending mail" });
  }
};
