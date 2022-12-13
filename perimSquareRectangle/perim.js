function fibonacciSequence(n) {
  let a = 1;
  let b = 1;
  let temp;
  /* Decrementing n and checking if it is greater than 0. */
  while (n-- > 0){
    temp = a;
    a = b;
    b += temp;
  }
  return a;
  }

function perimeter(n){
 /* Returning the perimeter of the square. */
  return 4 * (fibonacciSequence(n + 2) -1);
}
