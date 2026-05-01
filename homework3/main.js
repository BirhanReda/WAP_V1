"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const studentUtils_1 = require("./studentUtils");
const utils_1 = require("./utils");
const students = [
    {
        id: 1,
        name: "Birhan",
        email: "birhan@miu.edu",
        grades: [90, 85, 92],
        level: models_1.GradeLevel.Undergraduate
    },
    {
        id: 2,
        name: "Melat",
        email: "melat@miu.edu",
        grades: [90, 85, 92],
        level: models_1.GradeLevel.Undergraduate
    },
    {
        id: 3,
        name: "Atran",
        email: "atran@miu.edu",
        grades: [90, 85, 92],
        level: models_1.GradeLevel.Graduate,
        advisor: "Anne"
    }
];
const names = students.map(stu => stu.name);
console.log(`student names are ${names}`);
const classAverage = students.reduce((sum, stu) => {
    return sum + (0, studentUtils_1.calculateAverage)(stu);
}, 0) / students.length;
console.log(`class average ${classAverage}`);
const highPerformers = (0, utils_1.filterArray)(students, student => (0, studentUtils_1.calculateAverage)(student) > 80);
const highPerformerStudent = highPerformers.map(s => s.name);
console.log(`high performers are ${highPerformerStudent}`);
console.log("student info");
students.forEach(stu => (0, studentUtils_1.printStudentInfo)(stu));
//# sourceMappingURL=main.js.map