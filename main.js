class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(returnStatus) {
    this._isCheckedOut = returnStatus;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingTotal =  this._ratings.reduce((currentTotal, rating) => currentTotal + rating, 0);
    let numOfReviews = this._ratings.length;
    return ratingTotal / numOfReviews;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super (title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}

//Book Instance
let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
let avgRatingHoE = historyOfEverything.getAverageRating();
console.log(avgRatingHoE.toFixed(1))


//Movie Instance
let speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

let avgRatingSpd = speed.getAverageRating();

console.log(avgRatingSpd.toFixed(1));

