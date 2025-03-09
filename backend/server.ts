import express, { Express, Request, Response } from "express";

const port: number = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send('Chat, is this guy valid? 2.0');
});

app.listen(port, () => {
    console.log(`now listening on port ${port}`);
})