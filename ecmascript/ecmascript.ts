// default values

const functionWithDefaultValue = (defaultValue: string = 'Teste'): string =>
    defaultValue

// Spread

const numberArr: number[] = [1, 10, -3, 15, 2, 25]

const rodrigoSpecs: string[] = ['Dwarf', 'Peludo']
const lucasSpecs: string[] = ['Dwarf', 'Guard']

console.log(Math.max(...numberArr))

// const errorArr: number[] = [...numberArr, ...rodrigoSpecs] // Tipagem Incorreta
const correctArr: string[] = [...rodrigoSpecs, ...lucasSpecs] // Tipagem Correta

console.log(correctArr)

// Rest

const createArrayFromValues = (param: string, ...args: number[]): void =>
    console.log(param, args)
createArrayFromValues('Called without spread', 1, 10, -3, 15, 2, 25)
createArrayFromValues('Called with spread', ...numberArr)

// Exercises:

// 1
const doubleValue = (value: number): number => value * 2
console.log(`4 x 2 = ${doubleValue(4)}`)

// 2
const sayHello = (name: string = 'Pessoa'): void =>
    console.log(`Hello, ${name}`)
sayHello()
sayHello('Gomide')

// 3
const nums = [-3, 33, 38, 5]
const getLowestValue = (...args: number[]): void =>
    console.log(Math.min(...args))
getLowestValue(...nums)

// 4
const numbersToAdd: number[] = [55, 20]
console.log([...nums, ...numbersToAdd])

// 5
const grades: number[] = [7.6, 8.3, 7.4]
console.log(...grades)

//
const personObject: { firstName: string; experience: number } = {
    firstName: 'Lucas',
    experience: 2,
}

const { firstName, experience: exp } = personObject

console.log(`O candidato ${firstName}, possui ${exp} anos de experiência`)

// Promises => API URL = https://swapi.dev/api/people/

const mountApiUrl = (baseUrl: string, endpoint: number = 1): string =>
    `${baseUrl}${endpoint}`

const fetchCharacter = async (endpoint: number): Promise<string> => {
    const baseUrl: string = 'https://swapi.dev/api/people/'

    const response = await fetch(mountApiUrl(baseUrl, endpoint))
    const responseJson = await response.json()

    if (responseJson) return responseJson
    throw new Error('Request Error')
}

fetchCharacter(4)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

// console.log(result)
