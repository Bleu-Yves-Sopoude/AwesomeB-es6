const addNewBookLink = document.getElementById('add-new-book-link');
const bookListLink = document.getElementById('book-list-link');
const contactLink = document.getElementById('contact-link');
const bookListSection = document.getElementById('book-list');
const addNewBookSection = document.getElementById('form');
const contactSection = document.getElementById('contact');



const listShow = () => {
  addNewBookSection.style.display = 'none';
  bookListSection.style.display = 'block';
  contactSection.style.display = 'none';
  };


const addShow = () => {
  addNewBookSection.style.display = 'block';
  bookListSection.style.display = 'none';
  contactSection.style.display = 'none';
  };

const contactShow = () => {
  addNewBookSection.style.display = 'none';
  bookListSection.style.display = 'none';
  contactSection.style.display = 'block';
  };

const homePage = () => {
    addSection.style.display = 'none';
    listSection.style.display = 'none';
    contactSection.style.display = 'none';
    home.style.display = 'block';
    list.style.color = 'black';
    addNew.style.color = 'black';
  };

export {
    listShow, addShow, contactShow, homePage,
  };
 