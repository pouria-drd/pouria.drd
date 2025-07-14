type IEmailFormatStrategy = {
    formatMessage(
        fullName: string,
        email: string,
        subject: string,
        message: string
    ): string;
};
