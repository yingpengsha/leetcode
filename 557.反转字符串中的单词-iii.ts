/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function getHeadAndTail (s: string) {
  let end = 1
  if (s[0] === ' ') {
    while (s[end] && s[end] === ' ') end++
    return {
      head: s.substring(0, end),
      tail: s.substring(end)
    }
  } else {
    let head = s[0]
    while (s[end] && s[end] !== ' ') {
      head = s[end] + head
      end++
    }
    return {
      head: head,
      tail: s.substring(end)
    }
  }
}
function reverseWords (s: string): string {
  let result = ''
  while (s.length) {
    const { head, tail } = getHeadAndTail(s)
    result += head
    s = tail
  }
  return result
};
// @lc code=end
