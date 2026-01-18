import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.product.createMany({
        data: [
        {
            name: "Classic Hoodie",
            description: "Soft cotton hoodie",
            images: {
                imageFront: "/images/hoodie-front.jpg",
                imageBack: "/images/hoodie-back.jpg",
            },
            category: "women",
            type: "hoodie",
            price: 4999,
            active: true,
        },
        {
            name: "Everyday Tee",
            description: "Comfy t-shirt",
            images: {
                imageFront: "/images/tee-front.jpg",
                imageBack: "/images/tee-back.jpg",
            },
            category: "women",
            type: "tee",
            price: 1999,
            active: true,
        },
        ],
        skipDuplicates: true,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
