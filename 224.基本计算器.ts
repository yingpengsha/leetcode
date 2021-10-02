/*
 * @lc app=leetcode.cn id=224 lang=typescript
 *
 * [224] 基本计算器
 */

// @lc code=start
const SymbolList = new Set(['(', ')', '+', '-'])
function getHeadAndTail (s: string) {
  let start = 0
  while (s[start] !== ' ') start++
  if (SymbolList.has[start]) {
    return {
      head: s[start],
      tail: s.substring(start + 1)
    }
  } else {
    let end = start + 1
    while (SymbolList.has(s[end])) end++
    return {
      head: s.substring(start, end),
      tail: s.substring(end)
    }
  }
}
function calculate (s: string): number {
  const signs = [1]
  let currentSign = 1
  let sum = 0
  while (s.length) {
    const { head, tail } = getHeadAndTail(s)

    if (head === '+') {
      currentSign = 1
    } else if (head === '-') {
      currentSign = -1
    } else if (head === '(') {
      signs.unshift(currentSign * signs[0])
      currentSign = 1
    } else if (head === ')') {
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
