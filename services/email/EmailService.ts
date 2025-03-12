import nodemailer from "nodemailer";
import {
    HtmlEmailFormatStrategy,
    PlainTextEmailFormatStrategy,
} from "./emailFormatStrategies";

class EmailService {
    private transporter: nodemailer.Transporter;
    private adminsEmails: string;
    private emailFormatStrategy: IEmailFormatStrategy;

    constructor(transporter: nodemailer.Transporter, adminsEmails: string) {
        this.transporter = transporter;
        this.adminsEmails = adminsEmails;
        // Default strategy: HTML email
        this.emailFormatStrategy = new HtmlEmailFormatStrategy();
    }

    // Set strategy dynamically
    setEmailFormatStrategy(strategy: IEmailFormatStrategy) {
        this.emailFormatStrategy = strategy;
    }

    /**
     * Sends email to admin.
     */
    async sendNewContactEmailToAdmins(
        fullName: string,
        email: string,
        subject: string,
        message: string
    ): Promise<void> {
        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: this.adminsEmails,
            subject: `📩 New Contact Request: ${subject}`,
            text: this.emailFormatStrategy.formatMessage(
                fullName,
                email,
                subject,
                message
            ),
            html: this.emailFormatStrategy.formatMessage(
                fullName,
                email,
                subject,
                message
            ),
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log("✅ Admin email sent successfully.");
        } catch (error: any) {
            console.error("❌ Failed to send admin email:", error.message);
            throw new Error("Failed to send admin email");
        }
    }
}

export { EmailService, PlainTextEmailFormatStrategy, HtmlEmailFormatStrategy };
