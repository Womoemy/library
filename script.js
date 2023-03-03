const $books_table = document.querySelector('.container');

let myLibrary = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        pages: 223,
        readStatus: "Read",
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        pages: 252,
        readStatus: "Read",
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J. K. Rowling",
        pages: 317,
        readStatus: "Read",
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J. K. Rowling",
        pages: 636,
        readStatus: "Read",
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J. K. Rowling",
        pages: 766,
        readStatus: "Read",
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J. K. Rowling",
        pages: 607,
        readStatus: "Not Read",
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        pages: 607,
        readStatus: "Not Read",
    },
];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Book.prototype.toggleReadStatus = function() {
//     // check if I can access readstatus value from inside here
//     console.log(`It might just be working. This is the current value of my read status option ${this.readStatus}`)
// }

// function addBookToLibrary(newBook) {
//     // TODO push books to mylibrary array
//     myLibrary.push(newBook);
// }

function displayBook() {
    myLibrary.forEach((book) => {
        let book_entry = document.createElement('tr');
        for (let value in book) {
            let book_detail = document.createElement('td');
            book_detail.innerHTML = book[value];
            book_entry.appendChild(book_detail)
        }
        $books_table.appendChild(book_entry);
    });
}

displayBook();




/* global variables
 ==================================================================*/
//  const $form = document.querySelector('form');
//  const $title = document.getElementById('title');
//  const $author = document.getElementById('author');
//  const $pages = document.getElementById('pages');
//  const $readStatus = document.getElementById('readStatus');
 
//  const $book_container = document.querySelector('.container');

/* worker functions 
 ==================================================================*/
// const newBook = new Book($title.value, $author.value, $pages.value, $readStatus.value);

// Book.prototype.toggleReadStatus = function() {
//     console.log(`It might just be working. This is the current value of my read status option ${this.readStatus}`)
// }

// $form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     addBookToLibrary();
//     renderBook();
//     $form.reset();
// });

// function addBookToLibrary() {
    // const newBook = new Book($title.value, $author.value, $pages.value, $readStatus.value);
    // console.log($author.value);
    // console.log(newBook)
    // myLibrary.push(newBook);
// }


/*  UI section
 ==================================================================*/

// function renderBook() {
//     $book_container.innerHTML = "";
//     // let $book_card = document.createElement('div');
//     myLibrary.forEach((book) => {
//         const book_card = `
//             <div>
//                 <h3>${book.title}</h3>
//                 <p>${book.author}</p>
//                 <p>${book.pages} pages</p>
//                 <button id="isread-btn">${book.readStatus}</p>
//                 <button>Delete</button>
//             </div>
//         `;

//         $book_container.insertAdjacentHTML('beforeend', book_card)
//     });
//     const $isReadBtn = document.getElementById("isread-btn")
//     $isReadBtn.addEventListener('click', 
//     function() {
//         console.log("testing this click event 1, 2...click check")
//         // addBookToLibrary()
//         newBook.toggleReadStatus()
//     }
//     // newBook.toggleReadStatus()
//     )
// }
// renderBook();

// const $isReadBtn = document.getElementById("isread-btn")
// $isReadBtn.addEventListener('click', function() {
//     console.log("testing this click event 1, 2...click check")
// })
