/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
 */

// @lc code=start
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function oddEvenList (head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) return head
  let odd = head
  let even = head.next
  const evenHead = even
  while (even && even.next) {
    odd = odd.next = even.next
    even = even.next = odd.next
    odd.next = evenHead
  }
  return head
};
// @lc code=end
