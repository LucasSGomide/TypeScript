"use strict";
var TestInterfaces;
(function (TestInterfaces) {
    const newHumans = [
        {
            name: 'Lucas Gomide',
            age: 29,
            height: 171,
            weight: 71,
            sex: 'male',
            id: '06181380647',
        },
        {
            name: 'Taynara Rodrigues',
            age: 25,
            height: 165,
            weight: 62,
            sex: 'female',
            id: '123456789',
        },
    ];
    const updateRegister = Object.assign(Object.assign({}, newHumans[0]), { name: 'Lucas Santiago Gomide', height: 172 });
    let humanDb = [];
    const createHuman = (humans) => {
        humans.forEach((human) => humanDb.push(human));
        console.log('Create:', humanDb);
    };
    const updateHuman = (human) => {
        const incomingId = human.id;
        Object.keys(human).forEach((key) => humanDb.forEach((register) => {
            if (register.id === incomingId) {
                register[key] = human[key];
            }
        }));
        console.log('Update Lucas:', humanDb);
    };
    const deleteHuman = (human) => {
        const humanId = human.id;
        humanDb = humanDb.filter((human) => human.id !== humanId);
        console.log('Delete Lucas:', humanDb);
    };
    createHuman(newHumans);
    setTimeout(() => updateHuman(updateRegister), 4000);
    setTimeout(() => deleteHuman(updateRegister), 7000);
})(TestInterfaces || (TestInterfaces = {}));
