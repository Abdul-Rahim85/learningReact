import React from "react"
import IngredientsList from "./IngredientsList.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromQwen } from "../ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  // Handle adding a new ingredient
  function handleAddIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  // Handle showing the recipe
  async function handleShowRecipe() {
    try {
      const recipeMarkdown = await getRecipeFromQwen(ingredients);
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  // This function is scroll the page to the Generated racipe when it ready
  React.useEffect(() => {
    if(recipe !== "" && recipeSection !== null) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [recipe]);
  
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
        ref={recipeSection}
        ingredients={ingredients} 
        showingRecipe={handleShowRecipe}
        />

      { recipe && <ClaudeRecipe recipe={recipe} /> }
    </main>
  )
}
