// i) MODULES - export

export const college = "SVECW";

export function add(a, b) {
    return a + b;
}


// ii) NAMESPACE equivalent in JavaScript

const Student = {
    name: "Sunitha",
    rollNo: 101,

    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
};


// iii) GENERIC VARIABLE equivalent
// JavaScript lo generics undavu

let numbers = [10, 20, 30];

let names = ["Sunitha", "Anu", "Priya"];


// iv) GENERIC FUNCTION equivalent

function display(value) {
    return value;
}


// v) GENERIC FUNCTION WITH MULTIPLE TYPES equivalent

function pair(first, second) {
    console.log("First:", first);
    console.log("Second:", second);
}


// vi) GENERIC CONSTRAINT equivalent

function getLength(value) {
    return value.length;
}


// OUTPUT

console.log("College:", college);
console.log("Addition:", add(10, 20));

console.log("Numbers:", numbers);
console.log("Names:", names);

console.log("Generic Number:", display(100));
console.log("Generic String:", display("Hello"));

pair(101, "Sunitha");

console.log("String Length:", getLength("Sunitha"));
console.log("Array Length:", getLength([10, 20, 30, 40]));

Student.display();