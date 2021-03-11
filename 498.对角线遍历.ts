/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return []
  let result = []
  const xMax = matrix[0].length - 1
  const yMax = matrix.length - 1
  for (let i = 0; i < matrix[0].length + matrix.length - 1; i++) {
    if (i % 2 !== 0) {
      let startX = i <= xMax ? i : xMax
      let startY = startX - i < 0 ? i - startX : 0
      while (startX >= 0 && startY <= yMax) {
        result.push(matrix[startY][startX])
        startX--
        startY++
      }
    } else {
      let startY = i <= yMax ? i : yMax
      let startX = startY - i < 0 ? i - startY : 0
      while (startX <= xMax && startY >= 0) {
        result.push(matrix[startY][startX])
        startX++
        startY--
      }
    }
  }
  return result
};
// @lc code=end

