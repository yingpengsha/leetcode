/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  let rightSum = 0
  nums.forEach(num => rightSum += num)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1]) {
      leftSum += nums[i - 1]
    }
    rightSum -= nums[i]
    if (rightSum === leftSum) {
      return i
    }
  }
  return -1
};
// @lc code=end

