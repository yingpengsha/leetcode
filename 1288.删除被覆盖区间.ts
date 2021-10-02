/*
 * @lc app=leetcode.cn id=1288 lang=typescript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
function removeCoveredIntervals (intervals: number[][]): number {
  intervals = intervals.sort((a, b) => (a[0] - b[0]) || (b[1] - a[1]))
  let count = 0
  for (let i = 0; i < intervals.length; i++) {
    const element = intervals[i]
    count += 1
    let next = i + 1
    while (i + 1 < intervals.length && element[0] <= intervals[next][0] && element[1] >= intervals[next][1]) {
      i += 1
      next += 1
    }
  }
  return count
};
// @lc code=end
