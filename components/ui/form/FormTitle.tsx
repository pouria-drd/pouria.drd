interface FormTitleProps {
    children: React.ReactNode;
    className?: string;
}

const FormTitle = (props: FormTitleProps) => {
    return (
        <h1 className={`title-form ${props.className}`}>{props.children}</h1>
    );
};

export default FormTitle;
