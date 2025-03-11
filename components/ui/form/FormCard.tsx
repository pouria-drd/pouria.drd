import { cn } from "@/utils";

interface FormCardProps {
    children: React.ReactNode;
    className?: string;
}

const FormCard = (props: FormCardProps) => {
    return (
        <div className={cn(`drd-form-card`, props.className)}>
            {props.children}
        </div>
    );
};

export default FormCard;
