const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ID = crypto.randomUUID();
};

function addBookToLibrary(title, author, pages) {
    //creates book object from paramaters and stores it in myLibrary
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
console.log(myLibrary.pop().author);