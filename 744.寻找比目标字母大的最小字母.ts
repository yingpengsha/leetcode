/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
function nextGreatestLetter (letters: string[], target: string): string {
  let left = 0
  let right = letters.length - 1
  const targetValue = target
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    const lastValue = mid !== 0 ? letters[mid - 1] : -Infinity
    const midValue = letters[mid]
    if (midValue > targetValue && lastValue <= targetValue) {
      return letters[mid]
    }
    if (midValue > targetValue) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  if (letters[left] > targetValue) {
    return letters[left]
  } else {
    return letters[0]
  }
};
// @lc code=end
