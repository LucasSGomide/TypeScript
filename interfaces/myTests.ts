namespace TestInterfaces {
    interface IHuman {
        name: string
        age: number
        height: number
        weight: number
        sex: 'male' | 'female'
        id: string
    }

    const newHumans: IHuman[] = [
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
    ]

    const updateRegister: IHuman = {
        ...newHumans[0],
        name: 'Lucas Santiago Gomide',
        height: 172,
    }

    let humanDb: IHuman[] = []

    const createHuman = (humans: IHuman[]): void => {
        humans.forEach((human) => humanDb.push(human))
        console.log('Create:', humanDb)
    }

    const updateHuman = (human: any): any => {
        const incomingId = human.id

        Object.keys(human).forEach((key: any): void =>
            humanDb.forEach((register: any) => {
                if (register.id === incomingId) {
                    register[key] = human[key]
                }
            })
        )

        console.log('Update Lucas:', humanDb)
    }

    const deleteHuman = (human: IHuman): void => {
        const humanId = human.id
        humanDb = humanDb.filter((human) => human.id !== humanId)

        console.log('Delete Lucas:', humanDb)
    }

    createHuman(newHumans)

    setTimeout(() => updateHuman(updateRegister), 4000)

    setTimeout(() => deleteHuman(updateRegister), 7000)
}
