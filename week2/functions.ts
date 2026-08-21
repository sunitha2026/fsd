

// ------------------------------------------------------
// i) FUNCTIONS, PARAMETERS AND RETURN TYPES
// ------------------------------------------------------

console.log("===== FUNCTIONS, PARAMETERS AND RETURN TYPES =====");

// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function with string parameter and return type
function greet(name: string): string {
    return "Hello " + name;
}

// Function with multiple parameters and return type
function calculateTotal(m1: number, m2: number, m3: number): number {
    return m1 + m2 + m3;
}

// Calling functions
let sum: number = add(10, 20);
console.log("Addition:", sum);

let message: string = greet("Sunitha");
console.log(message);

let total: number = calculateTotal(80, 85, 90);
console.log("Total Marks:", total);


// ------------------------------------------------------
// ii) ARROW FUNCTIONS
// ------------------------------------------------------

console.log("\n===== ARROW FUNCTIONS =====");

// Arrow function with parameters and return type
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Arrow function with string parameter and return type
const welcome = (name: string): string => {
    return "Welcome " + name;
};

// Arrow function with multiple parameters and return type
const calculateAverage = (a: number, b: number, c: number): number => {
    return (a + b + c) / 3;
};

// Calling arrow functions
let product: number = multiply(10, 5);
console.log("Multiplication:", product);

let greeting: string = welcome("Sunitha");
console.log(greeting);

let average: number = calculateAverage(80, 85, 90);
console.log("Average Marks:", average);