let array2d = [
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 3, 3, 3, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1]
];

console.log(array2d);

function submatrix(arr, topLeft, bottomRight) {

  let out = new Array(bottomRight.row - topLeft.row);

  for (var i = topLeft.row; i <= bottomRight.row; i++) {
    out[i - topLeft.row] = new Array(bottomRight.col - topLeft.col);
    for (var j = topLeft.col; j <= bottomRight.col; j++) {
      out[i - topLeft.row][j - topLeft.col] = arr[i][j];
    }
  }

  return out;
}

console.log(submatrix(array2d, {row: 1, col: 1}, {row: 2, col: 3}));
console.log(submatrix(array2d, {row: 1, col: 2}, {row: 3, col: 4}));
console.log(submatrix(array2d, {row: 0, col: 0}, {row: 4, col: 4}));