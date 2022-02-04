
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
for (var genres in dLibrary.shelves){ // loop through the keys of shelves
  if ( genres === genre ){  // if the genre of the bookTitle is equal to the shelf name
     for (var i = 0; i < dLibrary.shelves[genres].length; i++){
       if (dLibrary.shelves[genres][i].title === bookTitle) {
           dLibrary.shelves[genres].splice([genres],1)  // remove the book
              return `You have now checked out ${bookTitle} from the ${dLibrary.name}` // inform of book removal
        }
      }
    }
  } return `Sorry, there are currently no copies of ${bookTitle} available at the ${dLibrary.name}` // else say there are no books
}
module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
