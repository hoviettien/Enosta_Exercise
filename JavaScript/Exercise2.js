let students = [
    {name: 'Tien', score: 8},
    {name: 'Chien', score: 5},
    {name: 'Hieu', score: 9},
    {name: 'Duc', score: 6},
];

function getAboveThreshold(students , threshold){
    let listStudents = [];
    students.map(student => {
        if (student.score > threshold){
            listStudents.push(student.name);
        }
    });
    return listStudents;
}

function getAverageScore(students) {
    let totalScore = 0;
    students.forEach(student => {
        totalScore += student.score
    })
    return totalScore / students.length;
}
var threshold = 7;
console.log("Students above threshold: ")
console.log(getAboveThreshold(students, threshold));
console.log("Average students: ")
console.log(getAverageScore(students));