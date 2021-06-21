// TODO: 负数，小数排序
export default function radixSort(arr: number[]): number[] {
  const counts = []
  const temp = []
  let lastCount = 0

  for (const value of arr) {
    counts[value & 0xffff] = (counts[value & 0xffff] || 0) + 1
  }
  counts.forEach((_, idx) => lastCount = counts[idx] += lastCount)
  for (let i = arr.length - 1; i >= 0; --i) {
    temp[--counts[arr[i] & 0xffff]] = arr[i]
  }

  counts.length = 0
  lastCount = 0

  for (const value of temp) {
    counts[(value & 0xffff0000) >> 16] = (counts[(value & 0xffff0000) >> 16] || 0) + 1
  }
  counts.forEach((_, idx) => lastCount = counts[idx] += lastCount)
  for (let i = arr.length - 1; i >= 0; --i) {
    arr[--counts[(temp[i] & 0xffff0000) >> 16]] = temp[i]
  }
  return arr
}