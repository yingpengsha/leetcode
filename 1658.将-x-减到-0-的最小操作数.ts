/*
 * @lc app=leetcode.cn id=1658 lang=typescript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
function binarySearch (nums: number[], target: number, rightMax = nums.length - 1): number {
  let left = 0
  let right = rightMax > nums.length - 1 ? nums.length - 1 : rightMax
  let mid = target
  while (left < right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return nums[left] === target ? left + 1 : -1
}
function minOperations (nums: number[], x: number): number {
  const prefixSum = [nums[0]]
  const suffixSum = [nums[nums.length - 1]]
  for (let i = 1; i < nums.length; i++) {
    if (prefixSum[prefixSum.length - 1] < x) {
      prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i])
    }
    if (suffixSum[suffixSum.length - 1] < x) {
      suffixSum.push(suffixSum[suffixSum.length - 1] + nums[nums.length - 1 - i])
    }
  }
  let count = -1
  if ((x < prefixSum[0] && x < suffixSum[0]) || x > prefixSum[prefixSum.length - 1]) {
    return count
  }
  if (prefixSum[prefixSum.length - 1] > x) prefixSum.pop()
  if (suffixSum[suffixSum.length - 1] > x) suffixSum.pop()

  count = binarySearch(prefixSum, x)
  const temp = binarySearch(suffixSum, x)
  if (count === -1 || (temp !== -1 && temp < count)) {
    count = temp
  }

  for (let i = 0; i < prefixSum.length, count === -1 || i < count - 1; i++) {
    const rightIndex = binarySearch(suffixSum, x - prefixSum[i], count === -1 ? nums.length - i - 2 : count - i - 2)
    if (rightIndex !== -1) {
      count = i + rightIndex + 1
    }
  }
  return count
};
// @lc code=end
