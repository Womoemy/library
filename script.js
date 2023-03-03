let myLibrary = [
    {
        title: "Show Your Work!: 10 Ways to Share Your Creativity and Get Discovered",
        author: "Austin Kleon",
        pages: 224,
        readStatus: "Read",
    }
];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Book.prototype.toggleReadStatus = function (){
    // console.log('before reassignment: ');
    // console.log('read status - ' + this.isRead);
    // this.isRead = true;
    
    // console.log('after reassignment: ');
    // console.log('read status - ' + this.isRead);
    // console.log("E don they work o!");
// }

/* global variables
 ==================================================================*/
 const $form = document.querySelector('form');
 const $title = document.getElementById('title');
 const $author = document.getElementById('author');
 const $pages = document.getElementById('pages');
 const $readStatus = document.getElementById('readStatus');
 
 const $book_container = document.querySelector('.container');

/* worker functions 
 ==================================================================*/
const newBook = new Book($title.value, $author.value, $pages.value, $readStatus.value);

Book.prototype.toggleReadStatus = function() {
    console.log(`It might just be working. This is the current value of my read status option ${this.readStatus}`)
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    renderBook();
    $form.reset();
});

function addBookToLibrary() {
    // const newBook = new Book($title.value, $author.value, $pages.value, $readStatus.value);
    // console.log($author.value);
    // console.log(newBook)
    myLibrary.push(newBook);
}


/*  UI section
 ==================================================================*/

function renderBook() {
    $book_container.innerHTML = "";
    // let $book_card = document.createElement('div');
    myLibrary.forEach((book) => {
        const book_card = `
            <div>
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.pages} pages</p>
                <button id="isread-btn">${book.readStatus}</p>
                <button>Delete</button>
            </div>
        `;

        $book_container.insertAdjacentHTML('beforeend', book_card)
    });
    const $isReadBtn = document.getElementById("isread-btn")
    $isReadBtn.addEventListener('click', 
    function() {
        console.log("testing this click event 1, 2...click check")
        // addBookToLibrary()
        newBook.toggleReadStatus()
    }
    // newBook.toggleReadStatus()
    )
}
renderBook();

// const $isReadBtn = document.getElementById("isread-btn")
// $isReadBtn.addEventListener('click', function() {
//     console.log("testing this click event 1, 2...click check")
// })
