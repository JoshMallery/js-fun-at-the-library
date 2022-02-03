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
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
