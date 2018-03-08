'use strict';

const openMenu = document.querySelector('.open-menu');
const docsMenu = document.querySelector('.docs-menu');

if (openMenu !== null && docsMenu !== null) {
  openMenu.addEventListener('click', () => {
    docsMenu.classList.remove('hidden');
    docsMenu.classList.toggle('opened');
    docsMenu.classList.toggle('closed');
  });
}
