export interface AnimatedBallProps {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    onComplete: () => void;
}


export interface CardItemProp {
    id: string;
    title: string;
    imageUrl: string;
}

export interface TextImageSectionProps {
    title: string;
    subtitle: string;
    text: string;
    image: string;
    imageAlt: string;
    span?: string;
    imagePosition?: "left" | "right";
}

export type HeroImageProps = {
    title: string;
    subtitle: string;
    image?: string;
};

export type DropdownLink = {
    label: string;
    to: string;
};

export type DropdownColumn = {
    title: string;
    titleTo?: string;
    links: DropdownLink[];
};

export type DropdownImage = {
    src: string;
    alt: string;
    to?: string;
};

export type MainDropdownConfig = {
    sideLabel: string;
    columns: DropdownColumn[];
    image?: DropdownImage;
};

export type MainDropdownProps = {
    open: boolean;
    config: MainDropdownConfig;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    linkClassName: string;
    className?: string;
};

export type HoverDropdownOptions = {
    closeDelay?: number;
    onOpen?: () => void;
    onClose?: () => void;
};

export type CarouselSlide = {
    front: string;
    back: string;
    altFront: string;
    altBack: string;
};

export interface CartProviderProps {
    children: React.ReactNode;
}
