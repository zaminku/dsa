const isPrime = (n) => {

  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  
  return true;
};

// NOTE: only need to go up to sqrt(n) inclusive to check for possible divisors
// any after that will be some combination of a prime number 
// (e.g. n = 64 -> sqrt(n) = 8; 2*8=16, don't check 16 bc thats a duplicate check)