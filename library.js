class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.ID = crypto.randomUUID();
    }

    get info() {
        return `${this.title}` + " by " + `${this.author}` + ", " + `${this.pages}` + " pages" +
        ", " + `${this.readStatus}`
    }
}
function book(title, author, pages, readStatus) {
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

class Library {

    constructor() {
        this.myLibrary = []
    }
    addBookToLibrary(title, author, pages, readStatus) {
        // creates book object from paramaters and stores it in myLibrary
        // doesn't display it
        const newBook = new Book(title, author, pages, readStatus);
        this.myLibrary.push(newBook);
    }

    display() {
        for(let i = 0; i < this.myLibrary.length; i++) {
            this.makeCard(this.myLibrary[i]);
        }
    }

    removeBook(card) {
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

    makeCard(book) {
        // creates a card within the container that displays the 
        // book's information, a way to remove it from the library,
        // and a way to change the read status of the book.

        let container = document.querySelector(".books");
        let card = document.createElement("div");
        let button = document.getElementById("add_book");
        let info = document.createElement("p");
        card.classList.add("card");
        card.dataset.ID = book.ID;
        info.textContent = book.info;
        card.appendChild(info);
        container.insertBefore(card, button);
        //add a remove button
        let remove = document.createElement("button");
        remove.id = "remove";
        remove.textContent = "Remove book";
        card.appendChild(remove);
        //add functionality to remove button
        remove.addEventListener("click", function() {
            //removes from library and screen
            this.removeBook(card);
        });
        //add a way to update isRead status(after button is clicked, it should change
        //to an undo button)
        let updateReadStatus = document.createElement("button");
        updateReadStatus.id = "readStatus";
        updateReadStatus.textContent = "change read status"
        updateReadStatus.addEventListener("click", function() {
            if (book.readStatus == "have not read it") {
                book.readStatus = "have read it";
            }
            else {
                book.readStatus = "have not read it";
            }
            info.textContent = book.info;
        });
        card.insertBefore(updateReadStatus, remove);
    }
}

function generateLibrary() {
    let library = new Library();
    // add a sample book 
    library.addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "have not read it");
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
        let r;

        if (document.getElementById("haveRead").checked) {
            r = "have read it";
        }
        else {
            r = "have not read it";
        }

        library.addBookToLibrary(t, a, p, r);
        document.getElementById("popup").style.display = "none";
        end = library.myLibrary.length - 1;
        library.makeCard(library.myLibrary[end]);
    });
    library.display();
}
generateLibrary();

let test = new Book("The Hobbit", "J.R.R. Tolkien", 295, "have not read it")
console.log(test.info);