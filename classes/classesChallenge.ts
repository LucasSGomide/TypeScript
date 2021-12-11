// FIRST CHALLENGE

class Motorcycle {
    public currentSpeed: number = 0

    constructor(public name: string) {}

    honk(): void {
        console.log('Toooooooooot!')
    }

    increaseSpeed(speed: number) {
        this.currentSpeed += speed
    }
}

const XJ6 = new Motorcycle('XJ6')

XJ6.honk()
console.log(XJ6)
console.log(XJ6.currentSpeed)

XJ6.increaseSpeed(60)
console.log(XJ6.currentSpeed)

// SECOND CHALLENGE

abstract class TwoDimentionObject {
    protected result: number = 0

    constructor(protected base: number = 0, protected height: number = 0) {}

    abstract calculatesArea(): void

    public getResult(): number {
        return this.result
    }
}

class Triangle extends TwoDimentionObject {
    calculatesArea(): void {
        this.result = (this.base * this.height) / 2
    }
}

class Rectangle extends TwoDimentionObject {
    calculatesArea(): void {
        this.result = this.base * this.height
    }
}

const triangle = new Triangle(10, 10)
const rectangle = new Rectangle(10, 20)

triangle.calculatesArea()

console.log(triangle.getResult())

rectangle.calculatesArea()
console.log(rectangle.getResult())

class Trainee {
    private _trainee: {
        firstName: string
        lastName: string
        company: 'EvolWare'
        id: number
    } = {
        firstName: '',
        lastName: '',
        company: 'EvolWare',
        id: Math.floor(Math.random() * 1000000000),
    }

    get trainee(): {
        firstName: string
        lastName: string
        company: 'EvolWare'
        id: number
    } {
        return this._trainee
    }

    set trainee(newTrainee: { firstName: string; lastName: string }) {
        if (newTrainee.firstName.length < 3 || newTrainee.lastName.length < 3) {
            console.error('Error: Name length must be higher than 3')
            return
        }

        this._trainee = {
            ...this._trainee,
            firstName: newTrainee.firstName,
            lastName: newTrainee.lastName,
        }
    }
}

const newEmployee = new Trainee()

newEmployee.trainee = { firstName: 'Lucas', lastName: 'Gomide' }
newEmployee.trainee = { firstName: 'Lu', lastName: 'Gomide' }

console.log(newEmployee)
