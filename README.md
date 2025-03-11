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
EMAIL_PORT="587"
EMAIL_USE_TLS="true"

EMAIL_SERVICE="gmail"
EMAIL_HOST="smtp.gmail.com"

EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""

DEFAULT_FROM_EMAIL=""
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
