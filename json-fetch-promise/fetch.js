// =======================================
// Practice 1: Why response.json() is used
// =======================================
const dataConvert =
  "After getting data by calling response.json(), it converts JSON data into a JavaScript object so it can be used in JavaScript.";
console.log(dataConvert);

// =======================================
// Practice 2: Why fetch is used
// =======================================
const whyUseFetch =
  "Fetch is used to communicate with a server to get, send, update, or delete data.";
console.log(whyUseFetch);

// =======================================
// Practice 3: Difference between fetch and promise
// =======================================
const diffFetchAndPromise =
  "Fetch returns a promise. A promise is used for handling asynchronous operations, while fetch is specifically used for making HTTP requests to a server.";
console.log(diffFetchAndPromise);

// =======================================
// Practice 4: Fetch all users from API
// =======================================
const userUrl = "https://jsonplaceholder.typicode.com/users";
fetch(userUrl)
  .then((response) => response.json())
  .then((data) => console.log("User List:", data)) // handle data
  .catch((error) => console.log("Error:", error));

// =======================================
// Practice 5: Fetch user by ID
// =======================================
const userByIdUrl = "https://jsonplaceholder.typicode.com/users/1";
fetch(userByIdUrl)
  .then((response) => response.json())
  .then((data) => console.log("User with ID 1:", data))
  .catch((error) => console.log("Error:", error));
