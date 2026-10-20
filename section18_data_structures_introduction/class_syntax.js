// 1. Explain what a class is
// A class is a pattern for creating objects with pre-defined properties and methods.
// Allows to instantiate many objects with the same structure and behavior.

// 2. How JS implements the idea of classes  
// JavaScript classes are primarily syntactic sugar. JS Class doesn't introduce a new object-oriented model.
// Classes are implemented using special functions and prototypes under the hood.

// 3. Define terms like abstraction, encapsulation and polymorphism
// 4. User ES2015 class syntax

class Person {
    constructor(firstName, secondName) {
        this.name = firstName;
        this.secondName = secondName;
    }

    fullName() {
        return `${this.name} ${this.secondName}`;
    }
}

class Student extends Person {
    // Private field: only accessible inside this class, not even from subclasses.
    #lateCount;

    constructor(firstName, secondName, grade) {
        super(firstName, secondName);
        this.grade = grade;
        this.#lateCount = 0;
        this.scores = [];
    }

    markLate() {
        this.#lateCount += 1;
    }

    isLateIdiot() {
        return this.#lateCount >= 3;
    }

    addScore(score) {
        this.scores.push(score);
    }

    static isStudentIdiot(student) {
        const scoresSum = student.scores.reduce((sum, score) => sum + score, 0);
        return scoresSum / student.scores.length < 75;
    }
}

const student1 = new Student('John', 'Doe', 1);

console.log(student1.fullName()); // John Doe
student1.markLate();
console.log("isLateIdiot", student1.isLateIdiot()); // false
student1.markLate();
student1.markLate();
console.log("isLateIdiot", student1.isLateIdiot()); // true
student1.addScore(77);
student1.addScore(70);
console.log("student1 scores", student1.scores); // [77, 70]
// console.log("student1 late count", student1.#lateCount);
console.log("isStudentIdiot", Student.isStudentIdiot(student1)); // true

const student2 = new Student('Jane', 'Smith', 3);
console.log(student2.fullName()); // Jane Smith
console.log("isLateIdiot", student2.isLateIdiot()); // false
student2.markLate();
student2.markLate();
console.log("isLateIdiot", student2.isLateIdiot()); // false
student2.addScore(90);
console.log("student2 scores", student2.scores); // [90]
console.log("isStudentIdiot", Student.isStudentIdiot(student2)); // false

