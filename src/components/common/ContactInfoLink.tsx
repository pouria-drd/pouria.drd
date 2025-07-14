import Link from "next/link";

interface ContactInfoLinkProps {
    href?: string;
    label: string;
    icon: React.JSX.Element;
    children?: React.ReactNode;
}

const ContactInfoLink = (props: ContactInfoLinkProps) => {
    if (props.href) {
        return (
            <Link
                target="_blank"
                href={props.href}
                className="flex items-center justify-between w-full
                text-muted-foreground hover:text-primary group">
                <div className="flex items-center gap-2">
                    <div
                        className="flex items-center justify-center
                    border border-drd-neutral-300 rounded-[50%]
                    group-hover:border-primary size-10 aspect-square p-1.5">
                        {props.icon}
                    </div>
                    {props.label}
                </div>

                {props.children}
            </Link>
        );
    }

    return (
        <div className="flex items-center justify-between w-full text-muted-foreground">
            <div className="flex items-center gap-2">
                <div
                    className="flex items-center justify-center aspect-square
                    border border-border rounded-[50%] size-10 p-1.5">
                    {props.icon}
                </div>
                {props.label}
            </div>

            {props.children}
        </div>
    );
};

export default ContactInfoLink;
