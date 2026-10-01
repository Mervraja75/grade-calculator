/* STEP 1: Pseudocode
When a user inputs a score
Check which range the score falls into
If the score is 90-100, print "A"
If the score is 80-89, print "B"
If the score is 70-79, print "C"
If the score is 60-69, print "D"
If the score is 0-59, print "F"
At the end, if the grade is A, B, C, or D, the user passes
If the grade is F, the user fails
*/


let score = parseInt(prompt("Please enter the number ... "));
console.log(score);

//STEP 2: Grade Logic
let grade = 0;

if (score >= 90){
    grade = "A";
}else if (score >= 80) {
    grade = "B";
}else if (score >= 70) {
    grade = "C";
}else if (score >= 60) {
    grade = "D";
}else{
    grade = "F";
}

if (grade === "A" || grade === "B" || grade === "C" || grade === "D") {
    console.log("Pass");
} else {
    console.log("Fail");
}