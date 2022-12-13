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
    if (addBookForm.style.display !== "block") {
        addBookForm.style.display = "block";
    } else {
        addBookForm.style.display = "none";
    }
});

addBookForm.addEventListener('submit', addBookToLibrary);

// ADD BOOK TO LIBRARY LOGIC
function addBookToLibrary(e) {
    e.preventDefault();
    // collect form data...
    const addFormData = new FormData(e.target);
    const addFormValues = Object.fromEntries(addFormData.entries());
    addFormValues.readStatus = addFormData.get("readStatus");

    // create new book from constructor with form data values...
    const newBook = new Book(addFormValues.title, addFormValues.author, addFormValues.pages, addFormValues.readStatus);
    myLibrary.push(newBook);

    // clear form...
    addBookForm.reset();

    booksCard();
}

const main = document.querySelector("main");
const bookContainer = document.querySelector(".container");

function booksCard() {
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


    const bookCard = document.createElement("div");
    let bookTitle_h3 = document.createElement("h3");
    let bookAuthor_p = document.createElement("p");
    let bookPages_p = document.createElement("p");
    let bookPagesNo_span = document.createElement("span");
    let readStatus_btn = document.createElement("button");
    let deleteBook_btn = document.createElement("button");

    bookCard.className = "book-card";
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

    myLibrary.forEach((book, index) => {
        bookCard.dataset.bookid = `${index}`;
    }); 
    
    // console.log(readStatus_btn.textContent);

    // readStatus_btn.addEventListener('click', (e) => {
    //     if(e.target.textContent !== "Read") {
    //         e.target.textContent === "Not Read";
    //     } else {
    //         e.target.textContent === "Read";
    //     }
    // });

    deleteBook_btn.addEventListener('click', () => {
        bookCard.remove(myLibrary.pop(bookCard.dataset.bookid));
    });

}