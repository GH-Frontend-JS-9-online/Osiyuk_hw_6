
// Create function which will return function with callback in arguments
function callbackFunc(callback) {
   if(callback && typeof callback ==='function');
   callback();
}

function consoleText() {
  console.log('Some text to be sure that callback is working');
}


//* Create function with 2 string params. It must check if letters in the first
//* correspond to the number of matches in second and return %.
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
  console.log(answer);
}
