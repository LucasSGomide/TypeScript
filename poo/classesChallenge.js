"use strict";
// FIRST CHALLENGE
class Motorcycle {
    constructor(name) {
        this.name = name;
        this.currentSpeed = 0;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    increaseSpeed(speed) {
        this.currentSpeed += speed;
    }
}
const XJ6 = new Motorcycle('XJ6');
XJ6.honk();
console.log(XJ6);
console.log(XJ6.currentSpeed);
XJ6.increaseSpeed(60);
console.log(XJ6.currentSpeed);
// SECOND CHALLENGE
class TwoDimentionObject {
    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Triangle extends TwoDimentionObject {
    calculatesArea() {
        this.result = (this.base * this.height) / 2;
    }
}
class Rectangle extends TwoDimentionObject {
    calculatesArea() {
        this.result = this.base * this.height;
    }
}
const triangle = new Triangle(10, 10);
const rectangle = new Rectangle(10, 20);
triangle.calculatesArea();
console.log(triangle.getResult());
rectangle.calculatesArea();
console.log(rectangle.getResult());
class Trainee {
    constructor() {
        this._trainee = {
            firstName: '',
            lastName: '',
            company: 'EvolWare',
            id: Math.floor(Math.random() * 1000000000),
        };
    }
    get trainee() {
        return this._trainee;
    }
    set trainee(newTrainee) {
        if (newTrainee.firstName.length < 3 || newTrainee.lastName.length < 3) {
            console.error('Error: Name length must be higher than 3');
            return;
        }
        this._trainee = Object.assign(Object.assign({}, this._trainee), { firstName: newTrainee.firstName, lastName: newTrainee.lastName });
    }
}
const newEmployee = new Trainee();
newEmployee.trainee = { firstName: 'Lucas', lastName: 'Gomide' };
newEmployee.trainee = { firstName: 'Lu', lastName: 'Gomide' };
console.log(newEmployee);
