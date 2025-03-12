class PlainTextEmailFormatStrategy implements IEmailFormatStrategy {
    formatMessage(
        fullName: string,
        email: string,
        subject: string,
        message: string
    ) {
        return `
        From: ${fullName} (${email})
        Subject: ${subject}
        
        Message:
        ${message}
      `.trim();
    }
}

export default PlainTextEmailFormatStrategy;
