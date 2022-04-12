'use strict';
const axios = require('axios');

// Get data from API URL
async function getGoogleBooks(request, response) {
  try {
    let q = request.query.q;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${q}`;
    let bookSearch = await axios.get(url);
    let bookData = [];
    bookSearch.data.items.map((element) => {
      let selectedBook = new GoogleBook(element);
      bookData.push(selectedBook);
    });
    response.send(bookData);
  } catch (error) {
    console.log(error);
  }
}

class GoogleBook {
  constructor(element) {
    this.title = element.volumeInfo.title;
    this.author = element.volumeInfo.authors;
    this.description = element.volumeInfo.description;
    this.canonicalVolumeLink = element.volumeInfo.canonicalVolumeLink;
    this.previewLink = element.volumeInfo.previewLink;
  }
}

module.exports = getGoogleBooks;
