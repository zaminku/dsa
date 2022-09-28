const uncompress = (s) => {
  // todo
  let uncompressed = [];
  const nums = "0123456789";

  let i = 0;
  let j = 0;
  
  while (i < s.length) {
    if (nums.includes(s[j])) {
      j += 1;
    } else {
      let times = parseInt(s.slice(i, j));
      for (let k = 0; k < times; k++) {
        uncompressed.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  
  return uncompressed.join('');
};

// n = # of groups
// m = max number for any group
// Time: O(n * m)
// Space: O(n * m)

// String concatenation is O(n) in JS, but pushing an element to end of array is O(1)

//--------------------------------------------------------------------------------
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'