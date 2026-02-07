// ------------------------------------------------------------
// Task 1: Understanding Export and Import Flow
// ------------------------------------------------------------
const difExport_import =
  "Export means we want to supply biogas from our country to other countries. Import means we want to collect clothes from other countries to our country. In programming language, when we want to use some code from one file to another file, like from math.js to main.js, then we export it from math.js. And when we need to use math.js file code in main.js, then we import it.";
console.log(difExport_import);

// ------------------------------------------------------------
// Task 2: Benefits of Default Export
// ------------------------------------------------------------
const default_export =
  "Default export is a special JavaScript keyword, and it has some advantages. For example, we can declare any name when importing it, and there is no need to use second brackets.";
console.log(default_export);

// ------------------------------------------------------------
// Task 3: Renaming with 'as' Keyword
// ------------------------------------------------------------
const asKey =
  "When we want to change the import name, then we can use the 'as' keyword inside second brackets. First, declare the imported function name, then use 'as', and finally declare a new name. For example: sum as add.";
console.log(asKey);

// ------------------------------------------------------------
// Task 4: Named Export vs. Default Export Syntax
// ------------------------------------------------------------
const difBetweenExportAndDefaultExportName =
  "If we export using only the export keyword, then when we import it into another file, we need to use second brackets like destructuring and call the exported name. But when we use default export, we can use any name during import and there is no need to use second brackets. If we try to use second brackets, then the system will give an error.";
console.log(difBetweenExportAndDefaultExportName);

// ------------------------------------------------------------
// Task 5: Default Export Limitations
// ------------------------------------------------------------
const defaultExportPosibility =
  "If we try to use default export multiple times in one file, then it will give an error because default export can be used only one time in a file.";
console.log(defaultExportPosibility);
