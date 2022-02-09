
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

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}


function checkoutBook(library, book, genre) {
   if(!library.shelves[genre].length){
      return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }
   library.shelves[genre].splice(0,1)
   return `You have now checked out ${book} from the ${library.name}`
}

module.exports = {
   createLibrary,
   addBook,
  checkoutBook
};
