
import { Book, books } from "./data";
import { Request, Response } from 'express'


// export const getBooks = (req: Request, res: Response) => {
//     res.status(200).json({ books });
// }
export const getBooks = (req: Request, res: Response) => {
    const q = req.query.q as string;

    if (!q) {
        return res.status(200).json({ books });
    }
    const result = books.filter(b =>
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.author.toLowerCase().includes(q.toLowerCase())
    );
}
export const addNewBook = (req: Request, res: Response) => {
    const newBook = req.body
    const bookExist = books.find(b => newBook.id === b.id);
    if (bookExist) {
        return res.status(404).json({ message: "book already existed" });


    }
    books.push(newBook);
    return res.status(201).json({ newBook });

}
export const getBookById = (req: Request, res: Response) => {
    const { id } = req.params
    const found = books.find(x => x.id === id);
    if (found) {
        return res.status(200).json({ found })
    } else {
        return res.status(404).json({ message: "the book is not found" })
    }
}
export const updateBook = (req: Request, res: Response) => {

    const { id } = req.params;
    const { title, author, year } = req.body;

    const index = books.findIndex(b => b.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "book not found" });
    }

    const book = books[index] as Book;
    if (title) book.title = title;
    if (author) book.author = author;
    if (year) book.year = Number(year);

    return res.status(200).json({ message: "book updated", book: books[index] });


}
export const deleteBookById = (req: Request, res: Response) => {
    const { id } = req.params
    const found = books.find(b => b.id === id);
    if (!found) {
        return res.status(404).json({ message: "book not found" });
    }
    //option 1 with filter
    // const bookDeleted = books.filter(b => b.id !== id);
    // books.length = 0;
    // books.push(...bookDeleted);

    //option 2 with splice
    const index = books.findIndex(b => b.id === id);
    books.splice(index, 1);
    return res.status(200).json({ message: "book found and deleted" });

}

