function shelfBook(book, genre) {
  if(genre.length < 3) {
    genre.unshift(book);
  } return genre;
}

function unshelfBook(bookTitle, bookGenre) {
  var filterBook = []
    for (var i = 0; i < bookGenre.length; i++) {
      if(bookTitle === bookGenre[i].title) {
   filterBook = bookGenre.splice(i,1);
    }
  }return bookGenre;
}

function listTitles(books) {
var bookTitles = []
  for ( var i = 0; i < books.length; i++){
    bookTitles.push(books[i].title);
  } return bookTitles.join(', ');
}


function searchShelf(shelf, bookTitle) {
  // for loop
  // indexOf the title !== -1

  var boolean = false
  for ( var i = 0; i < shelf.length; i++){
    if (shelf[i].title === bookTitle) {
      boolean = true
    }
  } return boolean
}


module.exports = {
   shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
