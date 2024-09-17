// Check leap year 

const checkLeapYear = (num) => {
    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0 ){
        return true;
    }
    else return false;
}
console.log(checkLeapYear(1980));

//check if the first object contains the same properties as second one(which may have additional properties);

const objA = { a: 1, b: 2, c:1};
const objB = { a: 1, b: 1, c:3};
const objC = { a: 1, b: 2, d:1};

const objectEqual = (a,b) => 
 Object.keys(a).every(key => b[key]);

console.log(objectEqual(objA,objC));
console.log(objectEqual(objA,objB));
console.log(objectEqual(objB,objC));

//convert a comma separated value string to a 2D array. new line indicates new row in array
const str = `abc, def, ghi
jkl,mno,pqr
stu,vwx,yza`;

const parseCSV = (csvString) => 
    csvString.split('/n').map(row => row.split(','));

console.log(parseCSV(str));

// javascript to generate hexadecimal color code

const getRandomHexNumber = () =>
    Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => '#' + Array.from( {
    length: 6}).map(getRandomHexNumber).join('');

    console.log(getRandomHexColor());
    console.log(getRandomHexColor());
    console.log(getRandomHexColor());

//a function that returns true if the provided predicate function returns true for all elements in a collection

console.log([1, 2, 3, 4, 5, 6].every(x => x>0));
console.log([1, 2, 3, 4, 5, 6].every(x => x>4));
console.log([1, 2, 3, 4, 5, 6].every(x => x>1));

//using function

const everyTrue = (arr, fn) =>{
    for (let i=0; i<arr.length; i++){
        if (!fn(arr[i])){
            return false;
        }
    }
    return true;
}
console.log(everyTrue([1,4,5,6,8,11], (x) => x >0));
console.log(everyTrue([1,4,5,6,8,11], (x) => x >3));
