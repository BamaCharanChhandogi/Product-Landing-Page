// Sample product data
const products = [
  {
    id: 1,
    name: 'Adidas ',
    price: 10,
    image: 'f1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    image: 'f2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 15,
    image: 'f3.jpg'
  }
];

// Function to render cart items
function renderCartItems() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  for (const product of products) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const itemImage = document.createElement('img');
    itemImage.src = `asset/img/products/${product.image}`;
    itemImage.alt = product.name;

    const itemDetails = document.createElement('div');
    itemDetails.classList.add('item-details');
    itemDetails.textContent = product.name;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `$${product.price}`;

    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemDetails);
    cartItem.appendChild(itemPrice);

    cartItemsDiv.appendChild(cartItem);

    totalPrice += product.price;
  }

  const totalAmountSpan = document.getElementById('total-amount');
  totalAmountSpan.textContent = totalPrice;
}

// Render initial cart items
renderCartItems();
