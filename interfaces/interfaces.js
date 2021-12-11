"use strict";
const sayHelloHuman = (human) => console.log(`Hello ${human.name}`);
const changeHumanName = (human, newName) => {
    human.name = newName;
};
const humanSample = {
    name: 'Lucas',
    age: 29,
    getContactInformation: function getContactInformation(phoneNumber) {
        console.log(`${this.name} pode ser contactado(a) através do telefone: ${phoneNumber}`);
    },
};
sayHelloHuman(humanSample);
changeHumanName(humanSample, 'Lucas Gomide');
sayHelloHuman(humanSample);
humanSample.getContactInformation('31 98654-0017');
// Interfaces with Classes
// A class cam imlement a interface, this way a "contract" will be stablished guaranteeing minimum interface requirements
class Customer {
    constructor() {
        this.name = '';
        this.latestPurchase = new Date('10-10-2021');
    }
    getContactInformation(phoneNumber) {
        console.log(`${this.name} pode ser contactado(a) através do telefone: ${phoneNumber}`);
    }
    getLatestPurchase() {
        console.log(`Data da ultima compra: ${this.latestPurchase}`);
    }
}
const newCustomer = new Customer();
changeHumanName(newCustomer, 'Taynara Rodrigues');
newCustomer.getContactInformation('31 99999-9999');
newCustomer.getLatestPurchase();
const calculatesPow = (base, exp) => Math.pow(base, exp);
console.log(calculatesPow(3, 10));
const abcObject = {
    a: () => console.log('a'),
    b: () => console.log('b'),
    c: () => console.log('c'),
    abc: () => console.log('abc'),
};
// A object which is typed with Iabc, must include all inherited methods from interfaces Ia, Ib and Ic, plus the new method set in Iabc
// Um objeto que segue a interface ABC deve implementar todos os métodos herdados através da extensão das interfaces Ia, Ib, Ic.
// If a class implements multiple interfaces, it must include and implement all defined attributes and methods inherited from the interfaces, in this case, Ia, Ib, Ic and Iabc
class ClassABC {
    a() {
        console.log('a');
    }
    b() {
        console.log('b');
    }
    c() {
        console.log('c');
    }
    abc() {
        console.log('abc');
    }
}
const abcClassObject = new ClassABC();
class AbstractABD {
    a() { }
    b() { }
}
