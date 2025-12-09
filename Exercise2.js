let students = [
    {name: 'Tien', core: 8},
    {name: 'Chien', core: 5},
    {name: 'Hieu', core: 9},
    {name: 'Duc', core: 6},
];

function getAboveThreshold(students , threshold){
    let listStudents = [];
    students.map(student => {
        if (student.core > threshold){
            listStudents.push(student.name);
        }
    });
    return listStudents;
}

function getAverageScore(students) {
    let totalScore = 0;
    students.forEach(student => {
        totalScore += student.core
    })
    return totalScore / students.length;
}
var threshold = 7;
console.log("Students above threshold: ")
console.log(getAboveThreshold(students, threshold));
console.log("Average students: ")
console.log(getAverageScore(students));