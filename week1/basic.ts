// ------------------------------------------------------
// i) SIMPLE TYPES
// ------------------------------------------------------

// Number
let age: number = 20;
let marks: number = 85.5;

// String
let Name: string = "Sunitha";
let course: string = "AIML";

// Boolean
let isStudent: boolean = true;

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
let data: any = 100;

console.log("\n----- ANY -----");
console.log("Data:", data);

data = "Hello TypeScript";
console.log("Data:", data);

data = true;
console.log("Data:", data);

// UNKNOWN
let value: unknown = "TypeScript";

console.log("\n----- UNKNOWN -----");

if (typeof value === "string") {
    console.log("Value:", value);
}

// VOID
function displayMessage(): void {
    console.log("This is a void function.");
}

console.log("\n----- VOID -----");
displayMessage();

// ------------------------------------------------------
// iii) FUNCTIONS, PARAMETERS AND RETURN TYPES
// ------------------------------------------------------

// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Calling the function
let result: number = add(10, 20);

console.log("\n----- FUNCTION -----");
console.log("Addition:", result);

// Another function with string parameters
function greet(studentName: string): string {
    return "Hello " + studentName;
}

let message: string = greet("Sunitha");

console.log(message);

// Function with multiple parameters
function calculateMarks(m1: number, m2: number, m3: number): number {
    return m1 + m2 + m3;
}

let total: number = calculateMarks(80, 85, 90);

console.log("Total Marks:", total);