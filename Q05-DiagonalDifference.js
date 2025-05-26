function diagonalDifference(arr) {
    // Write your code here
    let primary = 0;
    let secondary = 0;
    for (let i = 0; i < arr.length; i++) {
          primary += arr[i][i];  // left-to-right
          secondary += arr[i][arr.length - 1 - i];  // right-to-left
    }
      return Math.abs(primary - secondary);
  }
  