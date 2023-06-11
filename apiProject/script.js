let all = document.querySelector('#All');
let fireG = document.querySelector('#fireG');
const pokemonImagesContainer = document.getElementById('pokemonImages');

function fetchall() {
  pokemonImagesContainer.innerHTML = '';
  fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(response => response.json())
  .then(data => {
    const pokemonImagesContainer = document.getElementById('pokemonImages');

    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const image = document.createElement('img');
          image.src = pokemonData.sprites.front_default;
          image.classList.add('pokemon-image');
          pokemonImagesContainer.appendChild(image);
        });
    });
  })
  .catch(error => {
    console.error('發生錯誤:', error);
  });
}

function fetchfireG() {
  pokemonImagesContainer.innerHTML = '';
fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(response => response.json())
  .then(data => {
    // 在這裡可以對獲取的資料進行篩選
    const filteredData = data.results.filter(pokemon => pokemon.name.startsWith('char'));

    // 創建一個用於顯示圖片的容器
    const pokemonImagesContainer = document.getElementById('pokemonImages');

    // 生成篩選後的圖片元素並添加到容器中
    filteredData.forEach(pokemon => {
      const image = document.createElement('img');
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          image.src = pokemonData.sprites.front_default;
          pokemonImagesContainer.appendChild(image);
        });
    });
  })
  .catch(error => {
    // 處理錯誤情況
    console.error('發生錯誤:', error);
  });
}


  all.addEventListener('click',fetchall);
  fireG.addEventListener('click',fetchfireG);