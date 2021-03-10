/*
 * @lc app=leetcode.cn id=224 lang=typescript
 *
 * [224] 基本计算器
 */

// @lc code=start
const RE = /^([0-9]+|[\(|\)|\+|\-])(.*)/
function calculate(s: string): number {
  const signs = [1]
  let currentSign = 1
  let sum = 0
  s = s.replace(/\s+/g, '')
  while (s.length) {
    const [_, head, tail] = s.match(RE)

    if (head === '+') {
      currentSign = 1
    } else if (head === '-') {
      currentSign = -1
    } else if (head === '(') {
      signs.unshift(currentSign * signs[0])
      currentSign = 1
    } else  if (head === ')') {
      signs.shift()
      currentSign = 1
    } else {
      sum += currentSign * signs[0] * +head
    }
    s = tail
  }
  return sum
};
// @lc code=end

