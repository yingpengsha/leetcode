/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (!s || s.length === 1) return s
  const dp: number[][] = []
  let maxStr = ''
  for (let i = 0; i < s.length; i++) {
    dp[i] = []
    const endChar = s[i];
    for (let j = i; j >= 0; j--) {
      const startChar = s[j]
      if (i === j) {
        dp[i][j] = 1
      } else if (startChar === endChar) {
        if (i - j === 1) {
          dp[i][j] = 2
        } else if (dp[i - 1][j + 1]) {
          dp[i][j] = dp[i - 1][j + 1] + 2
        }
      }else {
        dp[i][j] = 0
      }
      if (dp[i][j] > maxStr.length) {
        maxStr = s.substring(j, i + 1)
      }
    }
  }
  return maxStr
};
// @lc code=end

