/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const numberMap = new Map<number, number>()
  const keys: number[] = []
  for (const value of nums) {
    numberMap.set(value, (numberMap.get(value) || 0) + 1)
  }
  for (const [number, count] of numberMap) {
    keys.push(number)
  }
  return keys.sort((a, b) => numberMap.get(b) - numberMap.get(a)).slice(0, k)
};
// @lc code=end

