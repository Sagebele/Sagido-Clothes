import type { MainDropdownConfig } from "./mainDropdown";

export const juniorDropdownConfig = (currency: string): MainDropdownConfig => ({
    sideLabel: "Junior",
    columns: [
        {
        title: "New Collection",
        titleTo: `/${currency}/junior/new-collection`,
        links: [
            { label: "Summer Vibes", to: `/${currency}/junior/summer-vibes` },
            { label: "Playful Prints", to: `/${currency}/junior/playful-prints` },
            { label: "School Essentials", to: `/${currency}/junior/school-essentials` },
        ],
        },
        {
        title: "Clothing",
        links: [
            { label: "T-Shirts", to: `/${currency}/junior/t-shirts` },
            { label: "Hoodies", to: `/${currency}/junior/hoodies` },
            { label: "Jeans", to: `/${currency}/junior/jeans` },
            { label: "Dresses & Skirts", to: `/${currency}/junior/dresses` },
        ],
        },
        {
        title: "Accessories",
        links: [
            { label: "Backpacks", to: `/${currency}/junior/backpacks` },
            { label: "Shoes & Sneakers", to: `/${currency}/junior/shoes` },
            { label: "Hats & Caps", to: `/${currency}/junior/hats` },
            { label: "Fun Jewelry", to: `/${currency}/junior/jewelry` },
        ],
        },
    ],
    image: {
        src: "https://i.pinimg.com/originals/a6/7d/3f/a67d3f9669444032018272ed85784955.jpg",
        alt: "Junior Collection",
        to: `/${currency}/junior`,
    },
});

export const menDropdownConfig = (currency: string): MainDropdownConfig => ({
    sideLabel: "Men",
    columns: [
        {
        title: "New Collection",
        titleTo: `/${currency}/men/new-collection`,
        links: [
            { label: "Summer Essentials", to: `/${currency}/men/summer-essentials` },
            { label: "Street Style", to: `/${currency}/men/street-style` },
            { label: "Minimal Wear", to: `/${currency}/men/minimal-wear` },
        ],
        },
        {
        title: "Clothing",
        links: [
            { label: "T-Shirts", to: `/${currency}/men/t-shirts` },
            { label: "Hoodies & Sweaters", to: `/${currency}/men/hoodies` },
            { label: "Jeans", to: `/${currency}/men/jeans` },
            { label: "Jackets", to: `/${currency}/men/jackets` },
        ],
        },
        {
        title: "Accessories",
        links: [
            { label: "Bags", to: `/${currency}/men/bags` },
            { label: "Shoes & Sneakers", to: `/${currency}/men/shoes` },
            { label: "Caps & Hats", to: `/${currency}/men/hats` },
            { label: "Jewelry", to: `/${currency}/men/jewelry` },
        ],
        },
    ],
    image: {
        src: "https://s3.r29static.com/bin/entry/e1f/x%2C80/1590637/image.jpg",
        alt: "Men Collection",
        to: `/${currency}/men`,
    },
});


export const womenDropdownConfig = (currency: string): MainDropdownConfig => ({
    sideLabel: "Women",
    columns: [
        {
        title: "New Collection",
        titleTo: `/${currency}/women/new-collection`,
        links: [
            { label: "Summer Drop", to: `/${currency}/women/summer-drop` },
            { label: "Elegant Styles", to: `/${currency}/women/elegant-styles` },
            { label: "Everyday Comfort", to: `/${currency}/women/everyday-comfort` },
        ],
        },
        {
        title: "Clothing",
        links: [
            { label: "Tops", to: `/${currency}/women/tops` },
            { label: "Dresses", to: `/${currency}/women/dresses` },
            { label: "Jeans & Pants", to: `/${currency}/women/jeans` },
            { label: "Outerwear", to: `/${currency}/women/outerwear` },
        ],
        },
        {
        title: "Accessories",
        links: [
            { label: "Bags", to: `/${currency}/women/bags` },
            { label: "Shoes & Heels", to: `/${currency}/women/shoes` },
            { label: "Jewelry", to: `/${currency}/women/jewelry` },
            { label: "Scarves", to: `/${currency}/women/scarves` },
        ],
        },
    ],
    image: {
        src: "https://www.refinery29.com/images/11085368.jpg?crop=3306%2C3968%2Cx4%2Cy675&format=webp&height=912&quality=85&width=760",
        alt: "Women Collection",
        to: `/${currency}/women`,
    },
});
