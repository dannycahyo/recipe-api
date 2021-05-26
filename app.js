const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const recipeRoute = require("./src/api/recipe/recipeRouter");
require("dotenv/config");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    isSucces: true,
    message: "This is recipe server",
  });
});

app.use("/recipe", recipeRoute);

const port = process.env.PORT || 3000;
const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  )
  .catch((err) => console.log(err));
console.log("Listening to port 3000");
