import React from "react"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientElements = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  function handleAddIngredient(event) {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const newIngredient = formdata.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    event.currentTarget.reset();
  }
  return (
    <main>
      <form action="#" className="add-ingredient-form" onSubmit={handleAddIngredient}>
        <input 
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientElements}</ul>
    </main>
  )
}