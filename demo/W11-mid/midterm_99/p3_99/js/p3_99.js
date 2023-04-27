import {data} from'../product_data.js';

console.log(data);
const productContainer =document.querySelector('.products-container');
const fetchData=(data)=>{

    let products = data.map((item)=>{
        const {id,img,name,price}=item;
        return `
            <div class="single-product">
            <img
            src=${img}
            class="single-product-img img"
            alt="high-back bench"
            />
            <footer>
            <h5 class="name">${name}</h5>
            <span class="price">$${price}</span>
            </footer>
        </div>
          `
    }).join(``);
    productContainer.innerHTML=products;
}

document.addEventListener('DOMContentLoaded',()=>{
    fetchData(data);
})