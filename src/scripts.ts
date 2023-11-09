/* Define all functions as arrow functions like in the example. 
Each function has a unique title. 
Name functions in camelCase and with descriptive titles. 
Define types for all arguments passed to the function and add a return type. */


/* TASK 1
Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result */

const add = (a: number, b: number): number => a + b;

console.log(add(1, 2)); //3
console.log(add(1, 10)); //11
console.log(add(99, 1)); //100

/* TASK 2
Write a function that takes a value as argument
Return the type of the value */

const getType = (value: number | boolean | object | string): string => {
    return typeof value;
};

console.log(getType(1)); //'number'
console.log(getType(false)); //'boolean'
console.log(getType({})); //'object'
console.log(getType(null)); //'object'
console.log(getType('string')); //'string'
console.log(getType(['array'])); //'object'

/* TASK 3
Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type */

const areTheSame = (a: number | string, b: number | string): boolean => {
    if (a === b) {
        return true;
    } else {
        return false;
    }
};

console.log(areTheSame(2, 3)); //false 
console.log(areTheSame(3, 3)); //true 
console.log(areTheSame(1, '1')); //false 
console.log(areTheSame('10', '10')); //true 

/* TASK 4
Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a' */

const character = (a: string, n: number): string => {
    return a.charAt(n-1);
};

console.log(character('abcd', 1)); //'a'
console.log(character('zyxbwpl', 5)); //'w'
console.log(character('gfedcba', 3)); //'e'

/* TASK 5
Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result */

const removeChar = (a: string): string => {
    return a.substring(3);
};

console.log(removeChar('abcdefg')); //'defg'
console.log(removeChar('1234')); //'4'
console.log(removeChar('fgedcba')); //'dcba'

/* TASK 6
Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result */

const extractCharEnd = (a: string): string => {
    return a.slice(-3);
};

console.log(extractCharEnd('abcdefg')); //'efg'
console.log(extractCharEnd('1234')); //'234'
console.log(extractCharEnd('fgedcba')); //'cba'

/* TASK 7
Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result */

const extractCharStart = (a: string): string => {
    return a.slice(0, 3);
};

console.log(extractCharStart('abcdefg')); //'abc'
console.log(extractCharStart('1234')); //'123'
console.log(extractCharStart('fgedcba')); //'fge'

/* TASK 8
Write a function that takes a string (a) as argument
Extract the first half a
Return the result */

const extractHalf = (a: string): string => {
    return a.slice(0, Math.ceil(a.length / 2));
};

console.log(extractHalf('abcdefg')); //'abcd'
console.log(extractHalf('1234')); //'12'
console.log(extractHalf('gedcba')); //'ged'

/* TASK 9
Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result */

const removeCharEnd = (a: string): string => {
    return a.slice(0, -3);
};

console.log(removeCharEnd('abcdefg')); //'abcd'
console.log(removeCharEnd('1234')); //'1'
console.log(removeCharEnd('fgedcba')); //'fged

/* TASK 10
Write a function that takes two numbers (a and b) as argument
Return b percent of a */

const percent = (a: number, b: number): number => {
    return (a * b) / 100;
};

console.log(percent(100, 50)); //50
console.log(percent(10, 1)); //0.1
console.log(percent(500, 25)); //125

/* TASK 11
Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result
Tip: mind the order */

const mathOperation = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return ((a + b - c) * d / e) ** f;
};

console.log(mathOperation(6, 5, 4, 3, 2, 1)); //10.5
console.log(mathOperation(6, 2, 1, 4, 2, 3)); //2744
console.log(mathOperation(2, 3, 6, 4, 2, 3)); //-8

/* TASK 12
Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false */

const isEven = (a: number): boolean => {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isEven(10)); //true
console.log(isEven(-4)); //true
console.log(isEven(5)); //false
console.log(isEven(-111)); //false

/* TASK 13
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */

const charTimes = (a: string, b: string): number => {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;
};

console.log(charTimes('m', 'how many times does the character occur in this sentence?')); //2
console.log(charTimes('h', 'how many times does the character occur in this sentence?')); //4
console.log(charTimes('?', 'how many times does the character occur in this sentence?')); //1
console.log(charTimes('z', 'how many times does the character occur in this sentence?')); //0

/* TASK 14
Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false */

const wholeNum = (a: number): boolean => {
    return Number.isInteger(a);
};

console.log(wholeNum(4)); //true 
console.log(wholeNum(1.123)); //false 
console.log(wholeNum(1048)); //true 
console.log(wholeNum(10.48)); //false 

/* TASK 15
Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value */

const numOperation = (a: number, b: number): number => {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
};

console.log(numOperation(10, 100)); //0.1
console.log(numOperation(90, 45)); //4050
console.log(numOperation(8, 20)); //0.4
console.log(numOperation(2, 0.5)); //1

/* TASK 16
Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation */

const contain = (a: string, b: string): string => {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
};

console.log(contain('cheese', 'cake')); //'cheesecake'
console.log(contain('lips', 's')); //'slips'
console.log(contain('Java', 'script')); //'Javascript'
console.log(contain(' think, therefore I am', 'I')); //'I think, therefore I am'

/* TASK 17
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number */

const roundedNum = (a: number): number => {
    return Number(a.toFixed(2));
};

console.log(roundedNum(2.12397)); //2.12
console.log(roundedNum(3.136)); //3.14
console.log(roundedNum(1.12397)); //1.12
console.log(roundedNum(26.1379)); //26.14

/* TASK 18
Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting */

const indDigits = (a: number): number[] => {
    return a.toString().split("").map(Number);
};

console.log(indDigits(10)); //[1,0]
console.log(indDigits(931)); //[9,3,1]
console.log(indDigits(193278)); //[1,9,3,2,7,8]

/* TASK 19
It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc. */

const cleanChaos = (a: string, b: string): string => {
    let cleanA = a.replace(/[^a-zA-Z0-9]/g, '')
    let capitalizeA = cleanA.charAt(0).toUpperCase() + cleanA.slice(1);
    let cleanB = b.replace(/[^a-zA-Z0-9]/g, '').split('').reverse().join('');
    return capitalizeA + cleanB;
};

console.log(cleanChaos('java', 'tpi%rcs')); //'Javascript'
console.log(cleanChaos('c%ountry', 'edis')); //'Countryside'
console.log(cleanChaos('down', 'nw%ot')); //'Downtown'

/* TASK 20
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number */

const isPrime = (a: number): boolean => {
    if (a <= 1) {
        return false;
    };

    if (a <= 3) {
        return true;
    };

    if (a % 2 === 0 || a % 3 === 0) {
        return false;
    };

    for (let i = 5; i * i <= a; i += 6) {
        if (a % i === 0 || a % (i + 2) === 0) {
            return false;
        }
    }
    return true;
};

const nextPrime = (a: number): number => {
    let next = a;
    while (true) {
        next++;
        if (isPrime(next)) {
            return next;
        }
    }
};

const getPrime = (a: number): number => {
    if (isPrime(a)) {
        return a;
    } else {
        return nextPrime(a);
    }
};

console.log(getPrime(38)); //41
console.log(getPrime(7)); //7
console.log(getPrime(115)); //127
console.log(getPrime(2000)); //2003

/* TASK 21
Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */

const isDivisible = (x: number, y: number): number => {
    if (x % y === 0) {
        return x;
    } else {
        return x + (y - (x % y));
    }
};

console.log(isDivisible(1, 23)); //23
console.log(isDivisible(23, 23)); //23
console.log(isDivisible(7, 3)); //9
console.log(isDivisible(-5, 7)); //0

/* TASK 22
Write a function that takes two strings (a and b) as arguments
Starting at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string */

const insertB = (a: string, b: string): string => {
    const reversedA = a.split('').reverse().join('');
    let result = '';
    if (a.length < 3) {
        return b + a;
    } else {
        for (let i = 0; i < reversedA.length; i++) {
            result += reversedA[i];
            if ((i + 1) % 3 === 0 && i !== (reversedA.length - 1)) {
                result += b;
            }
        }
        return result.split('').reverse().join('');
    }
};

console.log(insertB('1234567', '.')); //'1.234.567'
console.log(insertB('abcde', '$')); //'ab$cde'
console.log(insertB('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'

/* TASK 23
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word */

const nextLetter = (a: string): string => {
    let result = ''
    for (let i = 0; i < a.length; i++) {
        let charIndex = (a.charCodeAt(i)) + 1;
        result += String.fromCharCode(charIndex);
    }
    return result;
};

console.log(nextLetter('bnchmf')); //'coding'
console.log(nextLetter('bgddrd')); //'cheese'
console.log(nextLetter('sdrshmf')); //'testing'

/* TASK 24
Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a' */

const elementOfArray = (a: number[], n: number): number => {
    return a[n - 1];
};

console.log(elementOfArray([1, 2, 3, 4, 5], 3)); //3
console.log(elementOfArray([10, 9, 8, 7, 6], 5)); //6
console.log(elementOfArray([7, 2, 1, 6, 3], 1)); //7

/* TASK 25
Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result */

const noStart = (a: number[]): number[] => {
    return a.slice(3);
};

console.log(noStart([1, 2, 3, 4])); //[4]
console.log(noStart([5, 4, 3, 2, 1, 0])); //[2,1,0]
console.log(noStart([99, 1, 1])); //[]

/* TASK 26
Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array */

const extractEnd = (a: number[]): number[] => {
    return a.slice((a.length - 3));
};

console.log(extractEnd([1, 2, 3, 4])); //[2,3,4]
console.log(extractEnd([5, 4, 3, 2, 1, 0])); //[2,1,0]
console.log(extractEnd([99, 1, 1])); //[99,1,1]

/* TASK 27
Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array */

const extractStart = (a: number[]): number[] => {
    return a.slice(0, 3);
};

console.log(extractStart([1, 2, 3, 4])); //[1,2,3]
console.log(extractStart([5, 4, 3, 2, 1, 0])); //[5,4,3]
console.log(extractStart([99, 1, 1])); //[99,1,1]

/* TASK 28
Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a */

const returnLastN = (a: number[], n: number): number[] => {
    return a.slice(a.length - n);
};

console.log(returnLastN([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(returnLastN([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(returnLastN([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]

/* TASK 29
Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array */

const filteredArray = (a: any[], b: any): any[] => {
    return a.filter(element => element !== b);
};

console.log(filteredArray([1,2,3], 2)); //[1, 3]
console.log(filteredArray([1,2,'2'], '2')); //[1, 2]   
console.log(filteredArray([false,'2',1], false)); //['2', 1]
console.log(filteredArray([1,2,'2',1], 1)); //[2, '2']

/* TASK 30
Write a function that takes an array (a) as argument
Return the number of elements in a */

const numOfElements = (a: number[]): number => {
    return a.length;
};

console.log(numOfElements([1,2,2,4])); //4
console.log(numOfElements([9,9,9])); //3
console.log(numOfElements([4,3,2,1,0])); //5

/* TASK 31
Write a function that takes an array of numbers as argument
Return the number of negative values in the array */

const numOfNegative = (a: number[]): number => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            count++;
        }
    }
    return count;
};

console.log(numOfNegative([1,-2,2,-4])); //2
console.log(numOfNegative([0,9,1])); //0
console.log(numOfNegative([4,-3,2,1,0])); //1

/* TASK 32
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order */

const descend = (arr: number[]): number[] => {
    return arr.sort((a, b) => b - a);
};

console.log(descend([1,3,2])); //[3,2,1]
console.log(descend([4,2,3,1])); //[4,3,2,1]

/* TASK 33
Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result */

const alphabet = (arr: string[]): string[] => {
    return arr.sort();
};

console.log(alphabet(['b', 'c', 'd', 'a'])); //['a', 'b', 'c', 'd']
console.log(alphabet(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); //['a', 'a', 'c', 'd', 'w', 'y', 'z']

/* TASK 34
Write a function that takes an array of numbers as argument
It should return the average of the numbers */

const average = (arr: number[]): number => {
    return (arr.reduce((total, num) => total + num, 0)) / arr.length;
}

console.log(average([10, 100, 40])); //50
console.log(average([10, 100, 1000])); //370
console.log(average([-50,0,50,200])); //50

/* TASK 35
Write a function that takes an array of strings as argument
Return the longest string */

const longest = (arr: string[]): string => {
    let result ='';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > result.length) {
            result = arr[i];
        }
    }
    return result;
};

console.log(longest(['help', 'me'])); //'help'
console.log(longest(['I', 'need', 'candy'])); //'candy'

/* TASK 36
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise */

const areEqual = (arr: any[]): boolean => {
    const firstElement = arr[0];
    return arr.every(element => element === firstElement);
};

console.log(areEqual([true, true, true, true])); //true 
console.log(areEqual(['test', 'test', 'test'])); //true 
console.log(areEqual([1,1,1,2])); //false 
console.log(areEqual(['10',10,10,10])); //false 

/* TASK 37
Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays */

const oneArray = (...arr: any[]): any[] => {
    return [].concat(...arr);
};

console.log(oneArray([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]
console.log(oneArray(['a', 'b', 'c'], [4, 5, 6])); //['a', 'b', 'c', 4, 5, 6]
console.log(oneArray([true, true], [1, 2], ['a', 'b'])); //[true, true, 1, 2, 'a', 'b']

/* TASK 38
Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array */

const sortedArray = (arr: {a: number, b: number}[]): {}[] => {
    if (arr[0].b < arr[1].b) {
        return arr;
    } else {
        return arr.reverse();
    }
};

console.log(sortedArray([{a: 1, b: 2}, {a: 5, b: 4}])); //[{a:1,b:2},{a:5,b:4}]
console.log(sortedArray([{a: 2, b: 10}, {a: 5, b: 4}])); //[{a:5,b:4},{a:2,b:10}]
console.log(sortedArray([{a: 1, b: 7}, {a: 2, b: 1}])); //[{a:2,b:1},{a:1,b:7}]

/* TASK 39
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array */

const oneArrayAscend = (arrOne: number[], arrTwo: number[]): number[] => {
    let mergedArray = arrOne.concat(arrTwo);
    let uniqueNums = [...new Set(mergedArray)];
    let ascendNums = uniqueNums.sort((a, b) => a - b);
    return ascendNums;
};

console.log(oneArrayAscend([1, 2, 3], [3, 4, 5])); //[ 1, 2, 3, 4, 5 ]
console.log(oneArrayAscend([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); //[ -11, -10, 5, 22, 41,  42, 333]

/* TASK 40
Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum */

const arrayTotal = (a: number[], b: number): number => {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b) {
            result += a[i];
        }
    }
    return result;
};

console.log(arrayTotal([1, 2, 3, 4, 5, 6, 7], 2)); //25
console.log(arrayTotal([-10, -11, -3, 1, -4], -3)); //1
console.log(arrayTotal([78, 99, 100, 101, 401], 99)); //602

/* TASK 41
Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max */

const range = (a: number, b: number): number[] => {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    };
    return result;
};

console.log(range(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 3)); //[1, 2, 3]
console.log(range(-5, 5)); //[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(range(2, 7)); //[2, 3, 4, 5, 6, 7]

/* TASK 42
Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']} */

const groups = (arr: string[]) => {
    let result = {} as any;

    for (let i = 0; i < arr.length; i++) {
        let arrWord = arr[i];
        let firstChar = arrWord[0].toLowerCase();
        let objArr = [];
        if (result[firstChar] === undefined) {
            objArr.push(arrWord);
            result[firstChar] = objArr;
        } else {
            result[firstChar].push(arrWord);
        }
    }
    return result;
};

console.log(groups(['Alf', 'Alice', 'Ben'])); //{ a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groups(['Ant', 'Bear', 'Bird'])); //{ a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groups(['Berlin', 'Paris', 'Prague'])); //{ b: ['Berlin'], p: ['Paris', 'Prague']}

/* TASK 43
Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array */

const newArray = (arr: any[], b: number): any[] => {
    let arrCopy = [...arr];
    if (b < 6) {
        arrCopy.unshift(0);
        return arrCopy;
    } else {
        arrCopy.unshift(b);
        return arrCopy;
    }
};

console.log(newArray([1, 2, 3], 6)); //[6,1,2,3]
console.log(newArray(['a', 'b'], 2)); //[0,'a','b']
console.log(newArray([null, false], 11)); //[11,null,false]

/* TASK 44
Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array */

const saveElement = (a: number[], n: number): number[] => {
    let result = [];
    for (let i = n - 1; i < a.length; i += n) {
        result.push(a[i]);
    }
    return result;
};

console.log(saveElement([1,2,3,4,5,6,7,8,9,10],3)); //[3,6,9]
console.log(saveElement([10,9,8,7,6,5,4,3,2,1],5)); //[6,1]
console.log(saveElement([7,2,1,6,3,4,5,8,9,10],2)); //[2,6,4,8,10]

/* TASK 45
Write a function that takes an object with two properties as argument
It should return the value of the property with key country */

const country = (obj: {continent: string, country: string}): string => {
    return obj.country;
};

console.log(country({continent: 'Asia', country: 'Japan'})); //'Japan'
console.log(country({country: 'Sweden', continent: 'Europe'})); //'Sweden'

/* TASK 46
Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor */

type Task46 = {
    'prop-2': number | string;
    one?: number;
    prop?: string;
};

const propTwo = (obj: Task46): number | string => {
    return obj['prop-2'];
};

console.log(propTwo({one: 1,  'prop-2': 2})); //2
console.log(propTwo({'prop-2': 'two',  prop: 'test'})); //'two'

/* TASK 47
Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string */

const getCountry = (a: any, b: string): string => {
    return a[b];
};

console.log(getCountry({continent: 'Asia', country: 'Japan'}, 'continent')); //'Asia'
console.log(getCountry({country: 'Sweden', continent: 'Europe'}, 'country')); //'Sweden'

/* TASK 48
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise */
type Task48 = {
    a?: number;
    b?: number;
    c?: number;
    x?: string;
    y?: string;
    z?: string;
}

const hasProperty = (a: Task48, b: string): boolean => {
    return a.hasOwnProperty(b);
};

console.log(hasProperty({a: 1, b: 2, c: 3},'b')); //true
console.log(hasProperty({x: 'a', y: 'b', z: 'c'},'a')); //false
console.log(hasProperty({x: 'a', y:'b', z:'c'},'z')); //true

/* TASK 49
Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object */

const obj = (a: string): {} => {
    return {key: a};
};

console.log(obj('a')); //{key:'a'}
console.log(obj('z')); //{key:'z'}
console.log(obj('b')); //{key:'b'}

/* TASK 50
Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object */

const getObj = (a: string, b: string): {} => {
    return {[a]: b};
};

console.log(getObj('a', 'b')); //{a:'b'}
console.log(getObj('z', 'x')); //{z:'x'}
console.log(getObj('b', 'w')); //{b:'w'}

/* TASK 51
Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object */

const objFromArray = (a: any[], b: any[]): {} => {
    let result = {} as any;
    for (let i = 0; i < a.length; i++) {
        result[a[i]] = b[i];
    }
    return result;
};

console.log(objFromArray(['a','b','c'],[1,2,3])); //{a:1,b:2,c:3}
console.log(objFromArray(['w','x','y','z'],[10,9,5,2])); //{w:10,x:9,y:5,z:2}
console.log(objFromArray([1,'b'],['a',2])); //{1:'a',b:2}

/* TASK 52
Write a function that takes an object (a) as argument
Return an array with all object keys */

const arrWithKeys = (a: {}): string[] => {
    return Object.keys(a);
};

console.log(arrWithKeys({a: 1, b: 2, c: 3})); //['a','b','c']
console.log(arrWithKeys({j: 9, i: 2, x: 3, z: 4})); //['j','i','x','z']
console.log(arrWithKeys({w: 15, x: 22, y: 13})); //['w','x','y']

/* TASK 53
Write a function that takes an object (a) as argument
Return the sum of all object values */

const objSum = (a: {}): number => {
    let result: any = Object.values(a);
    return result.reduce((total: number, value: number) => total + value, 0);
};

console.log(objSum({a:1,b:2,c:3})); //6
console.log(objSum({j:9,i:2,x:3,z:4})); //18
console.log(objSum({w:15,x:22,y:13})); //50

/* TASK 54
Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b' */

const withoutB = (a: {}): {} => {
    let {b, ...rest}: any = a;
    return rest;
};

console.log(withoutB({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }
console.log(withoutB({ b: 0, a: 7, d: 8 })); //{ a: 7, d: 8 }
console.log(withoutB({ e: 6, f: 4, b: 5, a: 3 })); //{ e: 6, f: 4, a: 3 }

/* TASK 55
Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e' */

const changeB = (obj1: any, obj2: any): {} => {
    obj2.d = obj2.b;
    delete obj2.b;
    return {...obj1, ...obj2};
};

console.log(changeB({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); //{ a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(changeB({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); //{ a: 5, b: 4, c: 3, e: 2, d: 1}

/* TASK 56
Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object */

const multiplyObj = (a: any, b: number): {} => {
    let result = {} as any;
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            result[key] = a[key] * b;
        }
    }
    return result;
};

console.log(multiplyObj({a: 1, b: 2, c: 3}, 3)); //{a:3,b:6,c:9}
console.log(multiplyObj({j: 9, i: 2, x: 3, z: 4}, 10)); //{j:90,i:20,x:30,z:40}
console.log(multiplyObj({w: 15, x: 22, y: 13}, 6)); //{w:90,x:132,y:78}

/* TASK 57
Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object */

const swapObj = (obj: any): {} => {
    let result = {} as any;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
};

console.log(swapObj({z:'a',y:'b',x:'c',w:'d'})); //{a:'z',b:'y',c:'x',d:'w'}
console.log(swapObj({2:'a',4:'b',6:'c',8:'d'})); //{a:'2',b:'4',c:'6',d:'8'}
console.log(swapObj({a:1,z:24})); //{1:'a',24:'z'}

/* TASK 58
Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object */

const nullObj = (obj: any): {} => {
    let result = {} as any;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'string' && obj[key].trim() === '') {
                result[key] = null;
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
};

console.log(nullObj({a: 'a', b: 'b', c: ''})); //{ a: 'a', b: 'b', c: null }
console.log(nullObj({a: '', b: 'b', c: ' ', d: 'd'})); //{ a: null, b: 'b', c: null, d: 'd' }
console.log(nullObj({a: 'a', b: 'b ', c: ' ', d: ''})); //{ a: 'a', b: 'b ', c: null, d: null }

/* TASK 59
Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in */

const nameObj = (obj: any): {} => {
    let result = {} as any;
    Object.keys(obj).forEach(key => {
        if (key === 'fn' || key === 'ln') {
            result[key] = obj[key];
        };

        if (key === 'size') {
            obj[key] = obj[key] + 'cm';
            result[key] = obj[key];
        };

        if (key === 'weight') {
            obj[key] = obj[key] + 'kg';
            result[key] = obj[key];
        };

    });
    return result;
};

console.log(nameObj({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})); //{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(nameObj({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})); //{fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(nameObj({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})); //{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(nameObj({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})); //{fn: 'Matthew', ln: 'Müller'}

/* TASK 60
Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array */

const addContinent = (arr: {}[], str: string): {}[] => {
    let arrCopy = [...arr];
    return arrCopy.map((obj) => ({
        ...obj,
        continent: str,
    }));
};

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')); //[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')); //[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
    
/* TASK 61
Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array */

const uniqueValue = (arr: number[]): {} => {
    let result = {} as any;
    for (const num of arr) {
        if (result[num]) {
            result[num] += 1;
        } else {
            result[num] = 1;
        }
    }
    return result;
};

console.log(uniqueValue([1,2,2,3])); //{1:1,2:2,3:1}
console.log(uniqueValue([9,9,9,99])); //{9:3,99:1}
console.log(uniqueValue([4,3,2,1])); //{1:1,2:1,3:1,4:1}

/* TASK 62
Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise */

const dates = (a: Date, b: Date): boolean => {
    return a.getTime() === b.getTime();
};

console.log(dates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //false
console.log(dates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //true
console.log(dates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false

/* TASK 63
Write a function that takes two date instances as argument
It should return the number of days that lies between those dates */

const numberOfDays = (a: any, b: any): number => {
    let oneDay = 24 * 60 * 60 * 1000;
    let range = Math.abs((a - b) / oneDay);
    return range;
};

console.log(numberOfDays(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(numberOfDays(new Date('2000-01-01'), new Date('2020-06-01'))); //7457

/* TASK 64
Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise */

const ifExactDay = (a: Date, b: Date): boolean => {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
      );
};

console.log(ifExactDay(new Date('2000/01/01'), new Date('2000/01/01'))); //true 
console.log(ifExactDay(new Date('2000/01/01'), new Date('2000/01/02'))); //false 
console.log(ifExactDay(new Date('2001/01/01'), new Date('2000/01/01'))); //false 
console.log(ifExactDay(new Date('2000/11/01'), new Date('2000/01/01'))); //false 

/* SPREAD OPERATOR 
Use spread operator in all tasks */

/* TASK 65 
Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays */

const bothArrays = (a: number[], b: number[]): number[] => {
    return [...a, ...b];
};

console.log(bothArrays([1, 2], [3, 4])); //[1, 2, 3, 4]
console.log(bothArrays([1, 2], [3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6]

/* TASK 66
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element */

const arrayWithString = (a: string[], b: string): string[] => {
    return [...a, b];
};

console.log(arrayWithString(['Apple', 'Orange', 'Banana'], 'Kiwi')); //['Apple', 'Orange', 'Banana', 'Kiwi']

/* TASK 67
Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element */

const arrayFirstString = (a: string[], b: string): string[] => {
    return [b, ...a];
};

console.log(arrayFirstString(['Apple', 'Orange', 'Banana'], 'Kiwi')); //['Kiwi', 'Apple', 'Orange', 'Banana']

/* TASK 68
Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects */

const bothObjects = (a: {}, b: {}): {} => {
    return {...a, ...b};
};

console.log(bothObjects({a: 1, b: 2 }, {c: 3, d: 4})); //{ a:1, b:2, c:3, d:4 }
console.log(bothObjects({a: 1, b: 2 }, {c: 3, d: 4, e: 5, f: 6})); //{ a:1, b:2, c:3, d:4, e:5, f:6 }

/* TASK 69
Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string */

const objWithString = (a: {}, b: string): {} => {
    return {...a, favoriteMovie: b};
};

console.log(objWithString({eyeColor: 'green', age: 10}, 'Garfield')); //{ eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(objWithString({eyeColor: 'blue', age: 15}, 'Twilight')); //{ eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }