/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence (text1: string, text2: string): number {
  if (text1 === text2) return text1.length
  const dp: number[][] = new Array(text1.length + 1)
  let max = 0
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(text2.length + 1)
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0
      } else if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > max) {
          max = dp[i][j]
        }
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return max
};
// @lc code=end
