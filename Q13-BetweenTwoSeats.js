let count = 0;
let maxA = Math.max(...a);
let minB = Math.min(...b);

for (let x = maxA; x <= minB; x = x + maxA) {
  let isValid = true;
  
  for (let i = 0; i < a.length; i++) {
    if (x % a[i] !== 0) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % x !== 0) {
        isValid = false;
        break;
      }
    }
  }
  if (isValid) {
    count++;
  }
}
return count; 




// Pseudocode:
// start count as 0

// set x to max value of array a

// while x is less than or equal to min value of array b
//   set isValid to true

//   check all elements in array a
//     if x is not divisible by an element
//       set isValid to false
//       stop checking array a

//   if isValid
//     check all elements in array b
//       if an element is not divisible by x
//         set isValid to false
//         stop checking array b

//   if isValid
//     increase count

//   move x to next multiple of max(a)

// return count

// checking numbers are multiples of everything in a, and divisors of everything in b
// So the valid numbers must lie: Above or equal to max(a), Below or equal to min(b)
// x must be at least max(a) to be divisible by all elements in array a,
// and at most min(b) to divide all elements in array b.
// x ∈ [ max(a), min(b) ]
