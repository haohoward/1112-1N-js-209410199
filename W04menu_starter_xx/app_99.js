import { menu } from './data.js';

const btn = ['all', 'breakfast', 'lunch', 'shakes'];

const categories = ['all', ...new Set(menu.map((item) => item.category))];

//console.log('categories', categories);

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
        <article class="menu-item">
        <img src=${item.image} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>
        `;
  });
  // console.log('displayMenu before', displayMenu);
  displayMenu = displayMenu.join('');
  // console.log('displayMenu after', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

const btnItems = (btn) => {
  let btnMenu = btn.map((category) => {
    return `
    <button type="button" class="filter-btn" data-id='${category}'>${category}</button>
        `;
  });
  btnMenu = btnMenu.join('');
  // console.log("12",btnMenu);
  btnContainer.innerHTML = btnMenu;

  const filterBtns = document.querySelectorAll('.filter-btn');
  // console.log('filterBtns', filterBtns);
  filterBtns.forEach((btns) => {
    btns.addEventListener('click', (e) => {
      // console.log('dataid', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);

      //console.log('filterMenu', filterMenu);
      if (category === 'all') {
        // console.log('all', menu);
        displayMenuItems(menu);
      } else {
        displayMenuItems(filterMenu);
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  btnItems(categories);
});
