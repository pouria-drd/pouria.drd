# 🌐 Pouria Darandi - Personal Portfolio

This is my **personal portfolio website**, built with **Next.js** v-15 to showcase my **projects, skills, and experience** in web development. Designed for **performance, SEO, and responsiveness**, it serves as a central hub for my work and professional presence.

## 🚀 Getting Started

To set up the development environment, follow these steps:

### 📥 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pouria-drd/pouria.drd.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pouria.drd
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### ⚙️ .env Configuration

Create a `.env` file in the root directory to configure environment variables. Example:

```env
# Set the base path for the application
NEXT_PUBLIC_BASE_PATH=""

# Gmail SMTP credentials
EMAIL_PORT="587" # Replace with your SMTP port
EMAIL_USE_TLS="true" # Set to "true" for TLS

EMAIL_SERVICE="gmail" # Replace with your preferred email service
EMAIL_HOST="smtp.gmail.com" # Replace with your SMTP server

EMAIL_HOST_USER="your_email@gmail.com" # Replace with your email address
EMAIL_HOST_PASSWORD="your_password" # Replace with your password

DEFAULT_ADMINS_EMAILS="admin@example.com" # Comma-separated list of admin emails
```

Ensure the `.env` file is added to `.gitignore` to keep sensitive information private.

### ▶️ Running the Development Server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 License

This project is licensed under the **MIT License**.
