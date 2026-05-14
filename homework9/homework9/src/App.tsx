import { useEffect, useState } from "react";
import BooksContext from "./BookContext";
import { books as initialBooks, IBook } from "./data";
import Layout from "./Layout"

function App() {

  const [books, setBooks] = useState<IBook[]>(initialBooks);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/books')
      const data = await response.json()
      setBooks(data)
    }
    fetchBooks()
  }, [])
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      <Layout />
    </BooksContext.Provider>
  )
}
export default App;