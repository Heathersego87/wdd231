const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

// (optional but helpful) see the URL info in console
console.log(window.location);

function getParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function productTemplate(product) {
  return `
    <section class="product">
      <img src="${product.image}" alt="${product.name}">
      <div class="product__details">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      </div>
    </section>
  `;
}

function output(selector, markup) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML("beforeend", markup);
}

function getProductDetails() {
  const id = getParam("productId");

  if (!id) return;

  const product = products.find((p) => p.id == id);

  if (!product) return;

  output("main", productTemplate(product));
}

getProductDetails();