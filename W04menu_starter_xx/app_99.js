const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.59,
    image: './images/item-1.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
  {
    id: 2,
    title: 'dinner double',
    category: 'dinner',
    price: 13.99,
    image: './images/item-2.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shake',
    price: 13.99,
    image: './images/item-3.jpeg',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
  {
    id: 4,
    title: 'top deluxe breakfast',
    category: 'deluxe breakfast',
    price: 49.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHNTgRuCFXbC4DQNXjgLIAETsnB4gE4igQw&usqp=CAU',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
  {
    id: 5,
    title: 'Hong Kong style luxury dinner',
    category: 'Hong Kong style dinner',
    price: 69.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPwZSowOK9BorlVVFrltuQgPu8J7Mm0cgkg&usqp=CAU',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
  {
    id: 6,
    title: 'frankincense family',
    category: 'frankincense shake',
    price: 13.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiKanG9cRU2gzZ35j2Wdugdw1t-ARVMWTSA&usqp=CAU',
    remote_img: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque, veniam, cumque impedit repudiandae repellat animi quia nostrum laborum expedita deserunt eligendi pariatur ducimus aspernatur. In quisquam quibusdam quis libero.',
  },
];

const btn = ['all', 'breakfast', 'lunch', 'shakes'];

const categories = ['all', ...new Set(menu.map((item) => item.category))];

console.log('categories', categories);

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
  let btnMenu = btn.map((item) => {
    return `
    <button type="button" class="filter-btn" data-id='${item}'>${item}</button>
        `;
  });
  btnMenu = btnMenu.join('');
  // console.log("12",btnMenu);
  btnContainer.innerHTML = btnMenu;
};

window.addEventListener('DOMContentLoaded', () => {
  btnItems(categories);
});

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});
