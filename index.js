/*Instructions:
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in
        the last element of the array.
    b. Do not use numbers to reference the last element, find it programmatically.
       ages[7] - ages[0] is not allowed!
    c. Add a new age to your array and repeat the step above to ensure it is dynamic. 
       (works for arrays of different lengths).
    d. Use a loop to iterate through the array and calculate the average age. */

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[ages.length-ages.length]);

ages.push(37);
console.log(ages[ages.length - 1] - ages[ages.length-ages.length]);

let averageAge = 0;
for (let i = 0; i < ages.length; i++) {
    averageAge += ages[i]
}
console.log(averageAge/ages.length);



/* 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 
      'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per
       name.
    b. Use a loop to iterate through the array again and concatenate all the names together, 
       separated by spaces. */

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sum = 0;
for (let i = 0; i < names.length; i++) {
    sum += names[i].length;
}
console.log(sum/names.length);

let namesWithSpaces = '';
for (let i = 0; i < names.length; i++) {
    namesWithSpaces += names[i] + ' ';
}
console.log(namesWithSpaces);



//3. How do you access the last element of any array?
//ANSWER: nameOfArray[nameOfArray.length - 1] will give the last element in an array.

//4. How do you access the first element of any array?
/*ANSWER: nameOfArray[0] will always be the first element in an array as a zero-index; 
  nameOfArray[nameOfArray.length - nameOfArray.length] will also return the first element.



/* 5. Create a new array called nameLengths. Write a loop to iterate over the previously 
    created names array and add the length of each name to the nameLengths array.
    For example:

    let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    let nameLengths = [5, 3, 4];             // create a new array */

/*const nameLengths = [names.map(function(element) {
    return element.length;
})];
console.log(nameLengths); */

const nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);



/* 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the 
     elements in the array. */

let nameLengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}
console.log(nameLengthsSum);



/*7. Write a function that takes two parameters, word and n, as arguments and returns the word 
     concatenated to itself n number of times. 
   (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'). */

function greet(word, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(greet('Hi', 5));



/*8. Write a function that takes two parameters, firstName and lastName, and returns a full
     name. The full name should be the first and the last name separated by a space. */
function fullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
} 
console.log(fullName('John', 'Jacob'));



/* 9. Write a function that takes an array of numbers and returns true if the sum of all the 
      numbers in the array is greater than 100. */

function sumOverHundred([a, b, c]) {
    if (a + b + c > 100) {
        return true;
    } else {
        return false;
    }
} 
console.log(sumOverHundred([1, 80, 66]));
console.log(sumOverHundred([8, 20, 13]));

/* 10. Write a function that takes an array of numbers and returns the average of all the 
       elements in the array. */

let arrayOfNums = [6, 9, 20, 35];
function averageOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } 
    let average = sum/array.length;
    return average;
}
console.log(averageOfArray(arrayOfNums));



/* 11. Write a function that takes two arrays of numbers and returns true if the average of 
    the elements in the first array is greater than the average of the elements in the second 
    array. */

let firstArray = [78, 66, 58, 3];
let secondArray = [40, 50, 60, 70];
function averageOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
     } 
     let average = sum/array.length;
     return average;
}
function firstArrayAverageGreaterThanSecondArray(array1, array2) {
    return (averageOfArray(array1) > averageOfArray(array2));
}
console.log(firstArrayAverageGreaterThanSecondArray(firstArray, secondArray));



/*12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside 
    and if moneyInPocket is greater than 10.50. */

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }   
}
console.log(willBuyDrink(true, 11.00));


/*13. Create a function of your own that solves a problem. In comments, write what the 
   function does and why you created it. */

function willBuyAlbum(bankAccount, savingsAccount, payDay) {
    if (bankAccount < savingsAccount && payDay == false) {
        return "Let's wait until payday."
    } else if (bankAccount > savingsAccount) {
        return "Put some money into savings first!"
    } else if (bankAccount < savingsAccount && payDay == true) {
        return "We can splurge on an album!"
    } else {
        return "Maybe no one will notice another album..."
    }
}
console.log(willBuyAlbum(1000, 5000, false));

//This is generally how I approach buying a new vinyl album... :) 