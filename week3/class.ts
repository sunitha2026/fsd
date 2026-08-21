class Student {

    // readonly member
    readonly college: string = "SVECW";

    // static member
    static collegeCode: string = "SVECW2026";

    // public member
    public name: string;

    // private member
    private age: number;

    // protected member
    protected branch: string;

    // Constructor
    constructor(name: string, age: number, branch: string) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }

    // Public method
    public displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Branch:", this.branch);
        console.log("College:", this.college);
    }

    // Static method
    static displayCollegeCode(): void {
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