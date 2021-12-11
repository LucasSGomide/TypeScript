///<reference path="student.ts"/>
///<reference path="teacher.ts"/>

// Adição de referência à namespaces externos

// A Namespace let you set a "local scope" for variables and functions, this way, naming will never conflict between "global scope" and "local scope".
// Permite criar um "escopo local" para declaração de variáveis e funções, desta forma, não haverá conflitos de nomenclatura entre o escopo global e o escopo local.

namespace Area {
    const PI = 3.14

    export const cicrcle = (radius: number): number => PI * Math.pow(radius, 2)

    export const rectangle = (base: number, height: number): number =>
        base * height
}

console.log(Area.cicrcle(15))

// It is possible to have nested namespaces, this way you can create a macro environment with micro enviroments inside
// É possível aninhar namespaces, desta forma é possível concentrar os elementos que pertecem à um escopo macro, e quebra-los em escopo micro de forma organizada.
namespace DbQueries {
    export namespace MySql {
        export const getAll = (): any[] => []

        export const findById = (id: string): { id: string } => {
            return { id }
        }
    }

    export namespace MongoDb {
        export const getAll = (): any[] => []

        export const findById = (id: string): { id: string } => {
            return { id }
        }
    }
}

console.log(DbQueries.MySql.findById('id'))
console.log(DbQueries.MongoDb.findById('id'))

// School Namespace is created in separeted files each file have a specific "child namespace" ("Teacher", "Student").
// Criação de Namespaces em arquivos separados.

// Command to compile all separeted files into one single file where they can be automatically merged
// Comando que direciona a compilação de todos os arquivos relacionados ao namespace para um único arquivo centralizado

// npx tsc --outFile namespaces/namespaces.js namespaces/student.ts namespaces/teacher.ts namespaces/namespaces.ts
console.log(School.Student.getAll('name'))
console.log(School.Student.getAll())

console.log(School.Teacher.getAll('name'))
console.log(School.Teacher.getAll('subject'))
console.log(School.Teacher.getAll())
