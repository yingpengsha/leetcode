function getLeastNumbers(arr: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        arr[j] ^= arr[i]
        arr[i] ^= arr[j]
        arr[j] ^= arr[i]
      }
    }
  }
  return arr.slice(0, k)
}