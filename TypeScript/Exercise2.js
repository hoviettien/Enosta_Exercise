"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var students = [
    { name: 'A', score: 9 },
    { name: 'B', score: 3 },
    { name: 'C', score: 10 },
    { name: 'D', score: 7 },
    { name: 'E', score: 5 },
];
// function getStudents(students: Student[], threshold: number): Student[]{
//     let newStudents: Student[]=[];
//     students.map(student => {
//         if (student.score > threshold){
//             newStudents.push(student);
//         }
//     })
//     return newStudents;
// }
function getStudents(students, threshold) {
    return students.filter(function (student) {
        return student.score > threshold;
    });
}
console.log(getStudents(students, 9));
function getAverageScore() {
    var totalScore = 0;
    students.forEach(function (student) {
        totalScore += student.score;
    });
    return totalScore / students.length;
}
console.log(getStudents(students, 7));
console.log(getAverageScore());
