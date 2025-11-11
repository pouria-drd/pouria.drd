import nodemailer from "nodemailer";
import { EmailProviderType } from "@/types";

const host = process.env.EMAIL_HOST;
const port = Number(process.env.EMAIL_PORT) || 465;
const useTLS = process.env.EMAIL_USE_TLS === "true";
const user = process.env.EMAIL_HOST_USER;
const password = process.env.EMAIL_HOST_PASSWORD;
const service = process.env.EMAIL_SERVICE;

/**
 * Create email transporter
 * @param provider - Email provider type
 * @returns Nodemailer transporter
 */
const createTransporter = (provider: EmailProviderType = "SMTP") => {
	switch (provider) {
		case "SMTP":
			if (!host || !user || !password) {
				throw new Error(
					"SMTP credentials are missing in env variables",
				);
			}

			const transporter = nodemailer.createTransport({
				service: service,
				host: host,
				port: port,
				secure: useTLS,
				auth: {
					user: user,
					pass: password,
				},
			});
			return transporter;

		case "SendGrid":
			// extendable for SendGrid
			throw new Error("SendGrid provider not implemented yet");
		case "Mailgun":
			// extendable for Mailgun
			throw new Error("Mailgun provider not implemented yet");
		default:
			throw new Error("Unknown email provider");
	}
};

export default createTransporter;
