namespace School {
    export namespace Student {
        type StudentTypes = {
            name: string
            isApproved: string
        }

        const studentArr = [
            {
                name: 'student Name',
                isApproved: 'Main Subject',
            },
            {
                name: 'student Name',
                isApproved: 'Main Subject',
            },
            {
                name: 'student Name',
                isApproved: 'Main Subject',
            },
        ]

        const studentList: StudentTypes[] = studentArr

        export const getAll = (key?: 'name' | 'isApproved'): any[] => {
            return studentList.map((student) => {
                if (key) return student[key]
                return student
            })
        }
    }
}
