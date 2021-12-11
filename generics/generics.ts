namespace Generics {
    const echo = (obj: any) => obj

    console.log(echo('name'))
    console.log(echo(27))
    console.log(echo({ name: 'Lucas', age: 29 }))

    // The type of "T" will be associated with the type of the item passed through the function argument
    const echoV2 = <T>(obj: T): T => obj

    console.log(echoV2('name').length) // <T> will have type String - <T> Será do tipo string
    console.log(echoV2<number>(27)) // <number> Specifies the type of <T> explicitly - <number> Especifica específicamente o tipo de <T>
    console.log(echoV2({ name: 'Lucas', age: 29 }))

    const handleGenericObject = <U>(obj: U[]): string[] =>
        obj.map((item) => typeof item)

    type ObjectTypes = {
        name: string
        age: number
    }

    // When creating arrays with Array.fill() its important to specify the type of the Array to be created, otherwise TypeScript will assume it is an array of "any" and the type checking will not work properly.

    const stringArray: string[] = Array<string>(5).fill('Strings')
    const numberArray: number[] = Array<number>(5).fill(1)
    const objectArray: ObjectTypes[] = Array<ObjectTypes>(5).fill({
        name: 'Ana',
        age: 15,
    })

    console.log(handleGenericObject<string>(stringArray))
    console.log(handleGenericObject<number>(numberArray))
    console.log(handleGenericObject<ObjectTypes>(objectArray))

    // Receiving a function with generic type
    // This type of solution can be used to pass functions as props in React for example.

    type GenericFunction = <G>(data: G[]) => void

    const getGenericFunction: GenericFunction = <G>(data: G[]) =>
        data.forEach((element) => console.log(element))

    getGenericFunction<number>(numberArr)
}
