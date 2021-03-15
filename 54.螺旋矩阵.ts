/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let topSide = matrix[0].length
  let rightSide = matrix.length - 1
  let direction = 1
  const index = [0, -1]
  while (true) {
    for (let i = 0; i < topSide; i++) {
      index[1] = index[1] + direction * 1
      result.push(matrix[index[0]][index[1]])
    }
    topSide--
    if (topSide < 0) break
    for (let i = 0; i < rightSide; i++) {
      index[0] = index[0] + direction * 1
      result.push(matrix[index[0]][index[1]])
    }
    rightSide--
    if (rightSide < 0) break
    direction = -direction
  }
  return result
};
// @lc code=end

