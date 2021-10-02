/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints (ops: string[]): number {
  const stack: number[] = []
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case 'C':
        stack.pop()
        break
      case 'D':
        stack.push(stack[stack.length - 1] * 2)
        break
      case '+':
        stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        break
      default:
        stack.push(+ops[i])
        break
    }
  }
  let sum = 0
  stack.forEach(val => sum += val)
  return sum
};
// @lc code=end
