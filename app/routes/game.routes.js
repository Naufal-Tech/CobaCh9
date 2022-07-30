const game = require("../controllers/game.controller.js");
const router = require("express").Router();

// Create a new Game
router.post("/game", game.create);

// Retrieve all Games
router.get("/games", game.getAll);

module.exports = router;

