import { PdIcon } from "@/components/icons";

interface FormIconProps {
    children?: React.ReactNode;
}

const FormIcon = (props: FormIconProps) => {
    if (props.children) {
        return <>{props.children}</>;
    } else
        return (
            <PdIcon className="text-drd-primary-600 w-12" animation={false} />
        );
};
export default FormIcon;
