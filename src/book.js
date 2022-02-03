function createTitle(title) {
return `The ${title}`;
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

function calculatePageCount(BookTitle) {
  //var titleString = createTitle();
var spacesRemoved = BookTitle.replaceAll(" ","");
//return titleString;
//return spacesRemoved;
  return ((BookTitle.length) * 20);
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
