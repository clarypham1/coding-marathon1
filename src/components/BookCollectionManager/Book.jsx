import './Book.css';
const Book = ({ id, title, author, genre, language, edition, pages, rating, year, onRemove }) => {
    return (
        <article className="book">
            <h4 className="book-title">{title}</h4>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>Language: {language}</p>
            <p>Edition: {edition}</p>
            <p>Pages: {pages}</p>
            <p>Rating: {rating}</p>
            <p>Year: {year}</p>
            <button className="remove-button" onClick={() => onRemove(id)}>Remove Book</button>
        </article>
    );
};
export default Book; 