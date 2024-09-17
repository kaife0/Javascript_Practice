//number of even numbers
const evenNumber = (arr) =>
    arr.filter(num => num % 2 ===0).length;

console.log(evenNumber([1,2,4,6,7]))
console.log(evenNumber([1,2,4,6,5,9,6,22,7]))
console.log(evenNumber([1,2,4,6,24,554,572]));

//number of even values upto given number

const numberOfEven = (arr) =>
    arr.filter(num => num % 2 === 0).length;
const arrayOfNumber = (num) =>{
    const returnArray = [];
    for (let i=1; i<=num; i++){
        returnArray.push(i);
     }
return returnArray;
}
console.log(numberOfEven(arrayOfNumber(17)));

//sort in acending order
const acendingSort = (arr) =>
    arr.sort((a, b) => a - b);

const input = '2,44,4,16,7';
const arr = input.split(',').map(Number); 
console.log(acendingSort(arr));

//find largest even number 
const largestEven = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([2,4,65,77,68,124]));

//