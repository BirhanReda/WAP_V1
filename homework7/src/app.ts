import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import router from './routes';
import { errorHandler } from './middleware';


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/health-check', (req: Request, res: Response) => {
    res.status(200).json({ message: "everything is good with me " })
})


app.use(errorHandler);
const port = 4500;
app.listen(4500, () => { console.log(`app is running on port 4500 ${port}`) })