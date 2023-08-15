//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(array) {
    this.matrix = array.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, i) =>
      this.rows
        .map((r) => r[i])
    );
  }
}
