const RecipeService = require("./recipeService");

const getAllRecipes = (req, res) => {
  RecipeService.getAllRecipes()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addRecipe = (req, res) => {
  RecipeService.addRecipe(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateRecipe = (req, res) => {
  const recipeId = req.params.id;
  const recipe = req.body;
  RecipeService.updateRecipe(recipeId, recipe)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteRecipe = (req, res) => {
  const recipeId = req.params.id;
  RecipeService.deleteRecipe(recipeId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getAllRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
