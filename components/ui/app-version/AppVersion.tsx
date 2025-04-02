import { cn, getAppVersion } from "@/utils";

interface AppVersionProps {
    className?: string;
}

const AppVersion = (props: AppVersionProps) => {
    const appVersion: string = getAppVersion();

    return (
        <span
            className={cn(
                `text-drd-neutral text-sm
                font-mono text-center w-full`,
                props.className
            )}>
            version {appVersion}
        </span>
    );
};

export default AppVersion;
