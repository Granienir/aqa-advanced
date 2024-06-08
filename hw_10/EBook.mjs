import { Book } from "./Book.mjs";

export class eBook extends Book {
  //
  static findEarliest; //
  constructor(name, author, issueDate, fileFormat) {
    super(name, author, issueDate);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(fileFormat) {
    if (typeof fileFormat != `string`) {
      console.log(`Check the value. Type of fileFormat should be string`);
      return;
    }
    this._fileFormat = fileFormat;
  }

  printInfo() {
    console.log(
      `The "${this._name}" has been written by ${this._author} in ${this._issueDate}. 
      The book is available in the format - ${this._fileFormat}.`
    );
  }

  static bookUpgrade(Book, fileFormat) {
    const newEbook = new eBook(Book.name, Book.author, Book.issueDate, fileFormat);
    return newEbook;
  }
}

// const hp1e = new eBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1995, "pdf");
// let newAdding = hp1e.printInfo();

//console.log(eBook.bookUpgrade("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1995), "pdf"));
