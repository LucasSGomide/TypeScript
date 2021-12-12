"use strict";
var GenericsChallenge;
(function (GenericsChallenge) {
    class QueueChallenge {
        constructor(...queue) {
            this.currentQueue = queue;
        }
        enterQueue(data) {
            this.currentQueue.push(data);
        }
        nextInQueue() {
            if (this.currentQueue.length <= 0) {
                console.error(`Queue is empty`);
                return null;
            }
            const nextInQueue = this.currentQueue[0];
            this.currentQueue.splice(0, 1);
            return nextInQueue;
        }
        getQueue() {
            console.log(this.currentQueue);
        }
        removeItem(index) {
            const queueLimit = this.currentQueue.length - 1;
            if (index > queueLimit || index < 0)
                console.error(`Value must be between 0 and ${queueLimit}`);
            this.currentQueue.splice(index, index);
        }
    }
    const testQueue = new QueueChallenge('A', 'B', 'C', 'D');
    testQueue.enterQueue('E');
    testQueue.getQueue();
    testQueue.nextInQueue();
    testQueue.getQueue();
    testQueue.enterQueue('F');
    testQueue.nextInQueue();
    testQueue.nextInQueue();
    testQueue.getQueue();
    testQueue.removeItem(2);
    testQueue.getQueue();
    testQueue.nextInQueue();
    testQueue.nextInQueue();
    testQueue.nextInQueue();
    class PacientQueue extends QueueChallenge {
        constructor(...args) {
            // Only orders queue when instacieted. Not the best alternative.
            // TODO - Create pacientSchedule interface than pass the object through QueueChallege class and implement orderQueue in superClass
            function orderQueue() {
                return args.sort((first, second) => first.hour - second.hour);
            }
            super(...orderQueue());
        }
    }
    const pacientSchedule = [
        { name: 'Patrícia Santiago', hour: 8 },
        { name: 'Paulo Gomide', hour: 7 },
        { name: 'Lucas Gomide', hour: 4 },
        { name: 'Rodrigo Gomide', hour: 11 },
        { name: 'Taynara Rodrigues', hour: 13 },
    ];
    const pacientQueue = new PacientQueue(...pacientSchedule);
    pacientQueue.getQueue();
    const nextPaciet = pacientQueue.nextInQueue();
    console.log(`${nextPaciet === null || nextPaciet === void 0 ? void 0 : nextPaciet.name}, please come to examination room 15`);
})(GenericsChallenge || (GenericsChallenge = {}));
