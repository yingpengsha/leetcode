/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// 三路快排
function sortColors (nums: number[]): void {
  threeWaysQS(nums, 0, nums.length - 1, 1)
};

function threeWaysQS (arr: number[], left: number, right: number, mid: number) {
  function swap (a: number, b: number) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  if (left >= right) return
  let less = left - 1
  let more = right + 1
  let current = less
  while (current < more) {
    if (arr[current] === mid) {
      current += 1
    } else if (arr[current] < mid) {
      swap(current++, ++less)
    } else {
      swap(current, --more)
    }
  }
}
// @lc code=end
