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

// type on null is object and type of undefined in undefined
console.log(typeof null);
console.log(typeof undefined);

// other things is that
// it be true cause it doesn't check its type
console.log(null == undefined);

// it be true cause it  check its type

console.log(null === undefined);

//without event deligation we will have to add event to all the products it will take lot of memory in browser so if we use event deligation we have add event to parent elent and we can select child elements with it

document.querySelector('#products').addEventListener('click', (event) => {
  console.log(event);
  if (event.target.tagName === 'LI') {
    // window.location.href += "#"+event.target.id
    console.log(event.target.textContent);
  }
});

//flattening the array

const noflattenedarray = [
  [1,2],
  [3,4,5],
  [6,7,[1,2],8,9]

]
//op [1,2,3,4,5,6,7,8,9]
console.log(noflattenedarray)

console.log([].concat(...noflattenedarray))

console.log(noflattenedarray.flat(2))

// customflatfunction
function customflat(arr,depth = 1){
  
}

