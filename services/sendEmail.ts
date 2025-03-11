import nodemailer from "nodemailer";

// Load environment variables
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const EMAIL_USE_TLS = process.env.EMAIL_USE_TLS;
const EMAIL_HOST_USER = process.env.EMAIL_HOST_USER;
const EMAIL_HOST_PASSWORD = process.env.EMAIL_HOST_PASSWORD;
const DEFAULT_FROM_EMAIL = process.env.DEFAULT_FROM_EMAIL;

/**
 * Sends an email using the configured SMTP or email service.
 *
 * @param {string} fullName - Sender's full name.
 * @param {string} email - Sender's email address.
 * @param {string} subject - Email subject.
 * @param {string} message - Email body content.
 * @throws {Error} If email credentials are missing or sending fails.
 */
async function sendEmail(
    fullName: string,
    email: string,
    subject: string,
    message: string
) {
    console.log("📧 Sending email...");

    // Validate environment variables
    if (
        !EMAIL_HOST ||
        !EMAIL_PORT ||
        !EMAIL_USE_TLS ||
        !EMAIL_HOST_USER ||
        !EMAIL_HOST_PASSWORD ||
        !DEFAULT_FROM_EMAIL ||
        !EMAIL_SERVICE
    ) {
        console.error(
            "❌ Error: Missing email credentials in environment variables."
        );
        throw new Error(
            "Email credentials not found. Please check your environment configuration."
        );
    }

    // Create the email transporter
    const transporter = nodemailer.createTransport({
        service: EMAIL_SERVICE, // Use predefined email service if available (e.g., "gmail")
        host: EMAIL_HOST, // SMTP host
        port: Number(EMAIL_PORT), // Ensure the port is a number
        secure: EMAIL_USE_TLS === "true", // Use TLS if specified
        auth: {
            user: EMAIL_HOST_USER,
            pass: EMAIL_HOST_PASSWORD,
        },
    });

    // Email options
    const mailOptions = {
        from: `"${fullName}" <${email}>`, // Sender's name and email
        to: DEFAULT_FROM_EMAIL, // Receiver (your email)
        subject: `📩 New Contact Request: ${subject}`, // More engaging subject
        text: `
            From: ${fullName} (${email})
            Subject: ${subject}
    
            Message:
            ${message}
        `.trim(), // Ensures clean formatting
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <h2 style="color: #2c3e50;">📩 New Contact Request</h2>
                <p><strong>From:</strong> ${fullName} (<a href="mailto:${email}">${email}</a>)</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: none; border-top: 1px solid #ccc;">
                <p style="margin-top: 10px;">${message.replace(
                    /\n/g,
                    "<br>"
                )}</p>
                <hr style="border: none; border-top: 1px solid #ccc;">
                <p style="font-size: 0.9em; color: #777;">Sent via <strong>DRD Email Service</strong></p>
            </div>
        `.trim(), // Adds styling, spacing, and better readability
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully.");
    } catch (error: any) {
        console.error("❌ Failed to send email:", error.message);
        throw new Error("Email sending failed. Please try again later.");
    }
}

export default sendEmail;
