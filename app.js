const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const cards = require("./routes/api/cards");
const decks = require('./routes/api/decks');
const messages = require('./routes/api/messages');
const passport = require('passport');
const app = express();
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/*', (req, res) => {
    res.redirect('/');
  })
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true });
  // .then(() => console.log('Connected to MongoDB successfully'))
  // .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
app.use('/api/users', users);
app.use('/api/cards', cards);
app.use('/api/decks', decks);
app.use('/api/messages', messages);
const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));
app.listen(port);
