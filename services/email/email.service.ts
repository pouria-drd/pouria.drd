import { EmailOptions } from "@/types";
import loadTemplate from "./templates";
import createTransporter from "./providers";

const fromEmail = process.env.EMAIL_HOST_USER;
const adminEmail = process.env.ADMIN_EMAIL;

class EmailService {
	private transporter = createTransporter("SMTP");

	public async sendEmail(options: EmailOptions) {
		try {
			if (!fromEmail || !adminEmail) {
				throw new Error("Email settings not found");
			}

			let htmlContent = options.html;
			if (options.templateName) {
				htmlContent = loadTemplate(
					options.templateName,
					options.templateData,
				);
			}

			const mailOptions = {
				from: fromEmail,
				to: adminEmail,
				subject: options.subject,
				text:
					options.text || htmlContent?.replace(/<[^>]*>/g, "") || " ", // fallback plain text

				html: htmlContent,
			};

			const info = await this.transporter.sendMail(mailOptions);

			console.log("Email sent: %s", info.messageId);
			return info;
		} catch (err) {
			if (process.env.NODE_ENV === "development") {
				console.error("[sendEmail]", err);
			}
			throw err;
		}
	}
}

export default EmailService;
