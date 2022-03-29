'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const Book = require('./models/book');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

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
  response.send('Welcome to the Can of Books server!');
});

app.get ('/books', getBooks);
app.post ('/books', postBook);
app.delete ('/books/:id', deleteBook);

async function postBook (req, res, next){
  try{
    let createdBook = await Book.create(req.body);
    res.status(200).send(createdBook);
  } catch(error){
    next(error);
  }
}
async function deleteBook (req, res, next){
  let id = req.params.id;
  try{
    await Book.findByIdAndDelete(id);
    res.send ('book deleted');
  }catch(error){
    next(error);
  }
}

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
