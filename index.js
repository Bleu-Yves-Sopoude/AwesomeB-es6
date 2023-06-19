import AwesomeBook from './modules/AwesomeBook.js';
import * as nav from './modules/nav.js';
import addTime from './modules/time.js';

setInterval(addTime, 1000);

document.getElementById('book-list-link').addEventListener('click', nav.listShow);
document.getElementById('add-new-book-link').addEventListener('click', nav.addShow);
document.getElementById('contact-link').addEventListener('click', nav.contactShow);
//document.getElementById('logo').addEventListener('click', nav.homePage);

const newBook = new AwesomeBook();
newBook.displayBooks();
document.querySelector('.addbutton').addEventListener('click', (e) => {
  e.preventDefault();
  newBook.addBook(title, author);
  document.getElementById('bookname').value = '';
  document.getElementById('authorname').value = '';
});

