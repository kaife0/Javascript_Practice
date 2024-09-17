//Ex:1 check number is hundred or not.
const isEqualTo100 = (a,b) => a===100 || b===100 || a+b ===100;
console.log(isEqualTo100(98,100))
console.log(isEqualTo100(94,10))
console.log(isEqualTo100(20,80))

//EX:2 get extension of filename

const getFileName = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileName('index.html'));
console.log(getFileName('index.js'));
console.log(getFileName('index.file.py'));

// EX:3  replace character with following alphabet

const moveForward = (str) => str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0)+1));

console.log(moveForward('Kaif'))

//Get current Date

// const getDate = new Date;
// console.log(getDate);

const formatDate = (date =new Date ())=>{
    const day = date.getDate();
    const months = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${months}/${year}`;
}

console.log(formatDate());

