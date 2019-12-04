
//Find in array: sum, min and max, replace min and max - create custom functions
let array = [10,40,50,-20,40,-70,453,56];
console.log('Task 1');
console.log("[10,40,50,-20,40,453,-70,56]");

let min = Math.min.apply(null, array);
let max = Math.max.apply(null, array);

console.log('min arr: ' + min);
console.log('max arr: ' + max);

function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log('array sum: ' +sum);
};
arraySum(array);

// Create function which will return function with callback in arguments
console.log('Task 2');
function callbackFunc(callback) {
   if(callback && typeof callback ==='function');
   callback();
}

function consoleText() {
  console.log('Some text to be sure that callback is working');
}
callbackFunc(consoleText);


//Create a function that will replace all number dividing three with ‘foo’,
// dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.
let secondArr = [21,6,7,54,34,3,4]
console.log('Task 3');
console.log("["+ secondArr + "]");
function remainderDivision(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 7 === 0) {
            arr[i] = "foobar"
        } else if (arr[i] % 7 === 0) {
            arr[i] = "bar"
        } else if (arr[i] % 3 === 0) {
            arr[i] = "foo"
        }
    }
    return console.log("["+arr+"]");
};

remainderDivision(secondArr);

//* Create function with 2 string params. It must check if letters in the first
//* correspond to the number of matches in second and return %.
console.log('Task 4');
function checkText(a, b) {
  let sameLetter = 0
  for (let i = 0; i < a.length; i++) {
    for (let g = 0; g < b.length; g++) {
      if (a[i] == b[g]) {
        sameLetter++;
      }
    }
  }
  let answer = 2*sameLetter / (a.length + b.length) * 100;
  console.log('examle words: ' + a,b);
  console.log(answer + '%');
}
checkText('monday','friday');
