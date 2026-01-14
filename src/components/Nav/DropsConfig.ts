import type { MainDropdownConfig } from "./MainDropdown";

export const juniorDropdownConfig = (currency: string): MainDropdownConfig => ({
    sideLabel: "Junior",
    columns: [
        {
        title: "Collections",
        titleTo: `/${currency}/junior/collections`,
        links: [
            { label: "Summer Vibes", to: `/${currency}/junior/collections/summer-vibes` },
            { label: "Playful Prints", to: `/${currency}/junior/collections/playful-prints` },
            { label: "School Essentials", to: `/${currency}/junior/collections/school-essentials` },
        ],
        },
        {
        title: "Clothing",
        titleTo: `/${currency}/junior/clothing`,
        links: [
            { label: "T-Shirts", to: `/${currency}/junior/clothing/t-shirts` },
            { label: "Hoodies", to: `/${currency}/junior/clothing/hoodies` },
            { label: "Jeans", to: `/${currency}/junior/clothing/jeans` },
            { label: "Dresses & Skirts", to: `/${currency}/junior/clothing/dresses` },
        ],
        },
        {
        title: "Accessories",
        titleTo: `/${currency}/junior/accessories`,
        links: [
            { label: "Backpacks", to: `/${currency}/junior/accessories/backpacks` },
            { label: "Shoes & Sneakers", to: `/${currency}/junior/accessories/shoes` },
            { label: "Hats & Caps", to: `/${currency}/junior/accessories/hats` },
            { label: "Fun Jewelry", to: `/${currency}/junior/accessories/jewelry` },
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
        title: "Collections",
        titleTo: `/${currency}/men/collections`,
        links: [
            { label: "Summer Essentials", to: `/${currency}/men/collections/summer-essentials` },
            { label: "Street Style", to: `/${currency}/men/collections/street-style` },
            { label: "Minimal Wear", to: `/${currency}/men/collections/minimal-wear` },
        ],
        },
        {
        title: "Clothing",
        titleTo: `/${currency}/men/clothing`,
        links: [
            { label: "T-Shirts", to: `/${currency}/men/clothing/t-shirts` },
            { label: "Hoodies & Sweaters", to: `/${currency}/men/clothing/hoodies` },
            { label: "Jeans", to: `/${currency}/men/clothing/jeans` },
            { label: "Jackets", to: `/${currency}/men/clothing/jackets` },
        ],
        },
        {
        title: "Accessories",
        titleTo: `/${currency}/men/accessories`,
        links: [
            { label: "Bags", to: `/${currency}/men/accessories/bags` },
            { label: "Shoes & Sneakers", to: `/${currency}/men/accessories/shoes` },
            { label: "Caps & Hats", to: `/${currency}/men/accessories/hats` },
            { label: "Jewelry", to: `/${currency}/men/accessories/jewelry` },
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
        title: "Collections",
        titleTo: `/${currency}/women/collections`,
        links: [
            { label: "Summer Drop", to: `/${currency}/women/collections/summer-drop` },
            { label: "Elegant Styles", to: `/${currency}/women/collections/elegant-styles` },
            { label: "Everyday Comfort", to: `/${currency}/women/collections/everyday-comfort` },
        ],
        },
        {
        title: "Clothing",
        titleTo: `/${currency}/women/clothing`,
        links: [
            { label: "Tops", to: `/${currency}/women/clothing/tops` },
            { label: "Dresses", to: `/${currency}/women/clothing/dresses` },
            { label: "Jeans & Pants", to: `/${currency}/women/clothing/jeans` },
            { label: "Outerwear", to: `/${currency}/women/clothing/outerwear` },
        ],
        },
        {
        title: "Accessories",
        titleTo: `/${currency}/women/accessories`,
        links: [
            { label: "Bags", to: `/${currency}/women/accessories/bags` },
            { label: "Shoes & Heels", to: `/${currency}/women/accessories/shoes` },
            { label: "Jewelry", to: `/${currency}/women/accessories/jewelry` },
            { label: "Scarves", to: `/${currency}/women/accessories/scarves` },
        ],
        },
    ],
    image: {
        src: "https://www.refinery29.com/images/11085368.jpg?crop=3306%2C3968%2Cx4%2Cy675&format=webp&height=912&quality=85&width=760",
        alt: "Women Collection",
        to: `/${currency}/women`,
    },
});
