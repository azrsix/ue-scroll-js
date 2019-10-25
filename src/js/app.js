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

const yearBox = document.querySelector('.copyright > .year');
const sinceYear = Number(yearBox.innerHTML);
const thisYear  = new Date().getFullYear();
if (sinceYear < thisYear) yearBox.insertAdjacentHTML('beforeend', `-${thisYear}`);
