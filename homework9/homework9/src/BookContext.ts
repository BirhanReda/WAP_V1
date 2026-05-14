import { createContext } from "react";
import { IBook } from "./data";

export interface IBookContextState {
    books: IBook[]
    setBooks: (books: IBook[]) => void
}

const BooksContext = createContext<IBookContextState>({
    books: [],
    setBooks: () => { }
});

export default BooksContext;