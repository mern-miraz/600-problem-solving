// =======================================
// Practice 1: Promise that returns users
const getUser = new Promise((resolve, reject) => {
  const userAvailable = true;
  const users = ["Miraz", "Shakib", "Habib", "Hafiz", "Naim"];

  if (userAvailable) {
    resolve(users);
  } else {
    reject("No user data available");
  }
});
getUser
  .then((userNames) => console.log(userNames))
  .catch((error) => console.log(error));
// =======================================

// Practice 2: Payment processing promise
const payment = new Promise((resolve, reject) => {
  const amount = 5;

  if (typeof amount === "number" && amount > 0) {
    resolve("Payment processing successful");
  } else {
    reject("Increase your amount");
  }
});

payment
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
// =======================================

// Practice 3: sendEmail function with promise
function sendEmail(email) {
  const validEmail = ["miraz@gmail.com"];

  return new Promise((resolve, reject) => {
    if (validEmail.includes(email)) {
      resolve("Email from Nigerian prince");
    } else {
      reject("Let's dance in the spam folder");
    }
  });
}
sendEmail("miraz@gmail.com")
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
// =======================================
