export class Book {
  constructor(name, author, issueDate) {
    this._name = name;
    this._author = author;
    this._issueDate = issueDate;
  }

  static minIssueYear(arr) {
    let minIssueYear = arr[0];
    for (const a of arr) {
      if (a.issueDate < minIssueYear.issueDate) {
        minIssueYear = a;
      }
    }
    return minIssueYear;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name != "string") {
      console.log("Type of name value should be string");
    }
    this._name = name;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (typeof author != "string") {
      console.log("Type of author value should be string");
    }
    this._author = author;
  }

  get issueDate() {
    return this._issueDate;
  }

  set issueDate(issueDate) {
    if (typeof issueDate != "number") {
      console.log("Type of issueDate value should be number");
    }
    this._issueDate = issueDate;
  }

  printInfo() {
    console.log(`The "${this._name}" has been written by ${this._author} in ${this._issueDate}`);
  }
}

// const hP1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1995);
// let newAdding = hP1.printInfo();
// hP1.issueDate = 1234;
// hP1.printInfo();
// const lOtR = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1968);
// newAdding = lOtR.printInfo();
