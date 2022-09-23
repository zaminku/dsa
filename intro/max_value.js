const maxValue = (nums) => {
  let max = -Infinity;
  for (num of nums) {
    (num > max) && (max = num);
  }
  
  return max;
};