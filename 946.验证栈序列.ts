/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []
  while (pushed.length || popped.length) {
    if (stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    } else if (stack.includes(popped[0])) {
      return false
    } else if (pushed.length) {
      stack.push(pushed.shift())
    } else if (popped.length) {
      return false
    }
  }
  return true
};
// @lc code=end

