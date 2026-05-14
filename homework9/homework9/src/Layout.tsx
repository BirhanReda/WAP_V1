import { Route, Routes } from "react-router";
import AddBook from "./AddBook";
import Home from "./Home";
import BookDetail from "./BookDetail";

function Layout() {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/books/:id' element={<BookDetail />} />
        </Routes>
    )
}
export default Layout;