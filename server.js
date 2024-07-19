const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tictactoe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Welcome to the Tic Tac Toe API!');
});

const gameRoutes = require('./routes/games');
app.use('/games', gameRoutes);

const playerRoutes = require('./routes/player');
app.use('/players', playerRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
