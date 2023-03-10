/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
const count = 1;
const content = document.querySelector('.content');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const submit = document.getElementById('submit');

// const div = document.createElement('div');
// const ul = document.createElement('ul');
// const h2 = document.createElement('h2');
// const li = document.createElement('li');

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

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function createCards() {
  library.forEach(book => {
    const keys = Object.keys(book);
    const values = Object.values(book);
    const div = document.createElement('div');
    const ul = document.createElement('ul');

    for (let i = 0; i < keys.length; i++) {
      const h2 = document.createElement('h2');
      const li = document.createElement('li');
      h2.classList = `${keys[i]}`;
      h2.textContent = `${capitalize(keys[i])}:`;
      li.textContent = `${capitalize(values[i])}`;
      ul.append(h2, li);
    }
    div.classList = 'card';
    ul.classList = 'list';
    div.id = `card-${count}`;
    div.appendChild(ul);
    content.appendChild(div);
  });

  // const newBook = library[library.length - 1];
  // const keys = Object.keys(newBook);
  // const values = Object.values(newBook);

  // for (let i = 0; i < keys.length; i++) {
  //   h2.classList = `${keys[i]}`;
  //   h2.textContent = `${capitalize(keys[i])}:`;
  //   li.textContent = `${capitalize(values[i])}`;
  //   ul.append(h2, li);
  // }

  // div.classList = 'card';
  // ul.classList = 'list';
  // div.id = `card-${count}`;
  // div.appendChild(ul);
  // content.appendChild(div);
  // count += 1;
  // return count;
}

submit.addEventListener('click', e => {
  e.preventDefault();
  addToLibrary();
  createCards();
});
