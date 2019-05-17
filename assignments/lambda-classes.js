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
        return `Today we are leaning about ${subject}`;
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
        this.favSubjects.map(item => console.log(item));
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
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const jack = new Insructor ({
    name: "Jack",
    location: "New York",
    age: 32,
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Oy`
});

const rod = new Insructor ({
    name: "Rod",
    location: "San Francisco",
    age: 36,
    favLanguage: "CSS",
    specialty: "Back-end",
    catchPhrase: `Hey`
});

const jake = new Student ({
    name: "Jake",
    location: "Boise",
    age: 24,
    favSubjects: ["JavaScript", "C++"],
});

const mindy = new Student ({
    name: "Mindy",
    location: "Dallas",
    age: 22,
    favSubjects: ["HTML", "Python"],
});

const satoshi = new ProjectManager ({
    name: "Satoshi",
    location: "Tokyo",
    age: 38,
    gradClassName: "NH1"
});

const hanako = new ProjectManager ({
    name: "Hanako", 
    location: "Kyoto",
    age: 30,
    gradClassName: "NH2"
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