// Book Class
class Book {
    constructor(title, author, isbn, availableCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.availableCopies = availableCopies;
    }

    borrowBook() {
      if (this.availableCopies > 0) {
        this.availableCopies -= 1;
      } else {
        console.log("Sorry, this book is currently unavailable.");
      }
    }

    returnBook() {
      this.availableCopies += 1;
    }
  }

  // Library Class
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      this.books.push(book);
    }

    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }

    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    }

    listAllBooks() {
      this.books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
      });
    }
  }

  // Initialize Library
let library = new Library("My Library");

// Create Books
let book1 = new Book("The Fellowship of the Ring", "John Ronald Tolkien", "9788496208490", 5);
let book2 = new Book("A Game of Thrones (A Song of Ice and Fire, #1)", "George R. R. Martin", "9781101965870", 3);
let book3 = new Book("The Name of the Wind", "Patrick Rothfuss", "9780756404741", 3);
let book4 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "9780747532699", 4);

// Add books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

//remove book
let isbnToRemove = "9788496208490"; 
library.removeBook(9780756404741);

//testing
console.log("Updated Library:");
console.log(library);

console.log("Methods in Book class:");
console.log(Object.getOwnPropertyNames(Book.prototype));

console.log("Methods in Library class:");
console.log(Object.getOwnPropertyNames(Library.prototype));

console.log("Borrowing a book...");
book1.borrowBook();
console.log(`Available copies of "${book1.title}": ${book1.availableCopies}`);

console.log("Returning a book...");
book1.returnBook();
console.log(`Available copies of "${book1.title}": ${book1.availableCopies}`);

console.log("Finding a book by title...");
let foundBook = library.findBookByTitle("The Fellowship of the Ring");
console.log(`Found book: ${foundBook.title}`);

console.log("Listing all books...");
library.listAllBooks();
