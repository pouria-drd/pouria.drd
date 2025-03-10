import { cn } from "@/utils";
import styles from "./spinner.module.css";

interface SpinnerProps {
    className?: string;
    borderSize?: number | string; // Accept size as a prop to set the CSS variable --b
}

const Spinner = (props: SpinnerProps) => {
    const { className, borderSize = 8 } = props; // Default value for --b is 8px
    const __b = borderSize + "px";

    return (
        <div
            className={cn(`${styles.loader} w-10 z-0`, className)}
            style={{ "--b": __b } as React.CSSProperties} // Pass --b dynamically
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
