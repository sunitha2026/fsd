

// ------------------------------------------------------
// i) FUNCTIONS, PARAMETERS AND RETURN TYPES
// ------------------------------------------------------

console.log("===== FUNCTIONS, PARAMETERS AND RETURN TYPES =====");

function add(a, b) {
    return a + b;
}

function greet(name) {
    return "Hello " + name;
}

function calculateTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}

let sum = add(10, 20);
console.log("Addition:", sum);

let message = greet("Sunitha");
console.log(message);

let total = calculateTotal(80, 85, 90);
console.log("Total Marks:", total);

// ------------------------------------------------------
// ii) ARROW FUNCTIONS
// ------------------------------------------------------

console.log("\n===== ARROW FUNCTIONS =====");

const multiply = (a, b) => {
    return a * b;
};

const welcome = (name) => {
    return "Welcome " + name;
};

const calculateAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

let product = multiply(10, 5);
console.log("Multiplication:", product);

let greeting = welcome("Sunitha");
console.log(greeting);

let average = calculateAverage(80, 85, 90);
console.log("Average Marks:", average);