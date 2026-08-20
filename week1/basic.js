// ------------------------------------------------------
// i) SIMPLE TYPES
// ------------------------------------------------------

// Number
let age = 20;
let marks = 85.5;

// String
let Name = "Sunitha";
let course = "AIML";

// Boolean
let isStudent = true;

console.log("----- SIMPLE TYPES -----");
console.log("Name:", Name);
console.log("Age:", age);
console.log("Course:", course);
console.log("Marks:", marks);
console.log("Is Student:", isStudent);

// ------------------------------------------------------
// ii) SPECIAL TYPES
// ------------------------------------------------------

// ANY
let data = 100;

console.log("\n----- ANY -----");
console.log("Data:", data);

data = "Hello JavaScript";
console.log("Data:", data);

data = true;
console.log("Data:", data);

// UNKNOWN
let value = "JavaScript";

console.log("\n----- UNKNOWN -----");

if (typeof value === "string") {
    console.log("Value:", value);
}

// VOID
function displayMessage() {
    console.log("This is a void function.");
}

console.log("\n----- VOID -----");
displayMessage();

// ------------------------------------------------------
// iii) FUNCTIONS, PARAMETERS AND RETURN VALUES
// ------------------------------------------------------

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("\n----- FUNCTION -----");
console.log("Addition:", result);

function greet(studentName) {
    return "Hello " + studentName;
}

let message = greet("Sunitha");

console.log(message);

function calculateMarks(m1, m2, m3) {
    return m1 + m2 + m3;
}

let total = calculateMarks(80, 85, 90);

console.log("Total Marks:", total);