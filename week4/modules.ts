// i) MODULES - export

export const college: string = "SVECW";

export function add(a: number, b: number): number {
    return a + b;
}


// ii) NAMESPACE

namespace Student {
    export let name: string = "Sunitha";
    export let rollNo: number = 101;

    export function display(): void {
        console.log("Name:", name);
        console.log("Roll No:", rollNo);
    }
}


// iii) GENERIC VARIABLE

let numbers: Array<number> = [10, 20, 30];

let names: Array<string> = ["Sunitha", "Anu", "Priya"];


// iv) GENERIC FUNCTION

function display<T>(value: T): T {
    return value;
}


// v) GENERIC FUNCTION WITH MULTIPLE TYPES

function pair<T, U>(first: T, second: U): void {
    console.log("First:", first);
    console.log("Second:", second);
}


// vi) GENERIC CONSTRAINT

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}


// OUTPUT

console.log("College:", college);
console.log("Addition:", add(10, 20));

console.log("Numbers:", numbers);
console.log("Names:", names);

console.log("Generic Number:", display<number>(100));
console.log("Generic String:", display<string>("Hello"));

pair<number, string>(101, "Sunitha");

console.log("String Length:", getLength("Sunitha"));
console.log("Array Length:", getLength([10, 20, 30, 40]));

Student.display();