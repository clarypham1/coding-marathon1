import {useState} from "react";
import Book from "./Book";

const BookCollection = () => {
    const [booksData, setBooksData] = useState([]);
    const [formData, setFormData] = useState({
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

    const handleChangeBook = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleAddBook = (e) => {
        e.preventDefault();
       
    const newBook = { id: Date.now(), ...formData };
        setBooksData([...booksData, newBook]);
        setFormData({
            id: 1,
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
        setBooksData(booksData.filter(book => book.id !== bookId));
    };

    return (
        <section className="book-collection" id="books">
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
                <button type="submit">Add Book</button>
            </form>
            {booksData.map(book => (
                <Book key={book.id} {...book} onRemove={handleRemoveBook} />
            ))}
        </section>
    );
};
export default BookCollection;