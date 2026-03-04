/*********************************
 * Base Data
 *********************************/
const restaurants = [
  {
    id: 1,
    name: "Pizza Place",
    menu: [{ name: "Pepperoni Pizza", price: 12 }],
  },
  {
    id: 2,
    name: "Sushi House",
    menu: [{ name: "Salmon Sushi", price: 15 }],
  },
];

const orders = [];
const reviews = [];

const discountCodes = {
  SAVE10: 10,
  WELCOME15: 15,
};

/*********************************
 * Task 1: getFoodPrice
 *********************************/
function getFoodPrice(restaurantName, foodName) {
  const restaurant = restaurants.find((res) => res.name === restaurantName);

  if (!restaurant) {
    return "Restaurant not found.";
  }

  const food = restaurant.menu.find((item) => item.name === foodName);

  if (!food) {
    return "Food Item not found.";
  }

  return food.price;
}

/*********************************
 * Task 2: placeOrder
 *********************************/
function placeOrder(customer, restaurantName, foodItem, discountCode) {
  const price = getFoodPrice(restaurantName, foodItem);

  if (typeof price !== "number") {
    return price;
  }

  let finalPrice = price;

  if (discountCode) {
    if (!discountCodes[discountCode]) {
      return "Invalid coupon code.";
    }

    const discountPercent = discountCodes[discountCode];
    const discountAmount = (price * discountPercent) / 100;
    finalPrice = Math.floor(price - discountAmount);
  }

  const orderId = orders.length + 1;

  const order = {
    id: orderId,
    customerName: customer,
    restaurantName,
    foodName: foodItem,
    price: finalPrice,
    status: "Pending",
  };

  orders.push(order);

  return `Your Order is Successfully placed. Order Id: ${orderId}`;
}

/*********************************
 * Task 3: Total Sales of Restaurant
 *********************************/
function getTotalSales(restaurantName) {
  const restaurantOrders = orders.filter(
    (order) => order.restaurantName === restaurantName,
  );

  if (restaurantOrders.length === 0) {
    return 0;
  }

  return restaurantOrders.reduce((total, order) => total + order.price, 0);
}

/*********************************
 * Task 4: submitReview
 *********************************/
function submitReview(orderId, restaurantName, rating, reviewText) {
  if (orderId == null || !restaurantName) {
    return "Invalid order or restaurant.";
  }

  const validOrder = orders.find(
    (order) => order.id === orderId && order.restaurantName === restaurantName,
  );

  if (!validOrder) {
    return "না খেয়ে ভুয়া রিভিউ দিবেন না, প্লিজ।";
  }

  if (typeof rating !== "number" || rating < 0 || rating > 5) {
    return "Ratings must be between 0 and 5.";
  }

  if (reviewText.length < 20) {
    return "Review must be at least 20 characters long.";
  }

  const reviewId = reviews.length + 1;

  const review = {
    id: reviewId,
    orderId,
    restaurantName,
    rating,
    review: reviewText,
  };

  reviews.push(review);

  return `Review submitted successfully. Your Review Id: ${reviewId}`;
}

/*********************************
 * Sample Calls
 *********************************/

placeOrder("Alex", "Pizza Place", "Pepperoni Pizza", "SAVE10");
placeOrder("Alex", "Pizza Place", "Pepperoni Pizza");

getTotalSales("Pizza Place");

submitReview(
  1,
  "Pizza Place",
  5,
  "This pizza was absolutely amazing and super tasty!",
);
