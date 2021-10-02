/*
 * @lc app=leetcode.cn id=164 lang=typescript
 *
 * [164] 最大间距
 */

// @lc code=start
function maximumGap (nums: number[]): number {
  if (nums.length < 2) return 0
  const counts = []
  const temp = []
  let lastCount = 0

  for (const value of nums) {
    counts[value & 0xffff] = (counts[value & 0xffff] || 0) + 1
  }
  counts.forEach((_, idx) => lastCount = counts[idx] += lastCount)
  for (let i = nums.length - 1; i >= 0; --i) {
    temp[--counts[nums[i] & 0xffff]] = nums[i]
  }

  counts.length = 0
  lastCount = 0

  for (const value of temp) {
    counts[(value & 0xffff0000) >> 16] = (counts[(value & 0xffff0000) >> 16] || 0) + 1
  }
  counts.forEach((_, idx) => lastCount = counts[idx] += lastCount)
  for (let i = nums.length - 1; i >= 0; --i) {
    nums[--counts[(temp[i] & 0xffff0000) >> 16]] = temp[i]
  }

  let max = 0
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - nums[i - 1])
  }
  return max
};
// @lc code=end
