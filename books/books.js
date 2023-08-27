// Load express
const express = require("express");
const app = express();

// Load mongoose
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://library-user:library-user@library-cluster.6mi0646.mongodb.net/"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("This is the books services");
});

app.listen(8080, () => {
  console.log("Up and running books service");
});
