const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  players: {
    type: [Object],
    default: {
      player1: "Player 1",
      player2: "Player 2"
    }
  }
});

module.exports = mongoose.model('Player', playerSchema);
