import express from "express";
import { createServer } from "http";

export async function registerRoutes(app: express.Express) {
    const server = createServer(app);

    // Add your API routes here
    app.get('/api/health', (req, res) => {
        res.json({ status: 'ok' });
    });

    return server;
}