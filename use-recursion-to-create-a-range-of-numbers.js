function rangeOfNumbers(startNum, endNum) {


  if (startNum == endNum) {
    return [endNum]
  } else if (startNum < endNum) {
    const arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum)
    return arr; 
  }

};

console.log(rangeOfNumbers(3, 5))