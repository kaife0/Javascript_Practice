// A JavaScript function that returns a passed string with letters in alphabetical order

const alphabeticalOrder = (str) =>{
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('webmaster'));
console.log(alphabeticalOrder('amanclo'));

//count the no. of vowels from string

const countLetters = (
    str, letters = ['a', 'e', 'i', 'o', 'u']) =>
    str
    .split('')
    .filter(s => letters.indexOf(s) > -1)
    .length;
console.log(countLetters('kaiddff'));

//extract unique characters from a string

const getUniqueChars = (str)=>
    str.split('').filter(
        (item, index, arr) =>
            arr.slice(index+1).indexOf(item === -1)
    );

    console.log(getUniqueChars('aaaddccrfff'));

// First not repeated characters

const firstNotRepeated = (str) =>  
    str.split('')
.filter((item, index, arr) =>
    arr.filter(arrItem => arrItem === item ).length === 1
);
console.log(firstNotRepeated('aaassseddfrer'));
     