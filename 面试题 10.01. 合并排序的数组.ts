/**
 Do not return anything, modify A in-place instead.
 */
function merge (A: number[], m: number, B: number[], n: number): void {
  let AIndex = 0
  while (B.length && AIndex < m) {
    if (B[0] <= A[AIndex]) {
      A.pop()
      m++
      A.splice(AIndex, 0, B.shift())
    } else {
      AIndex++
    }
  }
  if (B.length) {
    A.splice(AIndex, B.length, ...B)
  }
};
