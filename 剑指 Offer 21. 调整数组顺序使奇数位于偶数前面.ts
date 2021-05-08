function exchange(nums: number[]): number[] {
  const result: number[] = []
  for (const value of nums) {
    if (value % 2 === 0) {
      result.push(value)
    } else {
      result.unshift(value)
    }
  }
  return result
};