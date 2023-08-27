// Load express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Load mongoose
const mongoose = require("mongoose");

require("./BookModel");
const Book = mongoose.model("Book");

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
  var newBook = {
    title: req.body.title,
    author: req.body.author,
    numberPages: req.body.numberPages,
    publisher: req.body.publisher,
  };

  // Create a new Book
  var book = new Book(newBook);

  book
    .save()
    .then(() => {
      res.send("Successfully inserted");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/getbooks", (req, res) => {
  Book.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/getbook/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.send("Book not found");
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.listen(8080, () => {
  console.log("Up and running books service");
});
