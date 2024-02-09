const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const jwt = require('jsonwebtoken')
// Connect to MongoDB Atlas database
mongoose.connect("mongodb+srv://kirtsugue:REKxnjunOknu1N8D@cluster0.pzy0u14.mongodb.net/Recipes");

// Define the schema for recipe data
const recipeSchema = mongoose.Schema({
  Recipe_name: String,
  Recipe_data: String
});

// Create a model based on the schema
const recipe_data = mongoose.model("recipe_data", recipeSchema);
const token = jwt.sign(recipe_data,"secret");
console.log(token);
// Initialize Express app
const app = express();

app.use(cors()); 
// Serve static files from the 'public' directory
// app.use(express.static('public'));

// Enable JSON parsing middleware
app.use(express.json());

// Enable parsing of URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request to save a new recipe
app.post("/save", async (req, res) => {
    const { recipeName, recipeDetails } = req.body;
    // console.log(recipeName);
    // console.log(recipeDetails);
    const newRecipe = new recipe_data({
        Recipe_name: recipeName,
        Recipe_data: recipeDetails
    });
    const savedRecipe = await newRecipe.save();
    res.status(201);
    // res.write('<script>alert("Recipe saved successfully.");</script>');
    // res.end();
});

// Handle GET request to fetch all recipes from the database
app.get("/recipes", async (req, res) => {
    try {
        // Fetch all recipes from the database
        const recipes = await recipe_data.find();
        // Send the fetched recipes as a JSON response
        res.json(recipes);
    } catch (error) {
        // Handle any errors that occur during fetching
        console.error('Error fetching recipes:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server and listen on port 3000
app.listen(3000);
