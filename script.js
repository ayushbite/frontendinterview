//map and foreach
// loop through items of the array

const arr = [1, 2, 3, 4, 5];
const newarr = arr.map((item) => {
  return item + 100;
});
console.log(newarr);

//in foreach we cant retuen the array we canonly loop thorugh array
// const foreachres =
arr.forEach((item, i) => {
  arr[i] = arr[i] - 1;
});
console.log(arr);

// null and undefines
