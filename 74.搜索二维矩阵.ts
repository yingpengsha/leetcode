/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function getMatrixValueFn(matrix: number[][]) {
  return function getMatrixValue(index: number) {
    const rowIndex = Math.floor((index - 1) / matrix[0].length)
    const columnIndex = (index - 1) % (matrix[0].length)
    return matrix[rowIndex][columnIndex]
  }
}
function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 1
  let right = matrix.length * matrix[0].length
  const getMatrixValue = getMatrixValueFn(matrix)
  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    const midValue = getMatrixValue(mid)
    if (midValue === target) {
      return true
    }
    if (midValue > target) {
      right = mid - 1
    } else {
      left = mid +1
    }
  }
  return false
};
// @lc code=end

