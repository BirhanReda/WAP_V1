export function calculateAverage(student) {
    let total = 0;
    for (const grade of student.grades) {
        total += grade;
    }
    return total / student.grades.length;
}
export function printStudentInfo(student) {
    const average = calculateAverage(student);
    console.log(`name is ${student.name}  | averageGrades: ${average}`);
    if ('advisor' in student) {
        console.log(`advisor's name is ${student.advisor}`);
    }
}
//# sourceMappingURL=studentUtils.js.map