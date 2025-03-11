import { cn } from "@/utils";

interface FormTextContainerProps {
    children: React.ReactNode;
    className?: string;
}

const FormTextContainer = (props: FormTextContainerProps) => {
    return (
        <div className={cn(`text-center space-y-2 ${props.className}`)}>
            {props.children}
        </div>
    );
};

export default FormTextContainer;
