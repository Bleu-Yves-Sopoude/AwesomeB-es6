export default class AwesomeBook {
    constructor() {
      this.addBookBtn = document.querySelector('.addbutton');
      this.bookList = document.querySelector('#book-list');
      this.books = [];
      this.titleElement = document.getElementById('bookname');
      this.authorElement = document.getElementById('authorname');
      this.displayBooks();
      this.addEventListeners();
    }
  
    displayBooks() {
      const storedBooks = localStorage.getItem('books');
      this.books = storedBooks ? JSON.parse(storedBooks) : [];
  
      let listOfBooks = '';
      this.books.forEach((book, index) => {
        listOfBooks += `<div >
              <span class='name-of-book'>${book.title}</span>${'&nbsp;'.repeat(10)}
              <span class='author-of-book'>${book.author}</span>${'&nbsp;'.repeat(10)}
              <button type="button" class="remove-button" id="${index}">Remove</button>
              <hr>
              </div>`;
      });
      this.bookList.innerHTML = listOfBooks;
  
      this.addRemoveEventListeners();
    }

  clearFields() {
  this.titleElement.value = '';
  this.authorElement.value = '';
}

   addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.clearFields();
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  addEventListeners() {
    this.addBookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.getElementById('bookname').value;
      const author = document.getElementById('authorname').value;
      if (title && author !== '') {
        this.addBook(title, author);
      }
    });
  }

  addRemoveEventListeners() {
    const removeBtns = document.querySelectorAll('.remove-button');
      removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.id, 10);
      this.removeBook(index);
    });
  });
  }
}