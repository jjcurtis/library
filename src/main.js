/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
const body = document.querySelector('body');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');

const div = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');

const library = [];

function Book() {
  (this.title = title.value),
    (this.author = author.value),
    (this.pages = pages.value),
    (this.read = read.value);
}

function addToLibrary() {
  if (
    title.value === '' ||
    author.value === '' ||
    pages.value === '' ||
    read.value === ''
  ) {
    alert('Please complete each field to submit a new book');
    return;
  }

  library.push(new Book());
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}

function createCard() {
  div.classList = 'card';
  ul.classList = 'list';

  body.append(div);
  div.append(ul);

  const list = document.querySelector('.list');
  const newBook = library[library.length - 1];
  const keys = Object.keys(newBook);
  const values = Object.values(newBook);

  for (let i = 0; i < keys.length; i++) {
    li.classList = `${keys[i]}`;
    li.textContent = `${values[i]}`;
    list.appendChild(li.cloneNode(true));
  }
}

submit.addEventListener('click', e => {
  e.preventDefault();
  addToLibrary();
  createCard();
});
