// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "humain609@gmail.com",
    pass: "tyrn tjfz wyuf nwad"
  }
});
