const dbModel = require("../models");
const Game = dbModel.Game;

// Create and Save a new Game
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Game
  const game = {
    name: req.body.name,
    description: req.body.description,
    thumbnail_url: req.body.thumbnail_url,
    game_url: req.body.game_url,
    play_count: req.body.game_url,
  };
  // Save Game in the database
  Game.create(game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Game."
      });
    });
  
};
// // Retrieve all Games from the database.
exports.getAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Game.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving games."
      });
    });
};
