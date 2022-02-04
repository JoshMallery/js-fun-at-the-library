
function createLibrary(libName) {
var library = {}
  library.name = libName
  library.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: []
  }
 return library
}

function addBook(libName1, bookTitle) {
for (var genre in libName1.shelves){
  if (bookTitle.genre === genre){
    libName1.shelves[genre].push(bookTitle)
    }
  }
  return libName1;
}

function checkoutBook() {
  return''
}

module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
