import { useState } from "react";
import Book from "./Book";
import './BookCollection.css';

const BookCollection = () => {
    const [booksData, setBooksData] = useState([]);
    const [formData, setFormData] = useState({ // start the page with a book already (just for testing purposes)
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkein",
        genre: "Fantasy",
        language: "English",
        edition: "First Edition",
        pages: 310,
        rating: 4.8,
        year: 1937

    });

    const handleChangeBook = (e) => { // one handler for 8 inputs, using the name attribute to identify which input is being changed
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // [name]: value overwrites just the one field the user is typing in
    };

    const handleAddBook = (e) => {
        e.preventDefault(); // stop the form from reloading the page on submit

        const newBook = { id: Date.now(), ...formData }; // Date.now(): givess each book a unique id
        setBooksData([...booksData, newBook]); // add a new book 
        setFormData({ // reset the form back to empty after adding the new book
            id: "",
            title: "",
            author: "",
            genre: "",
            language: "",
            edition: "",
            pages: "",
            rating: "",
            year: ""
        });
    };

    const handleRemoveBook = (bookId) => {
        setBooksData(booksData.filter(book => book.id !== bookId)); // keep all books except the one with the matched bookID
    };

    return (
        <section className="books" id="books">
            <h2>Book Collection</h2>
            <form onSubmit={handleAddBook}>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChangeBook} required />
                <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChangeBook} required />
                <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleChangeBook} required />
                <input type="text" name="language" placeholder="Language" value={formData.language} onChange={handleChangeBook} required />
                <input type="text" name="edition" placeholder="Edition" value={formData.edition} onChange={handleChangeBook} required />
                <input type="number" name="pages" placeholder="Pages" value={formData.pages} onChange={handleChangeBook} required />
                <input type="number" step="0.1" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChangeBook} required />
                <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChangeBook} required />
                <button type="submit">Add Book Here</button>
            </form>
            <div className="books-center">
                {booksData.map(book => ( // spreads the book object innto individual props
                    <Book key={book.id} {...book} onRemove={handleRemoveBook} />
                ))}
            </div>
        </section>
    );
};
export default BookCollection;