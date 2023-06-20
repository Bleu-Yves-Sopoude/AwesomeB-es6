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

export {
  listShow, addShow, contactShow,
};