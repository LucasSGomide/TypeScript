"use strict";
// default values
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const functionWithDefaultValue = (defaultValue = 'Teste') => defaultValue;
// Spread
const numberArr = [1, 10, -3, 15, 2, 25];
const rodrigoSpecs = ['Dwarf', 'Peludo'];
const lucasSpecs = ['Dwarf', 'Guard'];
console.log(Math.max(...numberArr));
// const errorArr: number[] = [...numberArr, ...rodrigoSpecs] // Tipagem Incorreta
const correctArr = [...rodrigoSpecs, ...lucasSpecs]; // Tipagem Correta
console.log(correctArr);
// Rest
const createArrayFromValues = (param, ...args) => console.log(param, args);
createArrayFromValues('Called without spread', 1, 10, -3, 15, 2, 25);
createArrayFromValues('Called with spread', ...numberArr);
// Exercises:
// 1
const doubleValue = (value) => value * 2;
console.log(`4 x 2 = ${doubleValue(4)}`);
// 2
const sayHello = (name = 'Pessoa') => console.log(`Hello, ${name}`);
sayHello();
sayHello('Gomide');
// 3
const nums = [-3, 33, 38, 5];
const getLowestValue = (...args) => console.log(Math.min(...args));
getLowestValue(...nums);
// 4
const numbersToAdd = [55, 20];
console.log([...nums, ...numbersToAdd]);
// 5
const grades = [7.6, 8.3, 7.4];
console.log(...grades);
//
const personObject = {
    firstName: 'Lucas',
    experience: 2,
};
const { firstName, experience: exp } = personObject;
console.log(`O candidato ${firstName}, possui ${exp} anos de experiência`);
// Promises => API URL = https://swapi.dev/api/people/
const mountApiUrl = (baseUrl, endpoint = 1) => `${baseUrl}${endpoint}`;
const fetchCharacter = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = 'https://swapi.dev/api/people/';
    const response = yield fetch(mountApiUrl(baseUrl, endpoint));
    const responseJson = yield response.json();
    if (responseJson)
        return responseJson;
    throw new Error('Request Error');
});
fetchCharacter(4)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
// console.log(result)
