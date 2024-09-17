// The Magical sorting Hat: imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript
//  function that takes an array of student names and assigns them to one of 
//  four houses (Gryffindor (length less than 6), Hufflepuff(Length less than 8), Ravenclaw(Length less than 12), 
//  pr Slytherin(length less than or eqal to 12)) based on the length of their names. 

let students = ["shubh", "muskan", "Susmita", "Kaif", "shubham", "Nagendra", "Krishnandu", "Shivesh", "Rahul"]

let houses = []

for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor"); 
    }
    else if (student.length < 8){
        houses.push("Hufflepuff");
    }
    else if (student.length < 12){
        houses.push("Ravenclaw");
    }
    else {
        houses.push("Slytherin");
    }
}

console.log(houses );

