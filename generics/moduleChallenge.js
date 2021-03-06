"use strict";
var GenericsModuleChallenge;
(function (GenericsModuleChallenge) {
    class Mapper {
        constructor() {
            this.currentMap = new Array();
        }
        findRegisterIndex(id) {
            const isFound = this.currentMap.find((item) => item.id === id);
            if (!isFound)
                return null;
            const registerIndex = this.currentMap.indexOf(isFound);
            return registerIndex;
        }
        createOrUpdate(dataToInsert) {
            const registerIndex = this.findRegisterIndex(dataToInsert.id);
            if (typeof registerIndex === 'number') {
                // TODO Map desnecessário
                this.currentMap[registerIndex].value = dataToInsert.value;
                console.log('<Status: 200> Updated: ', dataToInsert);
                return;
            }
            this.currentMap.push(dataToInsert);
            console.log('<Status: 200> Created: ', dataToInsert);
            return;
        }
        getById(id) {
            const registerIndex = this.findRegisterIndex(id);
            if (typeof registerIndex === 'number') {
                console.log('<Status: 200> Found:', this.currentMap[registerIndex]);
                return this.currentMap[registerIndex];
            }
            console.log(`<Status: 404> Sorry, Not Found.`);
            return;
        }
        getAll() {
            console.log('<Status: 200> Found All: ', this.currentMap);
            return this.currentMap;
        }
        delete(id) {
            const registerIndex = this.findRegisterIndex(id);
            if (typeof registerIndex === 'number') {
                this.currentMap.splice(registerIndex, registerIndex === 0 ? registerIndex + 1 : registerIndex);
                console.log('<Status: 200> Deleted: ', this.currentMap);
                return;
            }
            console.log('<Status: 200> Bixou: ', this.currentMap);
            return;
        }
        deleteAll() {
            this.currentMap = new Array();
            console.log('<Status: 200> All registres were cleared: ', this.currentMap);
            return;
        }
    }
    const familyRegisters = new Mapper();
    familyRegisters.createOrUpdate({ id: 1, value: 'Lucas Gomide' });
    familyRegisters.getAll();
    familyRegisters.createOrUpdate({ id: 1, value: 'Lucas Santiago Gomide' });
    familyRegisters.createOrUpdate({ id: 2, value: 'Taynara Rodrigues' });
    familyRegisters.createOrUpdate({ id: 3, value: 'Rodrigo Gomide' });
    familyRegisters.createOrUpdate({ id: 3, value: 'Rodrigo Santiago Gomide' });
    familyRegisters.createOrUpdate({ id: 4, value: 'Kimberly Arantes' });
    familyRegisters.createOrUpdate({ id: 5, value: 'Paulo Gomide' });
    familyRegisters.createOrUpdate({ id: 6, value: 'Patrícia Santiago' });
    familyRegisters.getAll();
    familyRegisters.getById(4);
    familyRegisters.getById(10);
    familyRegisters.createOrUpdate({
        id: 6,
        value: 'Patrícia Moreira Santiago',
    });
    familyRegisters.getAll();
    familyRegisters.delete(1);
    familyRegisters.deleteAll();
})(GenericsModuleChallenge || (GenericsModuleChallenge = {}));
