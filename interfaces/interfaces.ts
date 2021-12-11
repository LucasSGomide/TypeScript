interface IHuman {
    name: string // Strict Attributes
    age?: number // Optional Attributes
    [prop: string]: any // Accepts any new attribute
    getContactInformation: (phoneNumber: string) => void
}

const sayHelloHuman = (human: IHuman): void =>
    console.log(`Hello ${human.name}`)

const changeHumanName = (human: IHuman, newName: string): void => {
    human.name = newName
}

const humanSample: IHuman = {
    name: 'Lucas',
    age: 29,
    getContactInformation: function getContactInformation(phoneNumber: string) {
        console.log(
            `${this.name} pode ser contactado(a) através do telefone: ${phoneNumber}`
        )
    },
}

sayHelloHuman(humanSample)
changeHumanName(humanSample, 'Lucas Gomide')
sayHelloHuman(humanSample)
humanSample.getContactInformation('31 98654-0017')

// Interfaces with Classes
// A class cam imlement a interface, this way a "contract" will be stablished guaranteeing minimum interface requirements

class Customer implements IHuman {
    name: string = ''
    getContactInformation(phoneNumber: string) {
        console.log(
            `${this.name} pode ser contactado(a) através do telefone: ${phoneNumber}`
        )
    }

    private latestPurchase: Date = new Date('10-10-2021')

    getLatestPurchase() {
        console.log(`Data da ultima compra: ${this.latestPurchase}`)
    }
}

const newCustomer = new Customer()

changeHumanName(newCustomer, 'Taynara Rodrigues')
newCustomer.getContactInformation('31 99999-9999')
newCustomer.getLatestPurchase()

// FunctionInterface

interface ICalculate {
    (a: number, b: number): number
}

const calculatesPow: ICalculate = (base: number, exp: number): number =>
    Math.pow(base, exp)

console.log(calculatesPow(3, 10))

// Inherit with Interface

interface Ia {
    a(): void
}

interface Ib {
    b(): void
}

interface Ic {
    c(): void
}

interface Iabc extends Ia, Ib, Ic {
    abc(): void
}

const abcObject: Iabc = {
    a: () => console.log('a'),
    b: () => console.log('b'),
    c: () => console.log('c'),
    abc: () => console.log('abc'),
}

// A object which is typed with Iabc, must include all inherited methods from interfaces Ia, Ib and Ic, plus the new method set in Iabc
// Um objeto que segue a interface ABC deve implementar todos os métodos herdados através da extensão das interfaces Ia, Ib, Ic.

// If a class implements multiple interfaces, it must include and implement all defined attributes and methods inherited from the interfaces, in this case, Ia, Ib, Ic and Iabc
class ClassABC implements Ia, Ib, Ic, Iabc {
    a(): void {
        console.log('a')
    }
    b(): void {
        console.log('b')
    }
    c(): void {
        console.log('c')
    }
    abc(): void {
        console.log('abc')
    }
}

const abcClassObject: Iabc = new ClassABC()

abstract class AbstractABD implements Ia, Ib {
    a(): void {}
    b(): void {}

    abstract d(): void
}
