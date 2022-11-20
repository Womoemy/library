let myLibrary = [];

function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  // do stuff here

}


// My changes

// function showAddForm() {
//   const addBookForm = document.getElementById("addBookForm");
//   if (addBookForm.style.display === "none") {
//     addBookForm.style.display = "block";
//   } else {
//     addBookForm.style.display = "none";
//   }
// }


const addBookBtn = document.querySelector(".add-book-btn");
const addBookForm = document.getElementById("addBookForm");


// SHOW ADD BOOK FORM
// function to show add new book form
addBookBtn.addEventListener('click', () => {
  if (addBookForm.style.display === "none") {
    addBookForm.style.display = "block";
  } else {
    addBookForm.style.display = "none";
  }
});

// HANDLE SUBMIT FUNCTION (POSSIBLE ADD TO LIBRARY FUNCTION LOGIC)
function handleSubmit(event) {
  // this function becomes the new addBookToLibrary function...
  event.preventDefault();
  const addFormData = new FormData(event.target);
  const addFormValues = Object.fromEntries(addFormData.entries());
  addFormValues.readStatus = addFormData.getAll("readStatus")

  // console.log(addFormValues);
  myLibrary.push(addFormValues);

  addBookForm.reset();

  let theTitle;
  let theAuthor;
  let thePagesNo;
  let theReadStatus;

  for (let book in myLibrary) {
      theTitle = myLibrary[book].title;
      theAuthor = myLibrary[book].author;
      thePagesNo = myLibrary[book].pages;
      theReadStatus = myLibrary[book].readStatus;
  }

const main = document.querySelector("main");
const bookContainer = document.querySelector(".container");
const bookCard = document.createElement("div")
let bookTitle = document.createElement("h3");
let bookAuthor = document.createElement("p");
let bookPages = document.createElement("p");
let bookPagesNo = document.createElement("span");
let readStatus = document.createElement("button");
let deleteBook = document.createElement("button");

bookTitle.textContent = theTitle;
bookAuthor.textContent = theAuthor;
bookPagesNo.textContent = thePagesNo;
bookPages.append(bookPagesNo, " pages")
readStatus.textContent = theReadStatus;
deleteBook.textContent = 'Remove';

bookCard.appendChild(bookTitle);
bookCard.appendChild(bookAuthor);
bookCard.appendChild(bookPages);
bookCard.appendChild(readStatus);
bookCard.appendChild(deleteBook);

main.appendChild(bookContainer);
bookContainer.appendChild(bookCard);
}
// const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener('submit', handleSubmit);

// CREATE AND DISPLAY NEW BOOK CARD
// const main = document.querySelector("main");
// const bookContainer = document.querySelector(".container");
// const bookCard = document.createElement("div")
// let bookTitle = document.createElement("h3");
// let bookAuthor = document.createElement("p");
// let bookPages = document.createElement("p");
// let bookPagesNo = document.createElement("span");
// let readStatus = document.createElement("button");
// let deleteBook = document.createElement("button");

// bookTitle.textContent = 'I am Zlatan';
// bookAuthor.textContent = 'Zlatan Ibrahimovic';
// bookPagesNo.textContent = '214';
// bookPages.append(bookPagesNo, " pages")
// readStatus.textContent = 'Not Read';
// deleteBook.textContent = 'Remove';

// bookCard.appendChild(bookTitle);
// bookCard.appendChild(bookAuthor);
// bookCard.appendChild(bookPages);
// bookCard.appendChild(readStatus);
// bookCard.appendChild(deleteBook);

// main.appendChild(bookContainer);
// bookContainer.appendChild(bookCard);

// console.log(myLibrary);