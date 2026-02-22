// =======================================
// Practice 1: JSON.parse with error handling
// =======================================
try {
  const jsonData = '{"product":"Date","price":450}';
  const another = "data corrupted";
  const result = JSON.parse(jsonData);
  console.log(result);
} catch (error) {
  console.error("Invalid JSON format");
}

// =======================================
// Practice 2: Email validation with custom error
// =======================================
function validateInput(input) {
  try {
    if (!input.includes("@")) {
      throw new Error("Invalid email format");
    }
    console.log("Valid Input: ", input);
  } catch (error) {
    if (error) {
      console.error("Custom Error: ", error.message);
    } else {
      console.error("Unknow Error: ", error.message);
    }
  }
}
validateInput("miraz@");
validateInput("miraz");

// =======================================
// Practice 3: JSON.parse with finally block
// =======================================
try {
  const course = '{"role":"CEO","weeklyHours":1000}';
  const result = JSON.parse(course);
  console.log(result);
} finally {
  console.log("Week is over");
}

// =======================================
// Practice 4: stringOnlyParser validation
// =======================================
function stringOnlyParser(str) {
  try {
    if (typeof str !== "string" || str.length === 0) {
      throw new Error("Input must be a String");
    }
    console.log("Valid String: ", str);
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
}
stringOnlyParser("Miraz");
stringOnlyParser("");

// =======================================
// Practice 5: try-catch-finally (account delete simulation)
// =======================================
try {
  console.log("Deleting account");
  throw new Error("Delete failed");
} catch (error) {
  console.error("Failed to delete account");
} finally {
  console.log("Account deletion attempt finished");
}
