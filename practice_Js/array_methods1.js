const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?
const avgSalary = (arr) =>
    arr.reduce((acc, person) => acc + parseInt(person.salary), 0) / arr.length
console.log(avgSalary(people));


// 2) Who are the people that are currently older than 30?
const olderThan30 = (arr) => 
    arr.filter(person => {
      const birthYear = parseInt(person.DOB.split('/')[2]) + 2000;
      const currentYear = new Date().getFullYear();
      return birthYear < currentYear - 30;
    });
  
  console.log(olderThan30(people));


// 3) Get a list of the people's full name (firstName and lastName).
const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);

console.log(fullNames);


// 4) Get a list of people in the array ordered from youngest to oldest.
const  orderedPeople = people.sort((a, b) => {
    const birthYearA = parseInt(a.DOB.split('/')[2]) + 2000;
    const birthYearB = parseInt(b.DOB.split('/')[2]) + 2000;
    return birthYearB - birthYearA;
    });
    console.log(orderedPeople);


// 5) How many people are there in each department?
const peopleByDepartment = people.reduce((acc, person) => {
    if (!acc[person.department]) {
        acc[person.department] = 1;
        } else {
            acc[person.department]++;
            }
            return acc;
            }, {});
            console.log(peopleByDepartment);