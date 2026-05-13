import { useState } from 'react';
import { books as initialBooks, Book } from './data'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const initialForm = { title: "", author: "", year: "", imageUrl: "" }
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [form, setForm] = useState(initialForm);

  // const onClickHandle = () => {
  //   setForm(form);
  // }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()


    const newBook: Book = {
      id: uuidv4(),
      title: form.title,
      author: form.author,
      year: Number(form.year),
      imageUrl: form.imageUrl,
    }

    setBooks([...books, newBook])
    setForm(initialForm)
  }




  return (

    <div className=' flex flex-col items-center justify-center gap-4 p-4 border '>

      <h1 className='text-center text-green-500 font-bold font-12'>My Library</h1>
      <div className='flex items-center justify-center'>
        <ul className=' font-bold font-10 text-yellow-500'>
          {books.map((book) => (
            <li key={book.id}>{book.title} - {book.author} {book.year} <img src={book.imageUrl} /></li>
          ))}
        </ul>

      </div>



      <form onSubmit={handleSubmit} className=' items-center ' >
        <input name='title' value={form.title} onChange={handleChange} type="text" placeholder='title' className='border-2 border-green-500 text-center mb-4 ' /><br />
        <input name='author' value={form.author} onChange={handleChange} type="text" placeholder='author' className='border-2 border-green-500 text-center mb-4 ' /><br />
        <input name='year' value={form.year} onChange={handleChange} type="text" placeholder='year' className='border-2 border-green-500 text-center mb-4 ' /><br />
        <input name='imageUrl' value={form.imageUrl} onChange={handleChange} type="text" placeholder='image' className='border-2 border-green-500 text-center mb-4' /><br />



        <button type="submit" className='border-4 border-orange  rounded p-2 mt-4 bg-yellow-500 text-center font-bold'>submit</button>




      </form>

    </div>


  )
}

export default App;