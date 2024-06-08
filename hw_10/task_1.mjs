import { Book } from "./Book.mjs";
import { eBook } from "./EBook.mjs";

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1995);
const book2 = new Book("The Lord of the Rings", "J. R. R. Tolkien", 1968);

book1.printInfo();
book2.printInfo();

const ebook1 = new eBook("A Game of Thrones", "	George R. R. Martin", 1996, "pdf");
const ebook2 = new eBook("A Clash of Kings", "	George R. R. Martin", 1999, "pdf");

ebook1.printInfo();
ebook2.printInfo();

let booksArr1 = [
  { name: book1.name, author: book1.author, issueDate: book1.issueDate },
  { name: book2.name, author: book2.author, issueDate: book2.issueDate },
  { name: ebook1.name, author: ebook1.author, issueDate: ebook1.issueDate, fileFormat: ebook1.fileFormat },
  { name: ebook2.name, author: ebook2.author, issueDate: ebook2.issueDate, fileFormat: ebook2.fileFormat },
];
console.log(Book.minIssueYear(booksArr1));
console.log(eBook.bookUpgrade(book1, ".pdf"));
