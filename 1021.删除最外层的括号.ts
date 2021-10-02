/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
function removeOuterParentheses (S: string): string {
  const stack: string[] = []
  let result = ''
  for (let i = 0; i < S.length; i++) {
    const char = S[i]
    if (char === '(') {
      stack.push(char)
      if (stack.length !== 1) {
        result += char
      }
    } else {
      stack.pop()
      if (stack.length) {
        result += char
      }
    }
  }

  return result
};
// @lc code=end
