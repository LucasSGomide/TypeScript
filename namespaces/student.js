"use strict";
var School;
(function (School) {
    let Student;
    (function (Student) {
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
        ];
        const studentList = studentArr;
        Student.getAll = (key) => {
            return studentList.map((student) => {
                if (key)
                    return student[key];
                return student;
            });
        };
    })(Student = School.Student || (School.Student = {}));
})(School || (School = {}));
