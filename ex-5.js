const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

const arrayScore = [];
let countStudent = 0;
for (let i = 0; i < students.length; i++) {
  arrayScore.push(students[i].score);
  countStudent = i + 1;
}
//console.log(arrayScore);//[ 80, 90, 85, 95 ]

function getAverageStudentScore(students) {
  // Start coding here
  const totalScore = students.reduce(function (accumulator, student) {
    return accumulator + student.score;
  }, 0);

  const averageScore = totalScore / students.length;

  console.log(averageScore);
}

function sum(num, currentValue) {
  return num + currentValue;
}
//console.log(countStudent); //4
let summary = arrayScore.reduce(sum);
//console.log(summary); //350
let average = summary / countStudent;
console.log(average)// Output: 87.5