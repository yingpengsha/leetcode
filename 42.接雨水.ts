/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap (height: number[]): number {
  let count = 0
  const dp: number[] = new Array(height.length)
  dp[0] = 0
  dp[dp.length - 1] = 0
  for (let i = 1; i < height.length - 1; i++) {
    dp[i] = Math.max(dp[i - 1], height[i - 1])
  }
  for (let i = height.length - 2; i > 0; i--) {
    const rightMax = Math.max(dp[i + 1], height[i + 1])
    const diff = Math.min(dp[i], rightMax) - height[i]
    if (diff > 0) {
      count += diff
    }
    dp[i] = rightMax
  }
  return count
};
// @lc code=end
