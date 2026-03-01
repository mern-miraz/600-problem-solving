let products = [
  { id: 1, name: "Smartphone", price: 200, stock: 10 },
  { id: 2, name: "Laptop", price: 800, stock: 5 },
];

let cart = [];
let orders = [];

// ---------------- ADD TO CART ----------------
function addToCart(id, quan) {
  try {
    const product = products.find((pro) => pro.id === id);

    if (!product) {
      throw new Error("Product not found");
    }

    if (quan <= 0) {
      throw new Error("Quantity must be greater than zero");
    }

    if (product.stock < quan) {
      throw new Error("Not enough stock");
    }

    product.stock -= quan;

    const newProduct = {
      id: product.id,
      quantity: quan,
      price: product.price,
    };

    cart.push(newProduct);

    return `${product.name} added to cart. Quantity: ${quan}`;
  } catch (error) {
    return error.message;
  }
}

// ---------------- VIEW CART ----------------
function viewCart() {
  if (cart.length === 0) {
    return "Cart is empty";
  }

  cart.forEach((pro) => {
    console.log(pro);
  });

  return cart;
}

// ---------------- PLACE ORDER ----------------
function placeOrder() {
  try {
    if (cart.length === 0) {
      throw new Error("Your cart is empty");
    }

    let totalPrice = 0;

    cart.forEach((pro) => {
      totalPrice += pro.price * pro.quantity;
    });

    orders.push({
      totalPrice: totalPrice,
    });

    cart.length = 0;

    return "Order placed successfully";
  } catch (error) {
    return error.message;
  }
}

console.log(addToCart(2, 5));
console.log("viewCart()", viewCart());
console.log(placeOrder());
