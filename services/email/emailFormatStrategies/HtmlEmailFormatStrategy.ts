class HtmlEmailFormatStrategy implements IEmailFormatStrategy {
    formatMessage(
        fullName: string,
        email: string,
        subject: string,
        message: string
    ) {
        return `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
            <h2 style="color: #2c3e50;">📩 New Contact Request</h2>
            <p><strong>From:</strong> ${fullName} (<a href="mailto:${email}">${email}</a>)</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #ccc;">
            <p style="margin-top: 10px;">${message.replace(/\n/g, "<br>")}</p>
            <hr style="border: none; border-top: 1px solid #ccc;">
            <p style="font-size: 0.9em; color: #777;">Sent via <strong>DRD Email Service</strong></p>
        </div>
      `.trim();
    }
}

export default HtmlEmailFormatStrategy;
