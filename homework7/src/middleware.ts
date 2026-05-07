import { Request, Response, NextFunction } from 'express';

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("I am in the middleware");
    next();
};

export const validation = (req: Request, res: Response, next: NextFunction) => {
    const { title, author, year } = req.body;

    if (!title?.trim()) {
        return res.status(400).json({ message: "title is required and must be a non-empty string." });
    }
    if (!author?.trim()) {
        return res.status(400).json({ message: "author is required and must be a non-empty string." });
    }
    if (year === undefined || year === null) {
        return res.status(400).json({ message: "year is required." });
    }

    const parsedYear = Number(year);
    if (isNaN(parsedYear) || !Number.isInteger(parsedYear)) {
        return res.status(400).json({ message: "year must be a valid integer." });
    }

    next();
};
//Add simple API key middleware: require header `x-api-key=secret123` for all `/books/*` routes.
export const apiMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(404).json({ error: "missing api key" });

    }
    if (apiKey !== 'secret123') {
        return res.status(404).json({ error: "invalid api key" })
    }
    next();
}
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: error.message || "the server problem" });
    next();
};