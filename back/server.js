const express = require("express");
const app = express();
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});

// serve your css as static
app.use(express.static(__dirname));
app.use(cors());
  
app.get("/getRecipe", async (req, res) => {

const randomRecipe = await fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json()).then(data => {
    const recipe = {
        name: data.meals[0].strMeal,
        ingredients: [data.meals[0].strIngredient1, data.meals[0].strIngredient2, data.meals[0].strIngredient3, data.meals[0].strIngredient4, data.meals[0].strIngredient5, data.meals[0].strIngredient6, data.meals[0].strIngredient7, data.meals[0].strIngredient8, data.meals[0].strIngredient9, data.meals[0].strIngredient10, data.meals[0].strIngredient11, data.meals[0].strIngredient12, data.meals[0].strIngredient13, data.meals[0].strIngredient14, data.meals[0].strIngredient15, data.meals[0].strIngredient16, data.meals[0].strIngredient17, data.meals[0].strIngredient18, data.meals[0].strIngredient19, data.meals[0].strIngredient20],
        instructions: data.meals[0].strInstructions
    };

    // remove empty ingredients
    recipe.ingredients = recipe.ingredients.filter(ingredient => ingredient !== null && ingredient !== "");

    res.status(200).json(recipe);
  }).catch(error => {
    console.error(error);
    res.status(500).json({error: error});});});