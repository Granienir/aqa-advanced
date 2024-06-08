import { Book } from "./Book.mjs";
import { eBook } from "./EBook.mjs";

const book1 = new Book("Harry Potter", "Joanne Rowling", 1997);
const book2 = new Book("Alice in Wonderland", "Lewis Carrol", 1865);

book1.printInfo();
book2.printInfo();

const ebook1 = new eBook("Bridget Jones's Diary", "Helen Fielding", 1996, "pdf");
const ebook2 = new eBook("Bridget Jones: The Edge of Reason", "Helen Fielding", 1800, "pdf");

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
