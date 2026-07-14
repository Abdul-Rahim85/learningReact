import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  // Handle adding a new ingredient
  function handleAddIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  // Handle showing the recipe
  function handleShowRecipe() {
    setRecipeShown(true);
  }
  return (
    <main>
      <form action={handleAddIngredient} className="add-ingredient-form">
        <input 
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      <IngredientsList 
        ingredients={ingredients} 
        showingRecipe={handleShowRecipe}
        />

      { recipeShown && <ClaudeRecipe /> }
    </main>
  )
}
