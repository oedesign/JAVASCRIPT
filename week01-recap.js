// Js Overview
// JavaScript is a high-level programming language primarily used for web development.
// It enables interactive web pages and is an essential part of web applications.
// JavaScript can be used on both the client-side and server-side (with Node.js).

// It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.

// JavaScript Prerequisites
// In order to learn JavaScript, you need have Computer literacy and a basic understanding of HTML and CSS.

// JavaScript Writing Code
// JavaScript code can be written directly in HTML files using <script> tags or in separate .js files.
// Example of JavaScript code in an HTML file:
/*
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <script>
        console.log("Hello, World!");
    </script>
</body>
</html>
*/
// Example of JavaScript code in a separate .js file (script.js):
// console.log("Hello, World!");
// To include the external JavaScript file in an HTML file:
// <script src="script.js"></script>
// JavaScript Comments
// Single-line comment
// This is a single-line comment in JavaScript
/* Multi-line comment
   This is a multi-line comment in JavaScript
*/
// JavaScript Output Methods
// 1. console.log(): Outputs messages to the web console
console.log("This is a message in the console.");
// 2. alert(): Displays an alert dialog box with a message
// alert("This is an alert message.");
// 3. document.write(): Writes content directly to the HTML document
// document.write("This is written to the document.");
// JavaScript Variables
// Variables are used to store data values.
// In JavaScript, you can declare variables using var, let, or const.
var name = "John"; // Using var
let age = 30;      // Using let
const pi = 3.14;   // Using const
// JavaScript Data Types
// JavaScript supports several data types, including:
// 1. String: Represents text, e.g., "Hello"
let message = "Hello, World!";
// 2. Number: Represents numeric values, e.g., 42, 3.14
let count = 42;
// 3. Boolean: Represents true or false values
let isActive = true;
// 4. Object: Represents complex data structures
let person = { firstName: "John", lastName: "Doe" };
// 5. Array: Represents a list of values
let numbers = [1, 2, 3, 4, 5];
// 6. Null: Represents an intentional absence of any object value
let emptyValue = null;
// 7. Undefined: Represents a variable that has not been assigned a value
let notDefined;
let anotherUndefined;
console.log(anotherUndefined); // Outputs: undefined
// JavaScript Operators
// JavaScript provides various operators for performing operations on variables and values.
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
// 2. Assignment Operators: =, +=, -=, *=, /=
let x = 10;
x += 5; // x = x + 5, now x is 15
// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let isEqual = (10 == "10"); // true
let isStrictEqual = (10 === "10"); // false
// 4. Logical Operators: &&, ||, !
let andResult = (true && false); // false
let orResult = (true || false); // true
let notResult = !true; // false
// 5. Ternary Operator: condition ? valueIfTrue : valueIfFalse
let access = (age >= 18) ? "Granted" : "Denied"; // "Granted"
console.log(access); // Outputs: Granted
// This recap provides a brief overview of JavaScript, its prerequisites, how to write code, comments, output methods, variables, data types, and operators.
