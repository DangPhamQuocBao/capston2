// Function to handle adding a product to the cart
function addToCart(event) {
  const productId = event.target.dataset.id;
  // Add your logic here to handle adding the product to the cart
  console.log(`Product ${productId} added to cart.`);
}

// Add event listeners for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
