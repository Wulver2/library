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
    //display all of books stored in myLibrary array

    for(let i = 0; i < myLibrary.length; i++) {
        makeCard(myLibrary[i]);
    }
};

function makeCard(book) {
    // creates a card within the container that displays the 
    // book's information, a way to remove it from the library,
    // and a way to change the read status of the book.

    let container = document.querySelector(".container");
    let card = document.createElement("div");
    let button = document.querySelector("#add_book");
    card.classList.add("card");
    card.dataset.ID = book.ID;
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
        removeBook(card);
    });
    //add a way to update isRead status(after button is clicked, it should change
    //to an undo button)
    
}

function removeBook(card) {
    // removes it from myLibrary
    for (let i = 0; i < myLibrary.length; i++) {
        if (card.dataset.ID == myLibrary[i].ID) {
            if (i == 0) {
                myLibrary.shift();
            }
            else {
                myLibrary.splice(1, i);
            }
            console.log(myLibrary);
        }
    }
    // removes it from display
    card.remove();
}

function generateLibrary() {
    // add a sample book (add more later)
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "have not read");
    // click event to allow users to add more books
    add_book.addEventListener("click", function() {
        document.getElementById("popup").style.display = "block";
    });
    // the creates the book that the user enters and adds it
    // to the library and displays it
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