"use strict";
const objectGenerator = (key, value) => {
    return { [key]: value };
};
const anyAkey = 'algumaChave';
const anyValue = 'algumValor';
objectGenerator(anyAkey, anyValue);
