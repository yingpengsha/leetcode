function reversePairs (nums: number[]): number {
  let count = 0
  let temp: number[] = []
  function mergeSort (arr: number[], left = 0, right = arr.length - 1) {
    if (left >= right) return
    const mid = (left + right) >> 1
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    temp = []
    let p1 = left; let p2 = mid + 1

    while (p1 <= mid || p2 <= right) {
      if ((arr[p1] <= arr[p2] && p1 <= mid) || p2 > right) {
        temp.push(arr[p1++])
      } else {
        count += mid - p1 + 1
        temp.push(arr[p2++])
      }
    }

    for (let i = left; i < right + 1; i++) {
      arr[i] = temp[i - left]
    }
  }
  mergeSort(nums)
  return count
};
