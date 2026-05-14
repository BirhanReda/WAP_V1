import { useContext } from "react";
import BooksContext from "./BookContext";
import { useNavigate, useParams } from "react-router";



function BookDetail() {

    const { books } = useContext(BooksContext)
    const navigate = useNavigate();
    const { id } = useParams();

    const book = books.find(b => b.id === id);
    if (!book) return <div>Book not found</div>


    return (
        <div>

            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <img src={book.imageUrl} />
            <button onClick={() => navigate(-1)}>Back</button>


        </div>


    )

}
export default BookDetail;