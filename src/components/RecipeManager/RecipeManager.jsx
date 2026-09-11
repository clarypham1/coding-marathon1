import { useState } from "react";
import Recipe from "./Recipe.jsx";
import "./RecipeManager.css";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]); //stores all recipes added by the user
  const [error, setError] = useState({}); //validation errors for form field


  //form input
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");
  const [ingredients, setIngredients] = useState("");


  //when the user submits the form, it works
  function handleSubmit(event) {
    event.preventDefault(); //prevent the browser from refreshing the page
    const newError = {}; //for fields which have errors


    //checking the required fields
    if (!name) {
      newError.name = true;
    }

    if (!description) {
      newError.description = true;
    }

    if (!cuisine) {
      newError.cuisine = true;
    }

    if (!cookTime) {
      newError.cookTime = true;
    }

    if (!servings) {
      newError.servings = true;
    }

    if (!ingredients) {
      newError.ingredients = true;
    }


    //if there is errors, show the error field and stop adding the form
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }


    //Checking if there is the same recipe name which is already exists
    const duplicateRecipe = recipes.some(
      (recipe) => recipe.name.toLowerCase() === name.toLowerCase()
    );


    //shows the alert if the recipe name is already exists.
    if (duplicateRecipe) {
      alert("This recipe already exists.");
      return;
    }
      setError({}); //clear the previous errors


    // create a new recipe
    const newRecipe = {
      id: Date.now(),
      name: name,
      description: description,
      cuisine: cuisine,
      difficulty: difficulty,
      cookTime: cookTime,
      servings: servings,
      allergens: allergens,
      ingredients: ingredients,
    };

    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]); //add the new recipe to the existing list 


    //clear the form after adding recipe successfully
    setName("");
    setDescription("");
    setCuisine("");
    setDifficulty("Easy");
    setCookTime("");
    setServings("");
    setAllergens("");
    setIngredients("");
  }


  //delete recipe
  function deleteRecipe(recipeId) {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== recipeId)
    );
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>


      {/* recipe input form */}
      <form onSubmit={handleSubmit} className="recipe-form">
        
        {/* recipe name */}
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          className={error.name ? "input-error" : ""}
          onChange={(event) => setName(event.target.value)}
        />

        {/* recipe description */}
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          className={error.description ? "input-error" : ""}
          onChange={(event) => setDescription(event.target.value)}
        />

        {/* recipe cuisine type */}
        <input
          name="cuisine"
          placeholder="Cuisine"
          type="text"
          value={cuisine}
          className={error.cuisine ? "input-error" : ""}
          onChange={(event) => setCuisine(event.target.value)}
        />


        {/* recipe difficulty state */}
        <select
          name="difficulty"
          value={difficulty}
          className={error.difficulty ? "input-error" : ""}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>


        {/* cooking time */}
        <input
          name="cookTime"
          placeholder="Cook time"
          type="text"
          value={cookTime}
          className={error.cookTime ? "input-error" : ""}
          onChange={(event) => setCookTime(event.target.value)}
        />

        {/* number of sevings */}
        <input
          name="servings"
          placeholder="Servings"
          type="number"
          value={servings}
          className={error.servings ? "input-error" : ""}
          onChange={(event) => setServings(event.target.value)}
        />


        {/* allergens. This field is optional. */}
        <input
          name="allergens"
          placeholder="Allergens"
          type="text"
          value={allergens}
          onChange={(event) => setAllergens(event.target.value)}
        />

        {/* ingredients */}
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          className={error.ingredients ? "input-error" : ""}
          onChange={(event) => setIngredients(event.target.value)}
        />

        {/* submit button */}
        <button type="submit">Add Recipe</button> 
      </form>


      {/* display the recipes */}
      <div className="recipes-section">
        <h2>Total Recipes: {recipes.length}</h2>


        {/* show a message if there is no recipe. */}
        {recipes.length === 0 ? (
          <p className="empty-message">
            No recipes yet!
          </p>
        ) : (

          // display each recipe
          <div className="recipes-list">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.id}
                name={recipe.name}
                description={recipe.description}
                cuisine={recipe.cuisine}
                difficulty={recipe.difficulty}
                cookTime={recipe.cookTime}
                servings={recipe.servings}
                allergens={recipe.allergens}
                ingredients={recipe.ingredients}
                onRemove={() => deleteRecipe(recipe.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeManager;