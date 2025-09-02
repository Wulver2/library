const myLibrary = [];

function Book(title, author, pages) {
    //Book constructor -- could add other properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ID = crypto.randomUUID();

    this.info = function() {
        return `${this.title}` + " by " + `${this.author}` + ", " + `${this.pages}` + " pages"
    }
};

function addBookToLibrary(title, author, pages) {
    //creates book object from paramaters and stores it in myLibrary
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
};

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        makeCard(myLibrary[i]);
    }
};

function makeCard(book) {
    let container = document.querySelector(".container");
    let card = document.createElement("div");
    card.classList.add("card");
    card.textContent = book.info();
    container.appendChild(card);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);

displayLibrary();