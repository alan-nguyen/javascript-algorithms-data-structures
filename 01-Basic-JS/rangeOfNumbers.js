// Return range of number using Recursion
function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    return [startNum];
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum);
    return rangeArray;
  }
}

console.log(rangeOfNumbers(4, 10));
