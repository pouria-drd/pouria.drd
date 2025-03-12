/**
 * Helper function to check for missing environment variables.
 * @returns {boolean} Returns `true` if all required environment variables are present, otherwise `false`.
 */
function validateEmailConfig(): boolean {
    const requiredEnvVars = [
        "EMAIL_HOST",
        "EMAIL_PORT",
        "EMAIL_USE_TLS",
        "EMAIL_HOST_USER",
        "EMAIL_HOST_PASSWORD",
        "EMAIL_SERVICE",
        "DEFAULT_FROM_EMAIL",
    ];

    for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
            console.error(`Missing environment variable: ${envVar}`);
            return false;
        }
    }

    return true;
}

export default validateEmailConfig;
