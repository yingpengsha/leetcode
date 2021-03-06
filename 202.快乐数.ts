/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  const numberCollection = new Set([n])
  while (n !== 1) {
    n = digitsSum(n)
    if (numberCollection.has(n)) {
      return false
    }
    numberCollection.add(n)
  }
  return true
};

function digitsSum(value: number): number {
  let sum = 0
  while (value > 0) {
    const digit = value % 10
    sum += Math.pow(digit, 2)
    value = (value - digit) / 10
  }
  return sum
}
// @lc code=end

