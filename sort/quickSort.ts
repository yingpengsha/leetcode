export default function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
  if (left >= right) return arr
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
  return arr
}