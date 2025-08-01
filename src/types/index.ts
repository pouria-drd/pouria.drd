/* eslint-disable @typescript-eslint/no-unused-vars */
type IconProps = {
	className?: string;
};

type Project = {
	id: number;
	link: string;
	image: string;
	title: string;
	repoLink?: string;
	techStack: string[];
	description: string;
};

type IEmailFormatStrategy = {
	formatMessage(
		fullName: string,
		email: string,
		subject: string,
		message: string,
	): string;
};
/* eslint-enable @typescript-eslint/no-unused-vars */

// Define interface for deviceInfo
interface DeviceInfo {
	ip_address: string;
	user_agent: string;
	device_type: string;
	os: string;
	os_version: string;
	browser: string;
	browser_version: string;
	device_brand: string;
	device_model: string;
}
