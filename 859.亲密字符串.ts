/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  const aCharMap = {}
  const bCharMap = {}
  const diffChars: string[][] = []
  for (let i = 0; i < a.length; i++) {
    if (aCharMap[a[i]]) {
      aCharMap[a[i]]++
    } else {
      aCharMap[a[i]] = 1
    }
    if (bCharMap[b[i]]) {
      bCharMap[b[i]]++
    } else {
      bCharMap[b[i]] = 1
    }
    if (a[i] !== b[i]) {
      diffChars.push([a[i], b[i]])
    }
    if (diffChars.length > 2) return false
  }
  if (diffChars.length === 2) {
    return diffChars[0][0] === diffChars[1][1] && diffChars[0][1] === diffChars[1][0]
  } else if (diffChars.length === 1) {
    return false
  } else {
    return Object.keys(aCharMap).some(key => aCharMap[key] >= 2 && bCharMap[key] >= 2)
  }
};
// @lc code=end

