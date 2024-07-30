const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 }
];

function renderProductCard(product) {
    return `
        <div class="card">
            <img src="product-image.jpg" alt="Product Image">
            <h3>${product.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna euismod, ultrices nunc ut, ullamcorper mauris.</p>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        </div>
    `;
}

// Example usage:
const product = { name: 'Product 1', price: 10 };
const productCardHTML = renderProductCard(product);
console.log(productCardHTML);