// Practice 1: JS Object vs JSON String
const jsObject =
  "In a JavaScript object, you can use single or double quotes for strings, but in a JSON string, all keys and string values must use double quotes.";
// =======================================

// Practice 2: User Object → JSON
const user = {
  name: "Miraz",
  email: "miraz@gmail.com",
  address: "Rajshahi",
  orderHistory: ["mouse", "keyboard", "mouse pad"],
};
const userObjFromJson = JSON.parse(userJson);
console.log(userObjFromJson);
// =======================================

// Practice 3: Shopping Cart → JSON
const shoppingCart = {
  product: ["shampoo", "oil", "brush", "toothpaste"],
  totalPrice: 850,
  userDetails: { id: 1, name: "Alia", contact: "01796096261" },
};
const shoppingCartJson = JSON.stringify(shoppingCart);
console.log(shoppingCartJson);
// =======================================

// Practice 4: Weather → JSON
const weather = {
  city: "Rajshahi",
  temperature: 26,
  humidity: 25,
  forecast: [23, 22, 25, 24, 28, 26, 29],
};
const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);
// =======================================

// Practice 5: Movie → JSON → JS Object
const movie = {
  title: "KGF",
  releaseYear: 2018,
  actors: ["Yash", "Srinidhi Shetty", "Garuda Ram"],
  ratings: 4,
};
const movieJson = JSON.stringify(movie);
console.log(movieJson);
const movieParse = JSON.parse(movieJson);
console.log(movieParse);
// =======================================

// Practice 6: Project Management System → JSON
const projectManagementSystem = [
  {
    projectName: "Website Redesign",
    projectDescription:
      "Redesign the company website for better UX and mobile responsiveness.",
    teamMembers: ["Alice", "Bob", "Charlie"],
    deadlines: "2026-03-15",
    tasks: [
      { title: "Create wireframes", assignee: "Alice", status: 1 },
      { title: "Develop frontend", assignee: "Bob", status: 0 },
      { title: "Test on devices", assignee: "Charlie", status: 0 },
    ],
  },
  {
    projectName: "Mobile App Launch",
    projectDescription:
      "Develop and launch the new mobile app for iOS and Android.",
    teamMembers: ["David", "Eva", "Frank"],
    deadlines: "2026-04-10",
    tasks: [
      { title: "Design app UI", assignee: "Eva", status: 1 },
      { title: "Implement backend API", assignee: "David", status: 0 },
      { title: "Beta testing", assignee: "Frank", status: 0 },
    ],
  },
  {
    projectName: "Marketing Campaign",
    projectDescription:
      "Run a social media and email marketing campaign to increase brand awareness.",
    teamMembers: ["Grace", "Hannah", "Ian"],
    deadlines: "2026-03-30",
    tasks: [
      { title: "Create content calendar", assignee: "Grace", status: 1 },
      { title: "Design promotional materials", assignee: "Hannah", status: 0 },
      { title: "Schedule posts & emails", assignee: "Ian", status: 0 },
    ],
  },
];
const pmsJson = JSON.stringify(projectManagementSystem);
console.log(pmsJson);
// =======================================

// Practice 7: Courses → JSON
const courses = [
  {
    courseTitle: "JavaScript Essentials",
    instructorName: "Mirazul Islam",
    duration: 40, // in hours
    lessons: [
      {
        lessonName: "Variables and Data Types",
        duration: 2,
        difficultyLevel: "beginner",
      },
      {
        lessonName: "Functions and Scope",
        duration: 3,
        difficultyLevel: "beginner",
      },
      {
        lessonName: "DOM Manipulation",
        duration: 4,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "ES6 Features",
        duration: 3,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "Asynchronous JS",
        duration: 5,
        difficultyLevel: "advanced",
      },
    ],
  },
  {
    courseTitle: "React.js for Beginners",
    instructorName: "Alice Rahman",
    duration: 35,
    lessons: [
      {
        lessonName: "Introduction to React",
        duration: 2,
        difficultyLevel: "beginner",
      },
      {
        lessonName: "JSX and Components",
        duration: 3,
        difficultyLevel: "beginner",
      },
      {
        lessonName: "State and Props",
        duration: 4,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "React Router",
        duration: 3,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "Hooks and Context API",
        duration: 5,
        difficultyLevel: "advanced",
      },
    ],
  },
  {
    courseTitle: "Python Programming Mastery",
    instructorName: "Bob Karim",
    duration: 50,
    lessons: [
      { lessonName: "Python Basics", duration: 3, difficultyLevel: "beginner" },
      {
        lessonName: "Control Flow and Loops",
        duration: 4,
        difficultyLevel: "beginner",
      },
      {
        lessonName: "Functions and Modules",
        duration: 5,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "File Handling",
        duration: 3,
        difficultyLevel: "intermediate",
      },
      {
        lessonName: "Object-Oriented Programming",
        duration: 5,
        difficultyLevel: "advanced",
      },
    ],
  },
];
const coursesJson = JSON.stringify(courses);
console.log(coursesJson);
// =======================================

// Practice 8: Product Review → JSON → JS Object
const productReview = [
  {
    productName: "Wireless Bluetooth Headphones",
    reviewDetails: {
      name: "Mirazul Islam",
      email: "mirazul@example.com",
    },
    rating: 4,
    reviewText:
      "The sound quality is excellent, and the battery lasts long. Very comfortable to wear, but the ear cushions could be a bit softer.",
  },
];
const productReviewJson = JSON.stringify(productReview);
console.log(productReviewJson);
const productReviewParse = JSON.parse(productReviewJson);
console.log(productReviewParse);
// =======================================
