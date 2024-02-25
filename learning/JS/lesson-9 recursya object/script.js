// function factorial(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(1));

function countDown(n) {
  if (n == 0) {
    return n;
  }
  console.log(n);
  countDown(n - 1);
}

countDown(12);
