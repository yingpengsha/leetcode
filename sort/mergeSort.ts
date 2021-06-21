export default function mergeSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left >= right) return arr
  const mid = (left + right) >> 1
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  let temp: number[] = []
  let p1 = left, p2 = mid + 1
  while (p1 < mid + 1 && p2 < right + 1) {
    if (arr[p1] <= arr[p2]) {
      temp.push(arr[p1++])
    } else {
      temp.push(arr[p2++])
    }
  }
  temp = temp.concat(arr.slice(p1, mid + 1), arr.slice(p2, right + 1))
  arr.splice(left, right - left + 1, ...temp)
  return arr
}