/*
 * @lc app=leetcode.cn id=969 lang=typescript
 *
 * [969] 煎饼排序
 */

// @lc code=start
function pancakeSort (arr: number[]): number[] {
  const result = []
  let currentIndex = arr.length - 1
  while (currentIndex >= 0) {
    let maxIndex = currentIndex
    for (let i = 0; i < currentIndex; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i
      }
    }
    if (maxIndex !== currentIndex) {
      arr.splice(0, maxIndex + 1, ...arr.slice(0, maxIndex + 1).reverse())
      arr.splice(0, currentIndex + 1, ...arr.slice(0, currentIndex + 1).reverse())
      result.push(maxIndex + 1, currentIndex + 1)
    }
    currentIndex--
  }
  return result
};
// @lc code=end
