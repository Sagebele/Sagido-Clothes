import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const app = express();
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/products", async (req, res) => {
    const category = req.query.category as string | undefined;
    const type = req.query.type as string | undefined;

    const products = await prisma.product.findMany({
        where: {
            active: true,
            ...(category ? { category } : {}),
            ...(type ? { type } : {}),
        },
        orderBy: { createdAt: "desc" },
    });

    // map DB -> API shape
    res.json(
        products.map((p) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            images: p.images,
            category: p.category,
            type: p.type,
            price: p.price / 100, // return as decimal for frontend
            currency: "eur",      // Phase 2: single currency; later you can extend
            active: p.active,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
        }))
    );
});

app.get("/api/products/:id", async (req, res) => {
    const p = await prisma.product.findFirst({
        where: { id: req.params.id, active: true },
    });

    if (!p) return res.status(404).json({ message: "Product not found" });

    res.json({
        id: p.id,
        name: p.name,
        description: p.description,
        images: p.images,
        category: p.category,
        type: p.type,
        price: p.price / 100,
        currency: "eur",
        active: p.active,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
    });
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
