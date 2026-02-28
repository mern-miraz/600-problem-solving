// ==========================
// 🔹 Practice 1: Difference between Local Storage & Session Storage
// ==========================
const diffLocalAndSessionStorage =
  "Local Storage stores data with no expiration date; data persists even after closing the browser. " +
  "Session Storage stores data only for the current browser session; it is cleared when the tab or browser is closed.";

// ==========================
// 🔹 Practice 2: Save User's Dark Mode Preference
// ==========================

function mode(key) {
  switch (key) {
    case "dark":
      localStorage.setItem("mode", "dark");
      console.log("dark");
      break;
    case "light":
      localStorage.setItem("mode", "light");
      console.log("light");
      break;
    default:
      console.log("Invalid mode");
  }
}
mode("light");

// ==========================
// 🔹 Practice 3: Save User Token in Session Storage
// ==========================

// Save token
sessionStorage.setItem("userToken", "abcd1234");

// Retrieve token
const getToken = sessionStorage.getItem("userToken");
console.log(getToken);

// ==========================
// 🔹 Practice 4: Store & Remove User Name in Local Storage
// ==========================

localStorage.setItem("userName", "Alex");
localStorage.removeItem("userName");

// ==========================
// 🔹 Practice 5: Go Back in Browser History
// ==========================
// Go back 2 steps in browser history
history.go(-2);
