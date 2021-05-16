const recipeModel = require("./recipeModel");

const getAllRecipes = () => {
  return recipeModel.find();
};

const addRecipe = (recipe) => {
  return new recipeModel(recipe).save();
};

const updateRecipe = (recipeId, recipe) => {
  return recipeModel.findByIdAndUpdate(recipeId, recipe);
};

const deleteRecipe = (recipeId) => {
  return recipeModel.findByIdAndDelete(recipeId);
};

module.exports = {
  getAllRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
