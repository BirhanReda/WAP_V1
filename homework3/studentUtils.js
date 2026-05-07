"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = calculateAverage;
exports.printStudentInfo = printStudentInfo;
const models_1 = require("./models");
function calculateAverage(student) {
    let total = 0;
    for (const grade of student.grades) {
        total += grade;
    }
    return total / student.grades.length;
}
function printStudentInfo(student) {
    const average = calculateAverage(student);
    console.log(`name is ${student.name}  | averageGrades: ${average}`);
    if ('advisor' in student) {
        console.log(`advisor's name is ${student.advisor}`);
    }
}
//# sourceMappingURL=studentUtils.js.map