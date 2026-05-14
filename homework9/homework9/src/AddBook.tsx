import { useNavigate } from "react-router";
import BooksContext from "./BookContext";
import { useContext, useState } from "react";
import { IBook } from "./data";


function AddBook() {
    const initialForm = { title: "", author: "", year: "", imageUrl: "" }
    const { books, setBooks } = useContext(BooksContext);
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: form.title,
                author: form.author,
                year: Number(form.year),
                imageUrl: form.imageUrl
            })
        })
        const savedBook: IBook = await response.json()
        setBooks([...books, savedBook])
        setForm(initialForm)
        navigate('/')
    }
    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <form onSubmit={handleSubmit}>

                <input onChange={handleChange} name="title" type="text" value={form.title} placeholder="title" />
                <input onChange={handleChange} name="author" type="text" value={form.author} placeholder="author" />
                <input onChange={handleChange} name="year" type="year" value={form.year} placeholder="year" />
                <input onChange={handleChange} name="imageUrl" type="imageUrl" value={form.imageUrl} placeholder="image" />

                <button type="submit">Add Book</button>
            </form>
        </div>

    )
}
export default AddBook;


