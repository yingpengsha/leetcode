/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob (nums: number[]): number {
  if (!nums.length) return 0
  const dp: number[] = []
  let max = dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (i < 2) {
      dp[i] = nums[i]
    } else {
      dp[i] = Math.max(dp[i - 2], dp[i - 3] || 0) + nums[i]
    }
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};
// @lc code=end
