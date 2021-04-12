/*
 * @lc app=leetcode.cn id=506 lang=typescript
 *
 * [506] 相对名次
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
  const indexArr = score.map((_, i) => i)
  const result: string[] = Array(score.length)
  indexArr.sort((a, b) => score[b] - score[a])
  for (let i = 0; i < indexArr.length; i++) {
    const index = indexArr[i];
    switch (i) {
      case 0:
        result[index] = "Gold Medal"
        break;
      case 1:
        result[index] = "Silver Medal"
        break;
      case 2:
        result[index] = "Bronze Medal"
        break;
      default:
        result[index] = i + 1 + ''
        break;
    }
  }
  return result
};
// @lc code=end

