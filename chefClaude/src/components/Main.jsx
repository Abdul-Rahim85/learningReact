import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  // Handle adding a new ingredient
  function handleAddIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  // Handle showing the recipe
  async function handleShowRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
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

      { recipe && <ClaudeRecipe recipe={recipe} /> }
    </main>
  )
}
