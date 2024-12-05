const cart = [];

// Example products array (ensure this exists in your code)
const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'image2.jpg' },
    // More products can be added here
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.product.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.product.price * item.quantity; // Corrected calculation

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        itemDiv.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.name}">
            <div class="cart-item-details">
                <h3>${item.product.name}</h3>
                <p>Price: $${item.product.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.product.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2); // Display total price
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty');
    } else {
        alert('Proceeding to checkout...');
    }
}
