// Load express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("Your data received! (" + req.body.title + ")");
});

app.listen(8080, () => {
  console.log("Up and running books service");
});
