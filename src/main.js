/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
let count = 1;
const content = document.querySelector('.content');
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
  library.push(new Book());
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
}

content.addEventListener('click', e => {
  if (e.target.className === 'btn') {
    e.target.parentNode.remove();
  }
})

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function createCards() {
  if (library.length > 1) {
    const cards = document.querySelectorAll('div.card');
    cards.forEach(card => {
      content.removeChild(card);
    });
  }
  library.forEach(book => {
    const keys = Object.keys(book);
    const values = Object.values(book);
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.setAttribute('type', 'button');

    for (let i = 0; i < keys.length; i++) {
      const h2 = document.createElement('h2');
      const li = document.createElement('li');
      h2.classList = `${keys[i]}`;
      h2.textContent = `${capitalize(keys[i])}:`;
      li.textContent = `${capitalize(values[i])}`;
      ul.append(h2, li);
    }
    div.classList = 'card';
    btn.classList = 'btn';
    btn.id = `btn-${count}`;
    ul.classList = 'list';
    div.id = `card-${count}`;
    count += 1;
    div.appendChild(btn);
    div.appendChild(ul);
    content.appendChild(div);
    return count;
  });
}

submit.addEventListener('click', () => {
  if (
    title.value === '' ||
    author.value === '' ||
    pages.value === '' ||
    read.value === ''
  ) {
    alert('Please complete each field to submit a new book');
    return;
  }
  addToLibrary();
  createCards();
});
