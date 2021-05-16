const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const recipeRoute = require("./api/recipe/recipeRouter");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    isSucces: true,
    message: "This is recipe server",
  });
});

app.use("/recipe", recipeRoute);

// const dbURI =
//   "mongodb+srv://dannygg:ggwp123@nodeapp.la8gg.mongodb.net/recipe-management?retryWrites=true&w=majority";

const dbURI =
  "mongodb://dannygg:ggwp123@nodeapp-shard-00-00.la8gg.mongodb.net:27017,nodeapp-shard-00-01.la8gg.mongodb.net:27017,nodeapp-shard-00-02.la8gg.mongodb.net:27017/recipe-management?ssl=true&replicaSet=atlas-sdo70z-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));
console.log("Listening to port 3000");
