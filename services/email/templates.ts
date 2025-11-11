import fs from "fs";
import path from "path";

/**
 * Load email template from file
 * @param templateName - Template name
 * @param data - Data to inject into template
 * @returns Template content
 */
const loadTemplate = (templateName: string, data?: Record<string, string>) => {
	// Adjust path to your structure
	const filePath = path.join(
		process.cwd(), // project root
		"services", // folder
		"email", // folder
		"templates", // folder
		`${templateName}.html`, // template file
	);

	if (!fs.existsSync(filePath)) {
		throw new Error(`Template "${templateName}" not found at ${filePath}`);
	}

	let content = fs.readFileSync(filePath, "utf-8");

	if (data) {
		Object.entries(data).forEach(([key, value]) => {
			const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
			content = content.replace(regex, value);
		});
	}

	return content;
};

export default loadTemplate;
