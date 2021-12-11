"use strict";
var Generics;
(function (Generics) {
    const echo = (obj) => obj;
    console.log(echo('name'));
    console.log(echo(27));
    console.log(echo({ name: 'Lucas', age: 29 }));
    // The type of "T" will be associated with the type of the item passed through the function argument
    const echoV2 = (obj) => obj;
    console.log(echoV2('name').length); // <T> will have type String - <T> Será do tipo string
    console.log(echoV2(27)); // <number> Specifies the type of <T> explicitly - <number> Especifica específicamente o tipo de <T>
    console.log(echoV2({ name: 'Lucas', age: 29 }));
    const handleGenericObject = (obj) => obj.map((item) => typeof item);
    // When creating arrays with Array.fill() its important to specify the type of the Array to be created, otherwise TypeScript will assume it is an array of "any" and the type checking will not work properly.
    const stringArray = Array(5).fill('Strings');
    const numberArray = Array(5).fill(1);
    const objectArray = Array(5).fill({
        name: 'Ana',
        age: 15,
    });
    console.log(handleGenericObject(stringArray));
    console.log(handleGenericObject(numberArray));
    console.log(handleGenericObject(objectArray));
    const getGenericFunction = (data) => data.forEach((element) => console.log(element));
    getGenericFunction(numberArray);
    // Classes with Generics
    class BinaryOperation {
        constructor(firstArg, secondArg) {
            this.firstArg = firstArg;
            this.secondArg = secondArg;
        }
    }
    class BinarySum extends BinaryOperation {
        exec() {
            return this.firstArg + this.secondArg;
        }
    }
    class BinaryConcat extends BinaryOperation {
        exec() {
            return `${this.firstArg} ${this.secondArg}`;
        }
    }
    class BinaryDate extends BinaryOperation {
        getDayString(value) {
            return value === 1 ? 'dia' : 'dias';
        }
        getDaysDiff() {
            const firstTime = this.firstArg.getTime();
            const secondTime = this.secondArg.getTime();
            const daysDiff = (firstTime - secondTime) / (1000 * 3600 * 24);
            return Math.abs(Math.floor(daysDiff));
        }
        exec() {
            const daysDiff = this.getDaysDiff();
            return `Diferença de: ${daysDiff} ${this.getDayString(daysDiff)}`;
        }
    }
    console.log(new BinaryConcat('Bom', 'Dia').exec());
    console.log(new BinarySum(3, 7).exec());
    console.log(new BinaryDate(new Date(), new Date('11-10-2021')).exec());
    console.log(new BinaryDate(new Date(), new Date('12-10-2021')).exec());
})(Generics || (Generics = {}));
