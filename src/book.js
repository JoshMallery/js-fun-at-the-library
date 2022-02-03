function createTitle(title) {
var addThe = "The " + title;
return addThe
}

function buildMainCharacter(name,age,pronouns) {
var character = {
  name: name,
  age: age,
  pronouns: pronouns
  }
return character
}

function saveReview(text,reviews) {
    if (reviews.indexOf(text) === -1){
      reviews.push(text);
    }
}

function calculatePageCount(bookTitle) {
  return ((bookTitle.length) * 20);
}

function writeBook(bookTitle,bookCharacter,genre) {
var bookObject = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
}
  return bookObject
}

function editBook(bookObject) {
  bookObject.pageCount = ((bookObject.pageCount) * 0.75);

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
