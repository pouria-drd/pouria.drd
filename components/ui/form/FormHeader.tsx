import { cn } from "@/utils";

interface FormHeaderProps {
    children: React.ReactNode;
    className?: string;
}

function FormHeader(props: FormHeaderProps) {
    return (
        <div
            className={cn(
                `flex flex-col items-center justify-center gap-4 w-full`,
                props.className
            )}>
            {props.children}
        </div>
    );
}

export default FormHeader;
