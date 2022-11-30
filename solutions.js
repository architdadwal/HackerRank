//Complete the function solveMeFirst to compute the sum of two integers.

function solveMeFirst(a, b) {
  // Hint: Type return a+b below

  return a + b;
}

//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  // Write your code here
  var s = 0;
  for (var i = 0; i < ar.length; i++) {
    s = s + ar[i];
  }
  return s;
}

//Function Description

/*Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return

int[2]: Alice's score is in the first position, and Bob's score is in the second. */

function compareTriplets(a, b) {
  // Write your code here
  let aPoints = 0;
  let bPonits = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    }
    if (b[i] > a[i]) {
      bPonits++;
    }
  }
  return [aPoints, bPonits];
}
