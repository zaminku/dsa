const maxValue = (nums) => {
  // todo
  let max = -Infinity;
  for (num of nums) {
    (num > max) && (max = num);
  }
  
  return max;
};

const isPrime = (n) => {
  // todo
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  
  return true;
};