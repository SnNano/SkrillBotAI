const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");

const User = require("../models/userModel");
const dotenv = require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: 'contentcrunch.ai',
    port: 465,
    secure: true,
    auth: {
        user: "no-reply@contentcrunch.ai",
        pass: "%I=M-ce]CZ09",
    },
    tls: {
        rejectUnauthorized: false
    }

})

const sendEmail = asyncHandler(async (email, url) => {
    try {
        const mailOptions = {
            from: "no-reply@contentcrunch.ai",
            to: email,
            subject: "Confirm your email",
            text: `You are receiving this email because you (or someone else) has requested to verify your email.
            \n\nPlease click on the following link or paste it into your browser to complete the process:
            \n\n${url}\n\n
            If you did not request this, please ignore this email.\n`,
        }
        transporter.sendMail(mailOptions);

    } catch (error) {
        throw new Error("Email is incorrect or doesn't exist")
    }
})




module.exports = {
    sendEmail
}