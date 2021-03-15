/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  let b5 = 0
  let b10 = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        b5++
        break;
      case 10:
        if (!b5) return false
        b5--
        b10++
        break;
      case 20:
        if (!b5) return false
        if (b10) {
          b10--
          b5--
          break;
        }
        if (b5 > 2) {
          b5 -= 3
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return true
};
// @lc code=end

