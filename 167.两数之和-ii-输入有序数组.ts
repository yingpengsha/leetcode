/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  const sumMap = new Map()
  for (let i = 0; i < numbers.length; i++) {
    if (sumMap.has(target - numbers[i])) {
      return [sumMap.get(target - numbers[i]), i + 1]
    } else {
      sumMap.set(numbers[i], i + 1)
    }
  }
};
// @lc code=end

