"use strict";
var School;
(function (School) {
    let Teacher;
    (function (Teacher) {
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
        ];
        const teachersList = teachersArr;
        Teacher.getAll = (key) => {
            return teachersList.map((teacher) => {
                if (key)
                    return teacher[key];
                return teacher;
            });
        };
    })(Teacher = School.Teacher || (School.Teacher = {}));
})(School || (School = {}));
