class Student {
    // readonly equivalent in JavaScript
    college = "SVECW";

    // static member
    static collegeCode = "SVECW2026";

    // public members
    name;

    // private member
    #age;

    // protected-like member
    _branch;

    // Constructor
    constructor(name, age, branch) {
        this.name = name;
        this.#age = age;
        this._branch = branch;
    }

    // Public method
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.#age);
        console.log("Branch:", this._branch);
        console.log("College:", this.college);
    }

    // Static method
    static displayCollegeCode() {
        console.log("College Code:", Student.collegeCode);
    }
}

// Creating object using constructor
const student1 = new Student("Sunitha", 20, "AIML");

// Accessing public member
console.log("Student Name:", student1.name);

// Calling public method
student1.displayDetails();

// Accessing static member
console.log("Static College Code:", Student.collegeCode);

// Calling static method
Student.displayCollegeCode();