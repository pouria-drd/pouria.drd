import { cn } from "@/utils";

interface FormDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const FormDescription = (props: FormDescriptionProps) => {
    return (
        <p className={cn(`text-p-form`, props.className)}>{props.children}</p>
    );
};

export default FormDescription;
