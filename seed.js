'use strict';

require('dotenv').config();
const mongoose = requre('mongoose');

const Book = require('./models/book');

async function seed() {
  // title: {type: String, require: true},
  // description: {type: String, require: true},
  // status: {type: Boolean, require: true},
  // email: {type: String, require: true}
  await Book.create({
    title: 'The Power of Habit',
    description: 'A book about changing your behaviors through habits.',
    status: true,
    email: 'bashamtg@gmail.com'
  });

  await Book.create({
    title: 'Musashi',
    description: 'A historical fiction about a samuri.',
    status: true,
    email: 'colegibbs0@gmail.com'
  });

  await Book.create({
    title: 'The Hobit',
    description: 'A fictional fairy tale story.',
    status: true,
    email: 'colegibbs0@gmail.com'
  });

}

