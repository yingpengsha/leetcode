/*
 * @lc app=leetcode.cn id=781 lang=typescript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
function numRabbits(answers: number[]): number {
  const countMap = new Map<number, number>()
  let sum = 0
  for (const value of answers) {
    if (!value) {
      sum += 1
    } else {
      countMap.set(value, (countMap.get(value) || 0) + 1)
    }
  }
  for (const [key, value] of countMap) {
    sum += (key + 1) * Math.ceil(value / (key + 1))
  }
  return sum
};
// @lc code=end

