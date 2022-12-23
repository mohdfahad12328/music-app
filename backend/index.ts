import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';

dotenv.config({path: "../.env"});

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Music App</h1>');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});