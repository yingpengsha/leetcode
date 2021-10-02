/*
 * @lc app=leetcode.cn id=658 lang=typescript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
function findClosestElements (arr: number[], count: number, value: number): number[] {
  let left = 0
  let right = arr.length - 1
  let index: number
  while (left + 1 < right) {
    const mid = left + ((right - left) >> 1)
    if (arr[mid] === value) {
      index = mid
      break
    }
    if (arr[mid] > value) {
      right = mid
    } else {
      left = mid
    }
  }
  if (index === undefined) {
    const diff = value - (left === -1 ? -Infinity : arr[left]) - (right === arr.length ? Infinity : arr[right]) + value
    if (diff <= 0) {
      index = left
    } else {
      index = right
    }
  }
  left = index - 1
  right = index + 1
  const result = [arr[index]]
  while (result.length !== count && (left > -1 || right < arr.length)) {
    const diff = value - (left === -1 ? -Infinity : arr[left]) - (right === arr.length ? Infinity : arr[right]) + value
    if (diff <= 0) {
      result.unshift(arr[left])
      left--
    } else {
      result.push(arr[right])
      right++
    }
  }
  return result
};
// @lc code=end
