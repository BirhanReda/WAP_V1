import express from 'express';
import { validation } from './middleware';
import { getBooks, addNewBook, getBookById, updateBook, deleteBookById } from './controller'
import { apiMiddleWare } from './middleware';
const router = express.Router();

router.use(apiMiddleWare);
//GET /books` → list all books.
router.get('/books', getBooks);

//2. `POST /books` → add a new book (validate fields).
router.post('/books', validation, addNewBook)

//3. `GET /books/:id` → get one book by id.
router.get('/books/:id', getBookById)
//4. `PATCH /books/:id` → update book (partial allowed).
router.patch('/books/:id', validation, updateBook)

//5. `DELETE /books/:id` →
router.delete('books/:id', deleteBookById)

export default router;