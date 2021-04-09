/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
class KthLargest {
    private k: number
    private nums: number[] = []
    constructor(k: number, nums: number[]) {
        this.k = k
        this.nums = nums.sort((a, b) => b - a)
    }
  
    add(val: number): number {
        this.internalAdd(val)
        return this.nums[this.k - 1]
    }
  
    internalAdd(val: number) {
        let left = 0
        let right = this.nums.length - 1
        while (left <= right) {
            const center = (right + left) >> 1
            if (this.nums[center] === val) {
                return this.nums.splice(center, 0, val)
            }
            if (this.nums[center] < val) {
                right = center - 1
            } else {
                left = center + 1
            }
        }
        if (this.nums[left] > val) {
            return this.nums.splice(left + 1, 0, val)
        } else {
            return this.nums.splice(left, 0, val)
        }
    }
  }

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

