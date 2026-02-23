// =======================================
// Practice 1: Why async / await is used
// =======================================

// async and await are used to make asynchronous code
// easier to read and write, avoid callback hell,
// and handle promises in a synchronous-looking way.
const async_await =
  "Async and await are used to improve code readability and maintainability, and to avoid callback hell.";

console.log(async_await);

// =======================================
// Practice 2: Fetch single user using async/await
// =======================================

async function fetchUser() {
  try {
    // Fetch user data from API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/2",
    );

    // Convert response to JavaScript object
    const user = await response.json();

    // Log user data
    console.log(user);
  } catch (error) {
    // Handle any error
    console.error("Failed to fetch user:", error.message);
  }
}

fetchUser();

// =======================================
// Practice 3: Callback Hell (Pyramid of Doom)
// =======================================

// Callback hell happens when multiple asynchronous
// callbacks are nested inside each other,
// making the code hard to read and maintain.
// It can be avoided by using Promises or async/await.
const callBackHell =
  "Callback hell occurs when many nested callbacks are used in asynchronous code. It can be avoided using promises or async/await.";

console.log(callBackHell);

// =======================================
// Practice 4: Load posts by userId (Two ways)
// =======================================

const postUrl = "https://jsonplaceholder.typicode.com/posts?userId=1";

// ---- Way 1: Callback / Promise style ----
fetch(postUrl)
  .then((res) => res.json())
  .then((data) => console.log("Posts (Promise style):", data))
  .catch((error) => console.error(error));

// ---- Way 2: async / await ----
async function getPost() {
  try {
    const response = await fetch(postUrl);
    const posts = await response.json();
    console.log("Posts (Async/Await):", posts);
  } catch (error) {
    console.error(error);
  }
}

getPost();

// =======================================
// Practice 5: Load comments with try-catch-finally
// =======================================

const getComments = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );
    const comments = await response.json();
    console.log(comments);
  } catch (error) {
    console.error(error);
  } finally {
    // Always runs
    console.log("Request completed!");
  }
};

getComments();

// =======================================
// Practice 6: Fetch user by dynamic ID (Template String)
// =======================================

const getUserById = async (id) => {
  try {
    // Validate ID
    if (typeof id !== "number") {
      throw new Error("User ID must be a number");
    }

    // Fetch user using dynamic ID
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    const user = await response.json();

    // If user not found
    if (Object.keys(user).length === 0) {
      throw new Error("User not found");
    }

    console.log("User by ID:", user);
  } catch (error) {
    console.error(error.message);
  }
};

getUserById(5);
