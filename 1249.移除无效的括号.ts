/*
 * @lc app=leetcode.cn id=1249 lang=typescript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
  let resultOne = ''
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== ')') {
      if (char === '(') {
        count += 1
      }
    } else {
      if (!count) continue
      count -= 1
    }
    resultOne += char
  }
  let resultTwo = ''
  count = 0
  for (let i = resultOne.length - 1; i >= 0; i--) {
    const char = resultOne[i];
    if (char !== '(') {
      if (char === ')') {
        count += 1
      }
    } else {
      if (!count) continue
      count -= 1
    }
    resultTwo = char + resultTwo
  }
  return resultTwo
};
// @lc code=end

