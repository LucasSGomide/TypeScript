// Modificadores de Acesso

// public - Visível para todos, acessado por todos e transmitido por herança
// protected - Visível e acessado na classe onde foi declarado e na classe que é extendida - transmitido por herança.
// private - Vísivel e acessado somente dentro da classe onde foi declarado e não transmitido por herança

class CustomDate {
    // Publicos por padrão
    day: number
    month: number
    year: number

    constructor(day: number, month: number, year: number) {
        this.day = day
        this.month = month
        this.year = year
    }
}

// Constructor: Inicializa os atributos da classe

// Sintaxe simplificada
class SmartDate {
    constructor(
        public day: number,
        public month: number,
        public year: number
    ) {}
}

const smartDateTest = new SmartDate(18, 10, 1992)
console.log(smartDateTest)

// Challenge Product Class

class Product {
    constructor(
        public name: string,
        public price: number,
        public discount: number = 0
    ) {}

    public productInformation(): string {
        return `Nome: ${
            this.name
        }, Preço: R$ ${this.calculatesDiscount()} Desconto: ${
            this.discount * 100
        }% off`
    }

    private calculatesDiscount(): number {
        return this.price * (1 - this.discount)
    }
}

const dellG15Notebook = new Product('Computador Dell G-15', 6800)
console.log(dellG15Notebook)
console.log(dellG15Notebook.productInformation())

const notebookCoolerBase = new Product('Base de Resfriamento', 160, 0.1)
console.log(notebookCoolerBase)
console.log(notebookCoolerBase.productInformation())

class Car {
    private currentSpeed: number = 0

    constructor(
        public brand: string,
        public model: string,
        private maxSpeed: number = 200
    ) {}

    // protected - Consegue ser acessado através de HERANÇA | private Não é transmitido através de herança para acesso indireto (Ex: increaseSpeed é passada por herança, porém, por chamar dentro de sua implementação o método PRIVADO "changeCurrentSpeed", não é possível sobrescrever o método increaseSpeed)
    protected changeCurrentSpeed(delta: number): number {
        const newSpeed = this.currentSpeed + delta

        if (newSpeed < 0) return (this.currentSpeed = 0)
        if (newSpeed > this.maxSpeed) return (this.currentSpeed = this.maxSpeed)

        return (this.currentSpeed = newSpeed)
    }

    public increaseSpeed(): number {
        return this.changeCurrentSpeed(5)
    }

    public decreaseSpeed(): number {
        return this.changeCurrentSpeed(-5)
    }
}

const newJetta = new Car('WolksWagen', 'Jetta', 230)

// Array(50)
//     .fill(0)
//     .forEach(() => console.log(newJetta.increaseSpeed()))

// Array(50)
//     .fill(0)
//     .forEach(() => console.log(newJetta.decreaseSpeed()))

// Herança (É) X Composição (TEM)

// - Herança: Uma Ferrari É um CARRO
// - Composição: Um carro TEM um volante

class Ferrari extends Car {
    constructor(model: string, maxSpeed: number) {
        super('Ferrari', model, maxSpeed) // Acesso ao construtor da classe PAI, desta forma é possível abstrair a marca do Carro pois toda Ferrari tem a mesma marca, de forma que, não é necessário declarar que a marca é Ferrari ao criar uma "new Ferrari"
    }

    public increaseSpeed(): number {
        return this.changeCurrentSpeed(20)
    }

    public decreaseSpeed(): number {
        return this.changeCurrentSpeed(-15)
    }
}

const ferrariF50 = new Ferrari('F50', 330)
console.log(ferrariF50)
console.log(ferrariF50.increaseSpeed())
console.log(ferrariF50.increaseSpeed())

// GETTERS e SETTERS (Útil para realizar validações ou processamento ao ler um dado)

class Person {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value < 18 || value >= 120)
            console.error(`Invalid Age: ${value} is not between 18 and 120`)
        this._age = value
    }
}

const validAge = new Person()
validAge.age = 29
console.log(validAge)

const invalidAge = new Person()
invalidAge.age = 15
console.log(invalidAge.age)

// ATRIBUTOS E MÉTODOS ESTÁTICOS - Significa que este atributo pertence somente a CLASSE e não à instância.

class Mathematics {
    static PI: number = 3.141516

    static circleArea(radius: number): number {
        return Mathematics.PI * radius * radius
    }
}

console.log(Mathematics.circleArea(8))

const testMath = new Mathematics()

class Utils {
    static calculatesDiscount(
        price: number = 0,
        discount: number = 0
    ): number | void {
        if (price < 0)
            return console.error(
                `Price Error: "${price}"" must be bigger than 0`
            )
        if (discount < 0 || discount > 1)
            return console.error(
                `Discount Error: "${discount}"" is not between 0 and 1`
            )
        return price * (1 - discount)
    }
}

console.log(Utils.calculatesDiscount(100, 0.1))
console.log(Utils.calculatesDiscount(-100, 0.1))
console.log(Utils.calculatesDiscount(100, 10))

// CLASSE ABSTRATA - Não existe em JS somente em TS
// - Não é possível instânciar uma classe abstrata
// -

abstract class CellPhone {
    call(phoneNumber: string): void {
        console.log(`Calling: ${phoneNumber}`)
        console.log('.')
        console.log(`..`)
        console.log(`...`)
    }

    endCall(): void {
        console.log('Call Ended')
    }

    abstract startOS(): void
    // Será implementado para cada tipo de sistema operacional, Exemplo: IOS / Android / Windows ...
}

class AndroidPhone extends CellPhone {
    startOS(): void {
        console.log('Inicia sistema operacional Android')
        console.log('.')
        console.log('..')
        console.log('...')
        console.log('Verifica Atulizações')
        console.log('.')
        console.log('..')
        console.log('...')
        console.log('Inicialização completa!')
    }
}

const samsungTest = new AndroidPhone()

samsungTest.startOS()
samsungTest.call('31986540018')
samsungTest.endCall()

abstract class Calculates {
    protected result: number = 0

    abstract calculate(...values: number[]): void

    public getResult(): number {
        return this.result
    }
}

class Sum extends Calculates {
    calculate(...values: number[]): void {
        this.result = values.reduce((acc, curr) => acc + curr)
    }
}

const sumValues = new Sum()

sumValues.calculate(1, 2, 3, 5, 8, 10, 11)
console.log(sumValues.getResult())

// SINGLETON - CONSTRUTOR PRIVADO

class Database {
    private static instance: Database

    private constructor() {
        console.log(
            'Executa a ação:',
            `mongoose.connect(process.env.DB_ENDPOINT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });`
        )
    }

    public static getIstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

Database.getIstance()

// Somente Leitura

class Airplane {
    constructor(
        public readonly model: string,
        public readonly company: string
    ) {}
}

const newAirplane = new Airplane('737', 'Boeing')
// console.log((newAirplane.model = 'New Model')) -> Erro pois é READONLY
