document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(recipes => {
            console.log('Fetched recipes:', recipes); // Log fetched recipes for debugging
            const recipesContainer = document.getElementById('recipes');
            recipes.forEach((recipe, index) => {
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe-card');
                recipeElement.style.backgroundColor = index % 2 === 0 ? '#ffdab9' : '#ffe4c4';
                recipeElement.innerHTML = `
                    <h3>${recipe.Recipe_name}</h3>
                    <p style="white-space: pre-line;">${recipe.Recipe_data}</p> <!-- Preserve line breaks -->
                `;
                recipesContainer.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));
});
