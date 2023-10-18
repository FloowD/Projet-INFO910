// Fonction pour récupérer une recette aléatoire
function getRandomRecipe() {
    fetch('http://localhost:5000/getRecipe')
        .then(response => response.json())
        .then(data => {

            // Afficher le nom de la recette
            const recipeName = document.createElement('h2');
            recipeName.textContent = data.name;

            // Afficher les ingrédients
            const ingredients = data.ingredients
            const ingredientsUL = document.createElement('ul');

            ingredients.forEach(ingredient => {
                const ingredientLI = document.createElement('li');
                ingredientLI.textContent = ingredient;
                ingredientsUL.appendChild(ingredientLI);
            });



            // Afficher les instructions
            const instructions = document.createElement('p');
            instructions.textContent = data.instructions;


            // Ajouter les éléments à la page
            const recipeDiv = document.getElementById('recipe');
            recipeDiv.innerHTML = '';
            recipeDiv.appendChild(recipeName);
            recipeDiv.appendChild(ingredientsUL);
            recipeDiv.appendChild(instructions);
        })
        .catch(error => console.error(error));
}

getRandomRecipe();