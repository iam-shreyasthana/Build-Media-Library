// Parent Class.........

class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false; 
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    toggleCheckOutStatus(){
      if(this._isCheckedOut === true){
        this._isCheckedOut = false;
        return this._isCheckedOut;
      }
      else{
        this._isCheckedOut = true;
        return this._isCheckedOut;
      }
    }
  
    getAverageRating(){
      const lengthOfArray = this._ratings.length;
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0); 
      return ratingsSum/lengthOfArray;
    }
  
    addRating(rating){
      this._ratings.push(rating);
    }
  
    set isCheckedOut(check){
      this._isCheckedOut = check;
    }
  
  };
  
  class Book extends Media{
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      return this._pages;
    }
  
  };
  
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
      this.isCheckedOut = false;
      this._ratings = [];
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  
  }
  
  //BOOK INSTANCE.........
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  //Movie Instance..........
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  
  
  
  