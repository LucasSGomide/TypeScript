namespace School {
    export namespace Teacher {
        type TeacherTypes = {
            name: string
            subject: string
        }
        const teachersArr = [
            {
                name: 'Teacher Name',
                subject: 'Main Subject',
            },
            {
                name: 'Teacher Name',
                subject: 'Main Subject',
            },
            {
                name: 'Teacher Name',
                subject: 'Main Subject',
            },
        ]
        const teachersList: TeacherTypes[] = teachersArr

        export const getAll = (key?: 'name' | 'subject'): any[] => {
            return teachersList.map((teacher) => {
                if (key) return teacher[key]
                return teacher
            })
        }
    }
}
