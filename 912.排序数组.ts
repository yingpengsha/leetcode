/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1)
  return nums
};

function quickSort(arr: number[], left: number, right: number) {
  if (left >= right) return
  let x = left
  let y = right
  const base = arr[x]
  while (x < y) {
    while (x < y && base <= arr[y]) y--
    if (x < y) arr[x++] = arr[y]
    while (x < y && base > arr[x]) x++
    if (x < y) arr[y--] = arr[x]
  }
  arr[x] = base
  quickSort(arr, left, x - 1)
  quickSort(arr, x + 1, right)
  return
}
// @lc code=end

