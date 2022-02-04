
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

function checkoutBook(dLibrary, bookTitle, genre) {
for (var genres in dLibrary.shelves){
  if ( genres === genre){
    dLibrary.shelves[genres].splice([genres],1)
  }
 }
  return `You have now checked out ${bookTitle} from the ${dLibrary.name}`
}

module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
