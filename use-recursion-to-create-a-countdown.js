// Only change code below this line
function countdown(n){

  if (n < 1) {
    return [];
  } else {
    const countdownArr = countdown(n - 1)
    countdownArr.unshift(n); // .push() method will make this function count up ([1, 2, 3, 4, 5])
    return countdownArr;
  }
}
// Only change code above this line