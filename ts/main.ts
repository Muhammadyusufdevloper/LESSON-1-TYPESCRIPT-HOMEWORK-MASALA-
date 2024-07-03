// --------------------------------------------------------1-misol-------------------------------------------------------------\\
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding!

function squareDigits(num: number): number {
  let str: string = num.toString();
  let reset: string = "";
  for (let i of str) {
    reset += Number(i) ** 2;
  }
  return Number(reset);
}
console.log(squareDigits(2112));

// --------------------------------------------------------2-misol-------------------------------------------------------------\\
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// assert.equal(likes([]), "no one likes this");
// assert.equal(likes(["Peter"]), "Peter likes this");
// assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
// assert.equal(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
// assert.equal(
//   likes(["Alex", "Jacob", "Mark", "Max"]),
//   "Alex, Jacob and 2 others like this"
// );
function likes(names: string[]): string {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
console.log(likes(["Jacob", "Alex"]));

// --------------------------------------------------------3-misol-------------------------------------------------------------\\
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(array: number[]): number[] {
  let zeroCount: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[zeroCount] = array[i];
      zeroCount++;
    }
  }

  for (let i = zeroCount; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

// --------------------------------------------------------4-misol-------------------------------------------------------------\\

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
function tribonacci(signature: number[], n: number): number[] {
  if (n === 0) {
    return [];
  } else if (n <= 3) {
    return signature.slice(0, n);
  }
  let sequence: number[] = [...signature];

  for (let i = 3; i < n; i++) {
    let nextNumber: number =
      sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(nextNumber);
  }

  return sequence;
}
console.log(tribonacci([300, 200, 100], 0));

// --------------------------------------------------------5-misol-------------------------------------------------------------\\
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

function towerBuilder(nFloors: number): string[] {
  let tower: string[] = [];
  let max_width: number = 2 * nFloors - 1;
  for (let i = 1; i <= nFloors; i++) {
    let num_blocks: number = 2 * i - 1;
    let num_spaces: number = Math.floor((max_width - num_blocks) / 2);
    let row: string =
      " ".repeat(num_spaces) + "*".repeat(num_blocks) + " ".repeat(num_spaces);
    tower.push(row);
  }
  return tower;
}
console.log(towerBuilder(9)); //["  *  "," *** ","*****"]

// --------------------------------------------------------6-misol-------------------------------------------------------------\\
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
function sumArray(array: number[]): number {
  if (!array || array.length <= 1) {
    return 0;
  }

  let maxArr: number = Math.max(...array);
  let minArr: number = Math.min(...array);

  let total = array.reduce((sum, num) => sum + num, 0);
  return total - maxArr - minArr;
}
console.log(sumArray([6, 2, 1, 8, 10])); //16

// --------------------------------------------------------7-misol-------------------------------------------------------------\\
// Return an array containing the numbers from 1 to N, where N is the parametered value.
// Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
// Method calling example:

function fizzbuzz(n: number): string[] {
  let result: any[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(fizzbuzz(10));

// --------------------------------------------------------8-misol-------------------------------------------------------------\\
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
function min(arr: number[], toReturn: string): number {
  let min: number = Math.min(...arr);
  if (toReturn === "value") {
    return min;
  } else {
    return arr.indexOf(min);
  }
}
console.log(min([1, 2, 3, 4, 5], "value"));

// --------------------------------------------------------9-misol-------------------------------------------------------------\\
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// assert.strictEqual(persistence(39), 3);
// assert.strictEqual(persistence(4), 0);
// assert.strictEqual(persistence(25), 2);
// assert.strictEqual(persistence(999), 4);
function persistence(num: number): number {
  let count: number = 0;

  while (num >= 10) {
    let digits: number[] = num.toString().split("").map(Number);
    num = digits.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    );
    count++;
  }

  return count;
}
console.log(persistence(39));

// --------------------------------------------------------10-misol-------------------------------------------------------------\\
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
function findMissingLetter(chars: string[]): string | undefined {
  let alphabet: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startIndex: number = alphabet.indexOf(chars[0]);

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
