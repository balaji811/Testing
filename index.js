function squareRoot(x) {
  return Math.sqrt(x);
}

function square(x) {
  return x * x;
}

let arr = [1, 2, 4, 9, 6];

let result = arr.map(square);

console.log("old array", arr);
console.log("new Array ", result);
