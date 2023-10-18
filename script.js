// Fonction pour récupérer une recette aléatoire
function getRandomRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const recipe = data.meals[0];

            // Afficher le nom de la recette
            const recipeName = document.createElement('h2');
            recipeName.textContent = recipe.strMeal;

            // Afficher les ingrédients
            const ingredients = document.createElement('ul');
            ingredients.innerHTML = '';
            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe['strIngredient' + i];
                if (ingredient) {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredients.appendChild(li);
                }
            }

            // Afficher les instructions
            const instructions = document.createElement('p');
            instructions.textContent = recipe.strInstructions;

            // Ajouter les éléments à la page
            const recipeDiv = document.getElementById('recipe');
            recipeDiv.innerHTML = '';
            recipeDiv.appendChild(recipeName);
            recipeDiv.appendChild(ingredients);
            recipeDiv.appendChild(instructions);
        })
        .catch(error => console.error(error));
}

getRandomRecipe();