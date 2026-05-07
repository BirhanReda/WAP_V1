import { GradeLevel } from './models.js';
import { calculateAverage, printStudentInfo } from './studentUtils.js';
import { filterArray, identity } from './utils.js';
const students = [
    {
        id: 1,
        name: "Birhan",
        email: "birhan@miu.edu",
        grades: [90, 85, 92],
        level: GradeLevel.Undergraduate
    },
    {
        id: 2,
        name: "Melat",
        email: "melat@miu.edu",
        grades: [90, 85, 92],
        level: GradeLevel.Undergraduate
    },
    {
        id: 3,
        name: "Atran",
        email: "atran@miu.edu",
        grades: [90, 85, 92],
        level: GradeLevel.Graduate,
        advisor: "Anne"
    }
];
const names = students.map(stu => stu.name);
console.log(`student names are ${names}`);
const classAverage = students.reduce((sum, stu) => {
    return sum + calculateAverage(stu);
}, 0) / students.length;
console.log(`class average ${classAverage}`);
const highPerformers = filterArray(students, student => calculateAverage(student) > 80);
const highPerformerStudent = highPerformers.map(s => s.name);
console.log(`high performers are ${highPerformerStudent}`);
console.log("student info");
students.forEach(stu => printStudentInfo(stu));
//# sourceMappingURL=main.js.map