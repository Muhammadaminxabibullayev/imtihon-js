const API_BASE = "https://api.escuelajs.co/api/v1"
const filterPrice = document.querySelector("#price-box");
const filterBtn = document.querySelector(".filter__btn");
const inpPrice = document.querySelector("#filter-input");
const productBox = document.querySelector("#products-box");
const productWrapper = document.querySelector("#product__wrapper");
const seen = document.querySelector(".seen");

filterBtn.addEventListener("click", () => {
    inpPrice.style.display = "block";
})

fetch(API_BASE + "/products")
  .then(response => response.json())
  .then(data => renderProducts(data))

function renderProducts(productData){
  productBox.innerHTML = ""
  productData.map(({images, title, description, price, id}) => {
    const div = document.createElement("div");
    div.className = "product__card"
    div.innerHTML = `
      <img width="100%"  class="product__img" src="${images[0]}" alt="${title}"/>
      <div class="stars">
        <p class="stars">
            <i class="fa-solid fa-star" style="color: #f9f348;"></i>
            <i class="fa-solid fa-star" style="color: #f9f348;"></i>
            <i class="fa-solid fa-star" style="color: #f9f348;"></i>
            <i class="fa-regular fa-star" style="color: #a7aaae;"></i>
            <i class="fa-regular fa-star" style="color: #a7aaae;"></i> 
        </p>
        <small>(12) отзывов</small>
      </div>
      <h2 class="product__card__title">${title}</h2>
      <p class="product__desc">${description}</p>
      <strong>${price}₽</strong>
      <del>$${price + 3000}</del>
      </br>
      </br>
      <button class="learn"><a href="./pages/product.html#${id}">Learn More</a></button>
    `
    productData.length = 12
    productWrapper.appendChild(div)
  })
  productBox.appendChild(productWrapper);
}



