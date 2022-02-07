

class Librarian {
  constructor(name,placeOfWork) {
    this.name = name;
    this.library = placeOfWork;
  }

  greetPatron(patron, boolean) {
    if (boolean === true){
      return `Good morning, ${patron}!`
    } else {
      return `Hello, ${patron}!`
    }
  }

findBook(title) {
  for (var i = 0; i < this.library.shelves.fantasy.length; i++){
      if(this.library.shelves.fantasy[i].title === title){
        this.library.shelves.fantasy.pop()
        return `Yes, we have ${title}`
      }
  }
  return `Sorry, we do not have ${title}`;
}

calculateLateFee(daysLate){
  return Math.ceil(daysLate*0.25)
}

}






module.exports = Librarian;
