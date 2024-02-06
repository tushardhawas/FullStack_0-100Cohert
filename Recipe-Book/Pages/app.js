const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const port= 3000;
var bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://kirtsugue:REKxnjunOknu1N8D@cluster0.pzy0u14.mongodb.net/Recipes");

const recipe_data = mongoose.model("recipe_data", {
    Recipe_name: String,
    Recipe_data: String
    
  });

  const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post("/save",async (req,res)=>{
 const {recipeName , recipeDetails}= req.body; 
console.log(recipeName);
console.log(recipeDetails);
 const newRecipe = new recipe_data({
  
    Recipe_name: recipeName,
    Recipe_data: recipeDetails
});

const savedRecipe = await newRecipe.save();

res.status(201).json(savedRecipe);

app.get("/recipes", async (req, res) => {
  try {
      const recipes = await recipe_data.find();
      res.json(recipes);
  } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).send('Internal Server Error');
  }
});

})
app.listen(port);