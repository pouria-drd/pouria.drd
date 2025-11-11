export interface EmailOptions {
	subject: string;
	text?: string;
	html?: string;
	templateName?: string; // optional template
	templateData?: Record<string, string>; // for {{data}} injection
}

export type EmailProviderType = "SMTP" | "SendGrid" | "Mailgun";
