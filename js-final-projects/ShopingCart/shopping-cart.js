let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 },
];

let cart = [];
let orders = [];

// ---------------- ADD TO CART ----------------
function addToCart(id, quantity) {
  try {
    const product = products.find((p) => p.id === id);
    if (!product) throw new Error("Product not found");
    if (quantity <= 0) throw new Error("Quantity must be greater than zero");
    if (product.stock < quantity) throw new Error("Not enough stock");

    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      // Increase quantity if product already in cart
      if (product.stock < cartItem.quantity + quantity)
        throw new Error("Not enough stock for additional quantity");

      cartItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
      });
    }

    product.stock -= quantity;

    return `${product.name} added to cart. Quantity: ${quantity}`;
  } catch (err) {
    return err.message;
  }
}

// ---------------- VIEW CART ----------------
function viewCart() {
  if (cart.length === 0) return "Cart is empty";

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    console.log(
      `Product: ${item.name}, Quantity: ${item.quantity}, Total: $${item.price * item.quantity}`,
    );
  });

  console.log(`Cart Total Price: $${total}`);
  return cart;
}

// ---------------- PLACE ORDER ----------------
function placeOrder() {
  try {
    if (cart.length === 0) throw new Error("Your cart is empty");

    let totalPrice = 0;
    const orderItems = cart.map((item) => {
      totalPrice += item.price * item.quantity;
      return { ...item };
    });

    const order = {
      id: orders.length + 1,
      items: orderItems,
      totalPrice,
      date: new Date().toLocaleString(),
    };

    orders.push(order);

    // Clear cart
    cart.length = 0;

    return `Order #${order.id} placed successfully. Total: $${totalPrice}`;
  } catch (err) {
    return err.message;
  }
}

// ---------------- EXAMPLES ----------------
console.log(addToCart(2, 3));
console.log(addToCart(1, 2));
console.log(addToCart(2, 1)); // Duplicate product test
console.log("\n--- Cart ---");
viewCart();
console.log("\n--- Place Order ---");
console.log(placeOrder());
console.log("\n--- Orders ---", orders);
console.log("\n--- Cart after Order ---", viewCart());
console.log("\n--- Products Stock ---", products);
