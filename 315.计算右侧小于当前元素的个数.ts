/*
 * @lc app=leetcode.cn id=315 lang=typescript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
function countSmaller (nums: number[]): number[] {
  if (!nums.length) return []
  const counts = Array(nums.length).fill(0)
  const map = nums.map((value, index) => ({ value, index }))
  function mergeSort (left = 0, right = map.length - 1) {
    if (left >= right) return
    const mid = (right + left) >> 1
    mergeSort(left, mid)
    mergeSort(mid + 1, right)

    let l = left
    let r = mid + 1
    const temp: {value: number, index: number}[] = []
    while (l <= mid || r <= right) {
      if (r > right || (map[l].value <= map[r].value && l <= mid)) {
        counts[map[l].index] += temp.length - l + left
        temp.push(map[l])
        l += 1
      } else {
        temp.push(map[r])
        r += 1
      }
    }
    for (let i = 0; i < temp.length; i++) {
      map[left + i] = temp[i]
    }
  }
  mergeSort()
  return counts
};
// @lc code=end
