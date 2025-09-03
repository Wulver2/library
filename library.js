const myLibrary = [];

function Book(title, author, pages, readStatus) {
    //Book constructor -- could add other properties
    this.title = title;
    this.author = author;
    this.pages = pages;
    //add a isRead variable
    this.readStatus = readStatus;
    this.ID = crypto.randomUUID();

    this.info = function() {
        return `${this.title}` + " by " + `${this.author}` + ", " + `${this.pages}` + " pages" +
        ", " + `${this.readStatus}`
    }
};

function addBookToLibrary(title, author, pages, readStatus) {
    //creates book object from paramaters and stores it in myLibrary
    const newBook = new Book(title, author, pages, readStatus);
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
    //add a remove button
    let remove = document.createElement("button");
    remove.id = "remove";
    remove.textContent = "Remove book";
    card.appendChild(remove);
    //add functionality to remove button
    remove.addEventListener("click", function() {
        //removes from library and screen
    });
    //add a way to update isRead status(after button is clicked, it should change
    //to an undo button)
    
}

function generateLibrary() {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "have not read");
    add_book.addEventListener("click", function() {
        document.getElementById("popup").style.display = "block";
    });
    popup.addEventListener("submit", (e) => {
        e.preventDefault();
        const t = title.value;
        const a = author.value;
        const p = pages.value;
        const r = read.value;
        addBookToLibrary(t, a, p, r);
        document.getElementById("popup").style.display = "none";
        makeCard(myLibrary.at(-1));
    });
    displayLibrary();
}
generateLibrary();