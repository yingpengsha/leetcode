/*
 * @lc app=leetcode.cn id=475 lang=typescript
 *
 * [475] 供暖器
 */

// @lc code=start
function findRadius (houses: number[], heaters: number[]): number {
  let max = 0
  let current = 0
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  function binarySearch (place: number) {
    let left = 0
    let right = heaters.length - 1
    let mid: number
    while (left < right - 1) {
      mid = (left + right) >> 1
      if (heaters[mid] === place) {
        return heaters[mid]
      } else if (heaters[mid] < place) {
        left = mid
      } else {
        right = mid
      }
    }

    if (heaters[left] >= place) return heaters[left]
    else if (heaters[right] <= place) return heaters[right]

    if (place - heaters[left] < heaters[right] - place) {
      return heaters[left]
    }
    return heaters[right]
  }
  while (current < houses.length) {
    const nearest = binarySearch(houses[current])
    const distance = nearest - houses[current]
    max = Math.max(max, Math.abs(distance))
    current += 1
    while (current < houses.length && nearest - max <= houses[current] && houses[current] <= nearest + distance) {
      current += 1
    }
  }
  return max
};
// @lc code=end
