/*
 * @lc app=leetcode.cn id=844 lang=typescript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
function backspaceCompare (S: string, T: string): boolean {
  const SStack: string[] = []
  const TStack: string[] = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      SStack.pop()
    } else {
      SStack.push(S[i])
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      TStack.pop()
    } else {
      TStack.push(T[i])
    }
  }
  return SStack.join('') === TStack.join('')
};
// @lc code=end
