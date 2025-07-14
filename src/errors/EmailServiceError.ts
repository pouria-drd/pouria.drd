class EmailServiceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailServiceError";
    }
}

export default EmailServiceError;
