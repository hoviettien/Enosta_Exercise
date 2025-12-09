export type Student = {
    name: string,
    score: number,
}
let students: Student[] = [
    {name: 'A', score: 9},
    {name: 'B', score: 3},
    {name: 'C', score: 10},
    {name: 'D', score: 7},
    {name: 'E', score: 5},
]

// C1: map
// function getStudents(students: Student[], threshold: number): Student[]{
//     let newStudents: Student[]=[];
//     students.map(student => {
//         if (student.score > threshold){
//             newStudents.push(student);
//         }
//     })
//     return newStudents;
// }

// C2: filter
function getStudents(students: Student[], threshold: number): Student[]{
    return students.filter((student) => {
        return student.score > threshold
    })

}
console.log(getStudents(students, 9))


function getAverageScore(){
    let totalScore: number = 0;
    students.forEach(student => {
        totalScore += student.score;
    })
    return totalScore / students.length
}

console.log(getStudents(students, 7))
console.log(getAverageScore())