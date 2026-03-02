// ---------------------------
// Mini Financial System (MFS)
// ---------------------------

const userData = (function () {
  // Array to store all users
  const users = [];

  // Variable to store accumulated processing fees
  let processingFee = 0;

  // Array to store transaction history
  const transactionHistory = [];

  return {
    // ---------------------------
    // Task 1: Register new user
    // ---------------------------
    registerUser: function (name, pin) {
      try {
        // Validation: name and pin must be provided
        if (!name || !pin) throw new Error("Give the name and pin number");

        // Validation: pin must be a 4-digit number
        if (!/^\d{4}$/.test(pin)) throw new Error("Pin must be 4 digits");

        // Create new user object
        const newUser = {
          id: users.length + 1,
          name,
          pin,
          balance: 0, // Initial balance
        };

        // Add user to users array
        users.push(newUser);

        return true; // User added successfully
      } catch (error) {
        return error.message; // Return error instead of undefined
      }
    },

    // ---------------------------
    // Task 2: Login user
    // ---------------------------
    loginUser: function (name, pin) {
      const findUser = users.find((user) => user.name === name);

      // Changed: added check if findUser exists to avoid crash
      if (findUser && findUser.pin === pin) {
        return true;
      } else {
        return false;
      }
    },

    // ---------------------------
    // Task 3: Add money to account
    // ---------------------------
    addMoney: function (name, pin, amount) {
      if (this.loginUser(name, pin)) {
        const findUser = users.find((user) => user.name === name);

        // Add amount to balance
        findUser.balance += amount;

        // Create transaction object
        const transactionId = `TXN${transactionHistory.length + 1}`;
        const transactionObj = {
          transactionId,
          type: "addMoney", // Changed: added type for clarity
          user: name,
          amount,
          balance: findUser.balance,
        };

        transactionHistory.push(transactionObj);

        return `Funds added to ${findUser.name}. Current balance: ${findUser.balance}`;
      } else {
        return "Cannot add funds: Invalid login."; // Changed: return error message instead of console.error
      }
    },

    // ---------------------------
    // Task 4: Check balance
    // ---------------------------
    checkBalance: function (name, pin) {
      if (this.loginUser(name, pin)) {
        const findUser = users.find((user) => user.name === name);
        return `Your current balance is ${findUser.balance}.`;
      } else {
        return "You are not authorized to access this account.";
      }
    },

    // ---------------------------
    // Task 5-7: Send money with processing fee
    // ---------------------------
    sendMoney: function (name, pin, transferName, amount) {
      try {
        // Login check
        if (!this.loginUser(name, pin))
          throw new Error("Unauthorized transaction");

        const sender = users.find((user) => user.name === name);
        const receiver = users.find((user) => user.name === transferName);
        const sendFee = 15;

        // Check if receiver exists
        if (!receiver) throw new Error("Recipient not found");

        // Check sender has enough balance including fee
        // Changed '<' to '<=' so exact balance works
        if (amount + sendFee > sender.balance)
          throw new Error("Insufficient balance");

        // Deduct amount + fee from sender
        sender.balance -= amount + sendFee;

        // Add amount to receiver (receiver does NOT get the fee)
        receiver.balance += amount;

        // Add fee to company
        processingFee += sendFee;

        // Create transaction object
        const tnxId = `TXN${transactionHistory.length + 1}`;
        const transactionObj = {
          tnxId,
          type: "sendMoney",
          sender: name,
          receiver: transferName, // Changed: corrected receiver key
          amount,
          fee: sendFee, // Added fee to transaction record
        };

        transactionHistory.push(transactionObj);

        return `Transfer of ${amount} to ${transferName} successful. Fee: ${sendFee}`;
      } catch (error) {
        return error.message; // Return error message instead of console.error
      }
    },

    // ---------------------------
    // Extra: View transaction history (Optional, helpful)
    // ---------------------------
    viewTransactionHistory: function () {
      return transactionHistory;
    },

    // ---------------------------
    // Extra: View total processing fees collected
    // ---------------------------
    getProcessingFee: function () {
      return processingFee;
    },
  };
})();

// ---------------------------
// Test / Example Usage
// ---------------------------
console.log(userData.registerUser("Miraz", 1234)); // true
console.log(userData.registerUser("Shakib", 1235)); // true

console.log(userData.addMoney("Miraz", 1234, 500)); // Funds added
console.log(userData.checkBalance("Miraz", 1234)); // Balance: 500

console.log(userData.sendMoney("Miraz", 1234, "Shakib", 480)); // Transfer success, fee 15
console.log(userData.checkBalance("Shakib", 1235)); // Balance: 480
console.log(userData.checkBalance("Miraz", 1234)); // Balance: 5

// Invalid operations
console.log(userData.sendMoney("Miraz", 1234, "Shakib", 10)); // Insufficient balance
console.log(userData.addMoney("Unknown", 1111, 100)); // Invalid login
console.log(userData.loginUser("Unknown", 1111)); // false

// Optional: view transactions and fees
console.log(userData.viewTransactionHistory());
console.log("Total processing fees collected:", userData.getProcessingFee());
