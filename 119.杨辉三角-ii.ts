/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow (rowIndex: number): number[] {
  if (++rowIndex <= 2) return new Array(rowIndex).fill(1)
  let lastRow = []
  let currentRow = [1, 1]
  for (let i = 3; i <= rowIndex; i++) {
    lastRow = currentRow
    currentRow = [1]
    for (let j = 1; j < i - 1; j++) {
      currentRow.push(lastRow[j] + lastRow[j - 1])
    }
    currentRow.push(1)
  }
  return currentRow
};
// @lc code=end
