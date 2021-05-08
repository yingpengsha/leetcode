// 双路快排
function exchange(nums: number[]): number[] {
  if (nums.length > 1){
    let left = 0
    let right = nums.length - 1
    do {
      while (left < nums.length && nums[left] % 2 === 1) left++
      while (right > 0 && nums[right] % 2 === 0) right --
      if (left < right) {
        [nums[right--], nums[left++]] = [nums[left], nums[right]]
      }
    } while (left < right);
  }
  return nums
};