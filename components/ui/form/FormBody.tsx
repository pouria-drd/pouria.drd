import { cn } from "@/utils";

interface FormBodyProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const FormBody = (props: FormBodyProps) => {
    return (
        <form
            className={cn(
                `flex flex-col items-center gap-4 w-full [&>*:last-child]:mt-1`,
                props.className
            )}
            {...props}>
            {props.children}
        </form>
    );
};

export default FormBody;
