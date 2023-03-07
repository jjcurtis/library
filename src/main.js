/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');

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

submit.addEventListener('click', e => {
  e.preventDefault();
  addToLibrary();
});
