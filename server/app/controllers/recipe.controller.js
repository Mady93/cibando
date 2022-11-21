const db = require("../models");
const Recipe = db.recipes;

// Create and Save a new Recipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Recipe
  const recipe = new Recipe({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    published: req.body.published ? req.body.published : false,
    difficulty: req.body.difficulty
  });

  // Save the Recipe in the database
  recipe.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the new Recipe."
      });
    });
};


// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
  Recipe.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes."
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Recipe.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found recipe with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving recipe with id=" + id });
    });
};

// Update a Recipe by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  // recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  Recipe.findOneAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found!`
        });
      } else res.send({ message: "Recipe was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Recipe with id=" + id
      });
    });
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Recipe.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
        });
      } else {
        res.send({
          message: "Recipe was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Recipe with id=" + id
      });
    });
};




