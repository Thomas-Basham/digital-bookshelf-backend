'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;


const bookSchema = new Schema ({
  title: {type: String, require: true},
  description: {type: String, require: true},
  status: {type: Boolean, require: true},
  email: {type: String, require: true},
  author: {type: String, require: true},
  canonicalVolumeLink: {type: String, require: true}

});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
