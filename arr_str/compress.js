const compress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  let count = 0;
  let compressed = [];
  
  while (i < s.length) {
    if (s[i] === s[j]) {
      j += 1;
      count += 1;
    } else {
      if (count === 1) {
        compressed.push(char);
      } else {
        compressed.push(count + char); // count = (j - i) -> can use (j - i) instead
      }
      count = 0;
      i = j;
      char = s[i];
    }
  }
  
  return compressed.join('');
};

// n = string length
// Time: O(n)
// Space: O(n)
//--------------------------------------------------------------------------------

// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// test_00:
// compress('ccaaatsss'); // -> '2c3at3s'
// test_01:
// compress('ssssbbz'); // -> '4s2bz'
// test_02:
// compress('ppoppppp'); // -> '2po5p'
// test_03:
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// test_04:
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'
