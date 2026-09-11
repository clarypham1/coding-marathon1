
import './Recipe.css';

// receives recipe information and the remove function
const Recipe = ({name, description, cuisine, difficulty, cookTime, servings, allergens, ingredients, onRemove }) => {
    return (
        <article className="recipe"> //display recipe as an article
            <h2 className="recipe-name">{name}</h2> recipe name as heading

            //recipe information
            <p><strong>Name</strong>: {name}</p>
            <p><strong>Description</strong>: {description}</p>
            <p><strong>Cuisine</strong>: {cuisine}</p>
            <p><strong>Difficulty</strong>: {difficulty}</p>
            <p><strong>CookingTime</strong>: {cookTime}</p>
            <p><strong>Servings</strong>: {servings}</p>
            <p><strong>Allergens</strong>: {allergens}</p>
            <p><strong>Ingredients</strong>: {ingredients}</p>

            //when the button click, call the onReove function
            <button className="remove-button" onClick={onRemove}>Remove Recipe</button>
        </article>
    );
};
export default Recipe; 