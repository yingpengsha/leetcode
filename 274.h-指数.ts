/*
 * @lc app=leetcode.cn id=274 lang=typescript
 *
 * [274] H 指数
 */

// @lc code=start
function hIndex (citations: number[]): number {
  const ordered = citations.sort((a, b) => b - a)
  let max = 0
  for (let i = 0; i < citations.length && citations[i] !== 0; i++) {
    if (ordered[i] <= i + 1) {
      max = Math.max(max, ordered[i])
    } else {
      max = Math.max(max, i + 1)
    }
  }
  return max
};
// @lc code=end
