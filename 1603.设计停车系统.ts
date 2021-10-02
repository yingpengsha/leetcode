/*
 * @lc app=leetcode.cn id=1603 lang=typescript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
class ParkingSystem {
    private big: number
    private medium: number
    private small: number
    constructor (big: number, medium: number, small: number) {
      this.big = big
      this.medium = medium
      this.small = small
    }

    addCar (carType: number): boolean {
      return --this[{
        1: 'big',
        2: 'medium',
        3: 'small'
      }[carType]] >= 0
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
