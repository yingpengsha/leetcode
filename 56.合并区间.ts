/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge (intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  let index = -1
  for (const interval of intervals) {
    if (index == -1 || interval[0] > ans[index][1]) {
      ans.push(interval)
      index++
    } else {
      ans[index][1] = Math.max(ans[index][1], interval[1])
    }
  }
  return ans
};
// @lc code=end
