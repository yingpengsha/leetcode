/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(S: string): string {
  if (!S || S.length === 1) return S
  const result = S.split('')
  for (let i = 1; i < result.length; i++) {
    const char = result[i];
    if (char === result[i - 1]) {
      result.splice(i - 1, 2)
      i -= 2
    }
  }
  return result.join('')
};
// @lc code=end

