function sum(arr, n) {
  // Only change code below this line

  if (n < 1) {
    return 0
  } else {
      return sum(arr, n - 1) + arr[n - 1];
  }

    sum(arr , n  )
  // Only change code above this line
}