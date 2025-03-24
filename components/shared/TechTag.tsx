interface TechTagProps {
    tech: string;
}

const TechTag: React.FC<TechTagProps> = ({ tech }) => {
    return (
        <span className="bg-drd-primary-100 text-drd-primary-800 text-xs px-2 py-1 rounded-full">
            {tech}
        </span>
    );
};

export default TechTag;
