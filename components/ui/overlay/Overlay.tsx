import { motion } from "framer-motion";

interface OverlayProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const Overlay = (props: OverlayProps) => {
    return (
        <motion.div
            className="top-0 left-0 fixed inset-0 
            bg-black/75 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={props.onClick}>
            {props.children}
        </motion.div>
    );
};

export default Overlay;
