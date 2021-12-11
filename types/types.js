"use strict";
// Types Array
const anyArray = [1, 2, 3, 4, 5, false, 'String'];
const numberArray = [1, 2, 3];
const stringArray = ['Sou', 'um', 'array', 'de', 'strings'];
const boolArray = [false, true];
// Enums
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Red"] = 100] = "Red";
})(Colors || (Colors = {}));
const accessGreen = Colors.Green;
console.log(accessGreen);
const accessRed = Colors.Red;
console.log(accessRed);
// Functions Typing
const stringFtunction = () => 'Teste';
const numberFunction = () => 200;
const boolFunction = () => true;
const arrayFunction = () => [];
const voidFunction = () => console.log('Retorno Vazio');
const funcParamTypes = (name, age) => [
    name,
    age,
];
console.log(funcParamTypes('Lucas', 29));
// Type Function
let receivesVoidFunction; // Tipagem de variável que recebe uma função
receivesVoidFunction = arrayFunction;
// Objects
let user = {
    name: 'Lucas',
    age: 29,
};
let employee1 = {
    managers: ['Lucas', 'João', 'Maria'],
    registerHours: (hour) => {
        if (hour <= 8)
            return 'Ponto Normal';
        return 'Fora do horário';
    },
};
let employee2 = {
    managers: ['André', 'Casemiro', 'Maria Alice'],
    registerHours: (hour) => `Tempo registrado: ${hour.toString()} horas`,
};
console.log(employee1.managers);
console.log(employee1.registerHours(10));
console.log(employee1.registerHours(8));
console.log(employee2.managers);
console.log(employee2.registerHours(10));
const rogerioGrades = {
    name: 'Rogério Moreira',
    grade: 10,
    approved: false,
};
console.log(rogerioGrades);
const handleRequestError = (msg) => {
    throw new Error(`${msg.error.message} Código: ${msg.error.code}`);
};
const requestTest = {
    error: { message: 'Deu Ruim', code: 404 },
};
const newUser = {
    profilePic: 'URL da Foto',
    isLookingForJob: null,
    name: 'Lucas Gomide',
};
const handleUserInformation = (user) => {
    const jobMessageNull = user.isLookingForJob === null ? 'se encontra indefinida.' : undefined;
    const jobRegularMessage = user.isLookingForJob
        ? 'está a procura de emprego.'
        : 'não está a procura de emprego.';
    return `É possível dizer que a procura por emprego do usuário ${newUser.name} "${newUser.profilePic}" no momento ${jobMessageNull || jobRegularMessage}`;
};
console.log(handleUserInformation(newUser));
const bankAccount = {
    balance: 3456,
    deposit: function (value) {
        this.balance += value;
    },
};
const newBankClient = {
    name: 'Lucas Gomide',
    bankAccount,
    contacts: ['1312528'],
};
newBankClient.bankAccount.deposit(50000);
console.log(newBankClient.bankAccount.balance);
