"use strict";
let gradesInput = prompt("Enter your grades separated by commas (e.g., 85,90,78)");
let grades = gradesInput.split(',').map(Number);  // Split the string and convert each part to a number

// Display the grades
alert(`Your grades are: ${grades.join(' ')}`); 
 
function calculateAverage(grades) {
    if (grades.length === 0) return 0; // Handle empty array case

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

const averageGrade = calculateAverage(grades);
alert(`Average Grade: ${averageGrade.toFixed(2)}`);

if (averageGrade >= 80 && averageGrade <= 100) {
    alert("You have Grade A");
} else if (averageGrade >= 60 && averageGrade < 80) {
    alert("You have Grade B");
} else if (averageGrade >= 40 && averageGrade < 60) {
    alert("You have Grade C");
} else if (averageGrade >= 20 && averageGrade < 40) {
    alert("You have Grade D");
} else if (averageGrade >= 0 && averageGrade < 20) {
    alert("You have a Fail");
} else [
   alert("You did not do the exam")
]
