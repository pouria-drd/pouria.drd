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
        message: string
    ): string;
};
/* eslint-enable @typescript-eslint/no-unused-vars */
