const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  board: {
    type: [String],
    default: Array(9).fill(null),
  },
  currentPlayer: {
    type: String,
    default: 'X',
  },
  winner: {
    type: String,
    default: null,
  },
  players: {
    type: [Object],
    default: {
      player1: {
        name: "Player 1",
        cue: 'X'
      },
      player2: {
        name: "Player 2",
        cue: 'O'
      }
    }
  }
});

module.exports = mongoose.model('Game', gameSchema);
