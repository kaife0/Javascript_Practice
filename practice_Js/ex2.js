//String add character

const makeNewString = (str)=> 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abc123abc123'));
console.log(makeNewString('ab'));

//first half of string of even length

const firstHalf = (str) => str.slice(0, str.length / 2);
console.log(firstHalf('abc123'));

//add two string without first character

const addString = (str1, str2) =>
    str1.slice(1) + str2.slice(1);
console.log(addString('lemon', 'kill'));
console.log(addString('kaif', 'ginger'));

//find which is closer to 100

const closer = (a,b) => (100-a) <(100-b) ? a:b;
console.log(closer(23,65));
console.log(closer(-93,-85));
    
//check 2 to 4 occurances of specific character

const countChar = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const check = (str, char) =>
    countChar(str, char) >= 2 && countChar(str, char) <= 4;

console.log(check('fuuuuck' ,'u'));
console.log(check('forrrrrk' ,'r'));
console.log(check('fuuck' ,'u'));


