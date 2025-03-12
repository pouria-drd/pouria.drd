import nodemailer from "nodemailer";
import { EmailServiceError } from "@/errors";
import { EmailService } from "./EmailService";
import { validateEmailConfig } from "@/utils";

/**
 * Factory class to create an instance of EmailService.
 */
class EmailServiceFactory {
    /**
     * Creates an instance of EmailService.
     * @returns An instance of EmailService.
     */
    static createEmailService(): EmailService {
        // Validate environment variables before using them
        const isValid = validateEmailConfig();

        if (!isValid) {
            throw new EmailServiceError("Invalid email configuration.");
        }

        const host = process.env.EMAIL_HOST!;
        const port = Number(process.env.EMAIL_PORT);
        const useTLS = process.env.EMAIL_USE_TLS === "true";
        const user = process.env.EMAIL_HOST_USER!;
        const password = process.env.EMAIL_HOST_PASSWORD!;
        const service = process.env.EMAIL_SERVICE!;
        const adminsEmails = process.env.DEFAULT_FROM_EMAIL!;

        const transporter = nodemailer.createTransport({
            service,
            host,
            port,
            secure: useTLS,
            auth: {
                user,
                pass: password,
            },
        });

        return new EmailService(transporter, adminsEmails);
    }
}

export default EmailServiceFactory;
