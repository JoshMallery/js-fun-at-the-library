
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

// function addBook(library, book) {
// for (var genre in library.shelves){
//   if (book.genre === genre){
//     library.shelves[genre].push(book)
//     }
//   }
//   return library;
// }

function addBook(library, book) {
library.shelves[book.genre].push(book)
}


function checkoutBook(library, book, genre) {
   if(!library.shelves[genre].length){
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }
 library.shelves[genre].splice(0,1)
return `You have now checked out ${book} from the ${library.name}`

// function checkoutBook(library, book, genre) {
// library.shelves[genre].splice(0,1)
// return `You have now checked out ${book} from the ${library.name}`


}
// function checkoutBook(dLibrary, bookTitle, genre) {
// for (var genres in dLibrary.shelves){ // loop through the keys of shelves
//   if ( genres === genre ){  // if the genre of the bookTitle is equal to the shelf name
//      for (var i = 0; i < dLibrary.shelves[genres].length; i++){
//        if (dLibrary.shelves[genres][i].title === bookTitle) {
//            dLibrary.shelves[genres].splice([genres],1)  // remove the book
//               return `You have now checked out ${bookTitle} from the ${dLibrary.name}` // inform of book removal
//         }
//       }
//     }
//   } return `Sorry, there are currently no copies of ${bookTitle} available at the ${dLibrary.name}` // else say there are no books
// }
module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
