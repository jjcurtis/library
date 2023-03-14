/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
let count = 1;
const content = document.querySelector('.content');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const submit = document.getElementById('submit');

const library = [];

function Book() {
  (this.title = title.value),
  (this.author = author.value),
  (this.pages = pages.value),
  (this.read = yes.checked ? yes.value : no.value);
  this.index = count - 1;
}

Book.prototype.changeReadStatus = function () {
  this.read === yes.value ? (this.read = no.value) : (this.read = yes.value);
};

function addToLibrary() {
  library.push(new Book());
  title.value = '';
  author.value = '';
  pages.value = '';
  yes.checked ? (yes.checked = false) : (no.checked = false);
}

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function createCards() {
  if (library.length > 1) {
    const cards = document.querySelectorAll('div.card');
    cards.forEach(card => {
      content.removeChild(card);
    });
    let indexCount = 0;
    library.map(book => {
      // eslint-disable-next-line no-param-reassign
      book.index = indexCount;
      indexCount += 1;
      return book.index;
    });

    indexCount = 0;
  }

  let cardCount = 1;
  library.forEach(book => {
    const keys = Object.keys(book);
    const values = Object.values(book);
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const btn = document.createElement('button');
    const img = document.createElement('img');
    btn.textContent = 'X';
    btn.setAttribute('type', 'button');

    for (let i = 0; i < keys.length - 1; i++) {
      const h2 = document.createElement('h2');
      const li = document.createElement('li');
      h2.classList = `${keys[i]}`;
      h2.textContent = `${capitalize(keys[i])}:`;
      li.textContent = `${capitalize(values[i])}`;
      ul.append(h2, li);
    }

    div.classList = 'card';
    btn.classList = 'btn';
    btn.id = `btn-${cardCount}`;
    ul.classList = 'list';
    div.id = `${cardCount}`;
    div.dataset.indexNumber = `${cardCount - 1}`;
    div.appendChild(btn);
    div.appendChild(ul);
    img.setAttribute('src', '../rotate-small-left-svgrepo-com.svg');
    img.setAttribute('tabindex', '0');
    img.classList = 'rotate-button';
    div.appendChild(img);
    content.appendChild(div);
    cardCount += 1;
  });

  cardCount = 1;
  count += 1;
  return count;
}

content.addEventListener('click', e => {
  const div = e.target.parentNode;
  const index = library.findIndex(
    book => book.index === +div.dataset.indexNumber
  );

  if (e.target.className === 'btn') {
    div.remove();
    library.splice(index, 1);
  }

  if (e.target.className === 'rotate-button') {
    library[index].changeReadStatus();
  }

  const cards = document.querySelectorAll('div.card');
  cards.forEach(card => {
    content.removeChild(card);
  });
  createCards();
});

submit.addEventListener('click', () => {
  if (
    title.value === '' ||
    author.value === '' ||
    pages.value === '' ||
    (yes.checked === false && no.checked === false)
  ) {
    alert('Please complete each field to submit a new book');
    return;
  }
  addToLibrary();
  createCards();
});
