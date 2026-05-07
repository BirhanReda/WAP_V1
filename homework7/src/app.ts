import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';




const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/health-check', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        data: "everything is good with me"
    })
})

export const errorHandler = (error: Error, req: Request, res: Response) => {
    res.status(500).json({
        success: false,
        data: " server problem"
    });

};

app.use(errorHandler);
const port = 4500;
app.listen(port, () => { console.log(`app is running on port  ${port}`) })