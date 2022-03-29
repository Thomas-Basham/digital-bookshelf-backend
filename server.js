'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const Book = require('./models/book');



app.use(cors());
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received');

});

app.get('/', (request, response) => {
  response.send('Welcome to the city explorer server!');
});

app.get ('/books', getBooks);
async function getBooks(req, res, next){
  try{
    let results = await Book.find();
    res.status(200).send(results);
  } catch(error){
    next(error);
  }
}

// app.use((error, req, res, next)) => {
//   res.status(500).send(error.message);
// };


app.listen(PORT, () => console.log(`listening on ${PORT}`));
