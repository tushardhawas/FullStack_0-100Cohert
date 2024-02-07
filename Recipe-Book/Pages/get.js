document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(recipes => {
            const recipesContainer = document.getElementById('recipes');
            recipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.innerHTML = `
                    <h3>${recipe.Recipe_name}</h3>
                    <p>${recipe.Recipe_data}</p>
                `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
});
