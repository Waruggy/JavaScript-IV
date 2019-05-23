// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Insructor extends Person {
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Insructor {
    constructor (managerAttributes) {
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;
    }
    
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const jack = new Insructor ({
    name: "Jack",
    age: 32,
    location: "New York",
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Oy`
});

const rod = new Insructor ({
    name: "Rod",
    age: 36,
    location: "San Francisco",
    favLanguage: "CSS",
    specialty: "Back-end",
    catchPhrase: `Hey, get back to work`
});

const jake = new Student ({
    name: "Jake",
    age: 24,
    location: "Boise",
    previousBackground: "Cashier",
    className: "A3",
    favSubjects: ["JavaScript", "C++"]
});

const mindy = new Student ({
    name: "Mindy",
    age: 22,
    location: "Dallas",
    previousBackground: "Waitress",
    className: "B1",
    favSubjects: ["HTML", "Python"]
});

const satoshi = new ProjectManager ({
    name: "Satoshi",
    age: 38,
    location: "Tokyo",
    gradClassName: "NH1",
    favInstrucor: "Bernard"
});

const hanako = new ProjectManager ({
    name: "Hanako",
    age: 30,
    location: "Kyoto",
    gradClassName: "NH2",
    favInstrucor: "Lee"
});

console.log(hanako.speak());
console.log(mindy.listsSubjects());
console.log(hanako.debugsCode(mindy, "CSS"));
console.log(satoshi.standUp("NHK43"));  
console.log(mindy.sprintChallenge("C++"));
console.log(jack.demo("Progress"));
console.log(jack.grade(mindy,"JavaScript"));
console.log(satoshi.speak());
console.log(jake.PRAssignment("Functional"));
console.log(rod.catchPhrase);