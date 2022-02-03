function shelfBook(book, genre) {
  if(genre.length < 3) {
    genre.unshift(book);
  }
}


module.exports = {
   shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
