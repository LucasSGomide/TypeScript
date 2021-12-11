// Types Array
const anyArray: any[] = [1, 2, 3, 4, 5, false, 'String']
const numberArray: number[] = [1, 2, 3]
const stringArray: string[] = ['Sou', 'um', 'array', 'de', 'strings']
const boolArray: boolean[] = [false, true]

// Enums
enum Colors {
    Gray, // 0
    Green, // 1
    Blue, // 2
    Red = 100, // Atribui específicamente um valor
}

const accessGreen: Colors = Colors.Green
console.log(accessGreen)

const accessRed: Colors = Colors.Red
console.log(accessRed)

// Functions Typing
const stringFtunction = (): string => 'Teste'
const numberFunction = (): number => 200
const boolFunction = (): boolean => true
const arrayFunction = (): any[] => []
const voidFunction = (): void => console.log('Retorno Vazio')

const funcParamTypes = (name: string, age: number): [string, number] => [
    name,
    age,
]

console.log(funcParamTypes('Lucas', 29))

// Type Function
let receivesVoidFunction: (a: string, b: number) => any[] // Tipagem de variável que recebe uma função
receivesVoidFunction = arrayFunction

// Objects

let user: { name: string; age: number } = {
    name: 'Lucas',
    age: 29,
}

// Custom Types || Alias
type Employee = {
    managers: string[]
    registerHours: (hour: number) => string
}

let employee1: Employee = {
    managers: ['Lucas', 'João', 'Maria'],
    registerHours: (hour: number): string => {
        if (hour <= 8) return 'Ponto Normal'
        return 'Fora do horário'
    },
}

let employee2: Employee = {
    managers: ['André', 'Casemiro', 'Maria Alice'],
    registerHours: (hour: number): string =>
        `Tempo registrado: ${hour.toString()} horas`,
}

console.log(employee1.managers)
console.log(employee1.registerHours(10))
console.log(employee1.registerHours(8))

console.log(employee2.managers)
console.log(employee2.registerHours(10))

// Union Types
type StudantGrades = {
    name: string
    grade: number | string
    approved: boolean // Opção de receber bool ou string
}

const rogerioGrades: StudantGrades = {
    name: 'Rogério Moreira',
    grade: 10,
    approved: false,
}

console.log(rogerioGrades)

// Type Never
// Utilizado para casos de Loop Inifito e Erro

type ErrorMessage = {
    error: { message: string; code: number }
}

const handleRequestError = (msg: ErrorMessage): never => {
    throw new Error(`${msg.error.message} Código: ${msg.error.code}`)
}

const requestTest: ErrorMessage = {
    error: { message: 'Deu Ruim', code: 404 },
}

// console.log(handleRequestError(requestTest))

// Type Null

type User = {
    profilePic: string | null
    isLookingForJob: boolean | null
    name: string
}

const newUser: User = {
    profilePic: 'URL da Foto',
    isLookingForJob: null,
    name: 'Lucas Gomide',
}

const handleUserInformation = (user: User) => {
    const jobMessageNull =
        user.isLookingForJob === null ? 'se encontra indefinida.' : undefined
    const jobRegularMessage = user.isLookingForJob
        ? 'está a procura de emprego.'
        : 'não está a procura de emprego.'
    return `É possível dizer que a procura por emprego do usuário ${
        newUser.name
    } "${newUser.profilePic}" no momento ${jobMessageNull || jobRegularMessage}`
}

console.log(handleUserInformation(newUser))

type BankAccout = {
    balance: number
    deposit: (value: number) => void
}

type AccountOwner = {
    name: string
    bankAccount: BankAccout
    contacts: string[]
}

const bankAccount: BankAccout = {
    balance: 3456,
    deposit: function (value: number): void {
        this.balance += value
    },
}

const newBankClient: AccountOwner = {
    name: 'Lucas Gomide',
    bankAccount,
    contacts: ['1312528'],
}

newBankClient.bankAccount.deposit(50000)

console.log(newBankClient.bankAccount.balance)
