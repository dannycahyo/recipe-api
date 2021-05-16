const express = require("express");
const recipeController = require("./recipeController");

const router = express.Router();

router.get("/", recipeController.getAllRecipes);
router.post("/", recipeController.addRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
