// II. ARRAY AND STRING PROBLEMS

// max value
// Write a function, maxValue, that takes in array of numbers as an argument.The function should return the largest number in the array.

// Solve this without using any built -in array methods.

// You can assume that the array is non - empty.

const maxValue = (nums) => {
    // todo
    let min = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (min < nums[i]) {
            min = nums[i];
        }
    }
    return min;
};







// is prime
// Write a function, isPrime, that takes in a number as an argument.The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.


const isPrime = (n) => {
    // todo
    // 0, 1 not prime. Negatives not prime.
    if (n < 2) {
        return false;
    }

    // if it has a divisor, not prime
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    // if no divisors other than one and itself, then prime
    return true;
};






// Write a function, uncompress, that takes in a string as an argument.The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

//     for example, '2c' or '3a'.
//     The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
    // todo
    // input string with pattern: <number><char> ex. '2c', '3a', '14b'

    // 2 pointers because you don't know how many digits a number contains
    // i, j start at 0
    // increment j until you find alphabetic character. once you find char, then increment again to get j up to speed
    // then set i to j

    let i = 0;
    let j = 0;
    let numbers = '0123456789';
    let uncompressed = '';

    while (i < s.length) {
        if (numbers.includes(s[j])) {
            j++;
        } else {
            let numTimes = s.slice(i, j);
            for (let count = 0; count < numTimes; count++) {
                uncompressed += s[j];
            }
            j++;
            i = j;
        }
    }

    return uncompressed;
};





// compress
// Write a function, compress, that takes in a string as an argument.The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character.Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
    // todo

    // given string
    // if only one of char, then do not add number

    let i = 0;
    let compressed = '';

    while (i < s.length) {
        let count = 1;
        let currChar = s[i];
        i += 1; // always update to the next index

        // only update count and index if orig currChar is equal to next char. yes then change count + index
        while (currChar === s[i]) {
            count += 1;
            i += 1;
        }

        if (count === 1) {
            compressed += currChar;
        } else {
            compressed += (count.toString() + currChar);
        }
    }

    return compressed;
};




// anagrams
// Write a function, anagrams, that takes in two strings as arguments.The function should return a boolean indicating whether or not the strings are anagrams.Anagrams are strings that contain the same characters, but in any order.
const anagrams = (s1, s2) => {
    // todo

    let count = {};

    for (let i = 0; i < s1.length; i++) {
        if (count[s1[i]] === undefined) {
            count[s1[i]] = 0;
        }
        count[s1[i]] += 1;
    }

    for (let i = 0; i < s2.length; i++) {
        if (count[s2[i]] === undefined) {
            return false;
        }
        count[s2[i]] -= 1;
    }

    for (char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true;
};





// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument.The function should return the most frequent character of the string.If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non - empty.