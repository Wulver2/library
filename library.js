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
    let button = document.querySelector("#add_book");
    card.classList.add("card");
    card.textContent = book.info();
    container.insertBefore(card, button);
}

function generateLibrary() {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
    add_book.addEventListener("click", function() {
        document.getElementById("popup").style.display = "block";
    });
    popup.addEventListener("submit", (e) => {
        e.preventDefault();
        const t = title.value;
        const a = author.value;
        const p = pages.value;
        addBookToLibrary(t, a, p);
        document.getElementById("popup").style.display = "none";
        makeCard(myLibrary.at(-1));
    });
    displayLibrary();
}
generateLibrary();