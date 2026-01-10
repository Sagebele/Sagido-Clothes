import { Link } from "react-router-dom";

type DropdownLink = {
    label: string;
    to: string;
};

type DropdownColumn = {
    title: string; // displayed bigger at top
    titleTo?: string; // optional: if title is clickable
    links: DropdownLink[];
};

type DropdownImage = {
    src: string;
    alt: string;
    to?: string; // optional: image can be clickable
};

export type MainDropdownConfig = {
    sideLabel: string; // "Men", "Women", "Junior"
    columns: DropdownColumn[];
    image?: DropdownImage;
};

type Props = {
    open: boolean;
    config: MainDropdownConfig;

    onMouseEnter: () => void;
    onMouseLeave: () => void;

    linkClassName: string; 
    className?: string; 
};

export function MainDropdown({
    open,
    config,
    onMouseEnter,
    onMouseLeave,
    linkClassName,
    className = "",
    }: Props) {
    if (!open) return null;

    const gridCols = config.image ? "grid-cols-4" : "grid-cols-3";

    return (
        <div
        className={`hidden md:block border-t border-white/10 px-3 py-4 my-4 rounded-md z-20 ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        <div className="p-4 text-white max-w-7xl mx-auto flex gap-10 font-sans">
            {/* Side label */}
            <div className="flex items-start justify-start pt-10 shrink-0">
            <span className="[writing-mode:vertical-lr] uppercase cursor-pointer tracking-[0.35em] border-r-2 border-r-black [text-orientation:upright] font-sans font-semibold">
                {config.sideLabel}
            </span>
            </div>

            {/* Main grid */}
            <div className={`flex-1 grid ${gridCols} gap-4`}>
            {config.columns.map((col) => (
                <div key={col.title} className="flex flex-col items-start justify-start gap-2">
                <div className="pb-5 text-2xl">
                    {col.titleTo ? (
                    <Link to={col.titleTo} className={linkClassName}>
                        {col.title}
                    </Link>
                    ) : (
                    <span className={linkClassName}>{col.title}</span>
                    )}
                </div>

                {col.links.map((l) => (
                    <Link key={l.to + l.label} to={l.to} className={linkClassName}>
                    {l.label}
                    </Link>
                ))}
                </div>
            ))}

            {config.image && (
                <div className="relative flex items-center justify-center cursor-pointer overflow-hidden">
                {config.image.to ? (
                    <Link to={config.image.to} className="block w-full">
                    <img
                        src={config.image.src}
                        alt={config.image.alt}
                        className="w-full h-100 object-cover rounded-sm hover:scale-110 transition-transform duration-300"
                    />
                    </Link>
                ) : (
                    <img
                    src={config.image.src}
                    alt={config.image.alt}
                    className="w-full h-100 object-cover rounded-sm hover:scale-110 transition-transform duration-300"
                    />
                )}
                </div>
            )}
            </div>
        </div>
        </div>
    );
}
