// =======================================
// Practice 1: Nullish Coalescing Assignment
// =======================================
// When x is null, using ??= will assign the right-hand value
let x = null;
x ??= 75;
console.log(x);

// =======================================
// Practice 2: Default value using Nullish Coalescing
// =======================================
// Product object without stock property
const product = {
  name: "poco x2",
  brand: "Xiaomi",
};
console.log(product?.stock ?? 0);

// =======================================
// Practice 3: Set default value for falsy discount
// =======================================
// discount can be falsy (false, 0, "", etc.)
const productDetails = {
  discount: false,
};
console.log(productDetails.discount || 10);

// =======================================
// Practice 4: Optional Chaining with default value
// =======================================
// Vehicle object without engine property
const vehicle = {
  name: "motor",
};
console.log(vehicle?.engine ?? "Engine info missing");

// =======================================
// Practice 5: Optional Chaining for restaurant menu
// =======================================
// Restaurant object without menu
const restaurant = {
  address: "Jigatola",
};
console.log(restaurant?.menu ?? "Menu not available");

// =======================================
// Practice 6: Optional Chaining for nested object
// =======================================
// Profile object without twitter handle
const profile = {
  social: {
    facebook: true,
  },
};
console.log(profile?.social?.twitter ?? "Twitter handle not available");
