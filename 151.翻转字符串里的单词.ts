/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
// function reverseWords(s: string): string {
//   return s.split(' ').filter(Boolean).reverse().join(' ')
// };

function getHeadAndTail (s: string) {
  let start = 0
  while (s[start] === ' ') start++
  let end = start + 1
  while (s[end] && s[end] !== ' ') end++
  return {
    head: s.substring(start, end),
    tail: s.substring(end)
  }
}
function reverseWords (s: string): string {
  let result = ''
  while (s.length) {
    const { head, tail } = getHeadAndTail(s)
    if (head) {
      if (result) {
        result = head + ' ' + result
      } else {
        result = head
      }
    }
    s = tail
  }
  return result
};
// @lc code=end
