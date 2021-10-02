/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
let str: string
function parse (): { head: string, tail: string } {
  const firstChar = str[0]
  let end = 1
  if (!isNaN(+firstChar)) {
    while (str[end] && str[end] !== '[') {
      end += 1
    }
    const count = +str.substring(0, end)
    const chunk = decodeString(str.substring(end + 1))
    return {
      head: new Array<string>(count).fill(chunk).join(''),
      tail: str.substring(1)
    }
  } else {
    while (str[end] && isNaN(+str[end]) && str[end] !== ']') {
      end += 1
    }
    return {
      head: str.substring(0, end),
      tail: str.substring(end)
    }
  }
}
function decodeString (s: string): string {
  str = s
  let result = ''
  while (str && str[0] !== ']') {
    const { head, tail } = parse()
    result += head
    str = tail
  }
  return result
};
// @lc code=end
