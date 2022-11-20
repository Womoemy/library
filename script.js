let myLibrary = [];

class Book {
    constructor(title, author, pages, readStatus) {
        // the constructor...
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

// DISPLAY ADD BOOK FORM LOGIC
const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.getElementById("addBookForm");

addBookBtn.addEventListener('click', () => {
    if (addBookForm.style.display === "none") {
        addBookForm.style.display = "block";
    } else {
        addBookForm.style.display = "none";
    }
});

// ADD BOOK TO LIBRARY LOGIC
function addBookToLibrary(e) {
    e.preventDefault();
    // collect form data...
    const addFormData = new FormData(e.target);
    const addFormValues = Object.fromEntries(addFormData.entries());
    addFormValues.readStatus = addFormData.ge("readStatus");

    // create new book from constructor with form data values...
    const newBook = new Book(addFormValues.title, addFormValues.author, addFormValues.pages, addFormValues.readStatus);
    myLibrary.push(newBook);

    // clear form...
    addBookForm.reset();

    
    let theTitle;
    let theAuthor;
    let thePagesNo;
    let theReadStatus;

    // loop through myLibrary array and store values in variables...
    for (let book in myLibrary) {
        theTitle = myLibrary[book].title;
        theAuthor = myLibrary[book].author;
        thePagesNo = myLibrary[book].pages;
        theReadStatus = myLibrary[book].readStatus;
    }

    // create book card div and populate with content...
    const main = document.querySelector("main");
    const bookContainer = document.querySelector(".container");
    const bookCard = document.createElement("div")
    let bookTitle_h3 = document.createElement("h3");
    let bookAuthor_p = document.createElement("p");
    let bookPages_p = document.createElement("p");
    let bookPagesNo_span = document.createElement("span");
    let readStatus_btn = document.createElement("button");
    let deleteBook_btn = document.createElement("button");

    bookTitle_h3.textContent = theTitle;
    bookAuthor_p.textContent = theAuthor;
    bookPagesNo_span.textContent = thePagesNo;
    bookPages_p.append(bookPagesNo_span, " pages")
    readStatus_btn.textContent = theReadStatus;
    deleteBook_btn.textContent = 'Remove';

    bookCard.appendChild(bookTitle_h3);
    bookCard.appendChild(bookAuthor_p);
    bookCard.appendChild(bookPages_p);
    bookCard.appendChild(readStatus_btn);
    bookCard.appendChild(deleteBook_btn);

    main.appendChild(bookContainer);
    bookContainer.appendChild(bookCard);
}
addBookForm.addEventListener('submit', addBookToLibrary);