import express from 'express';
import { createServer } from 'http';

const app = express();

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

const server = createServer(app);

export default function handler(req: any, res: any) {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    app(req, res);
}