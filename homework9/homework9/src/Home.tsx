
import { useContext } from "react";
import BooksContext from "./BookContext";
import { useNavigate } from "react-router";
function Home() {

    const { books } = useContext(BooksContext);
    const navigate = useNavigate();
    return (
        <div>
            <h1>My Library</h1>


            <ul>
                {books.map((book) => (
                    <li key={book.id} onClick={() => navigate(`/books/${book.id}`)}>
                        <img src={book.imageUrl} alt="book.title" width={50} />

                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.year}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/add')}>Add Book</button>
        </div>

    )

}
export default Home;