/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function deleteDuplicates (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let left = new ListNode(null); let center = head; let right = head.next
  const newHead = left
  let current = newHead
  while (center) {
    current.next = null
    if ((left.val !== center.val) && (center.val !== (right ? right.val : null))) {
      current = current.next = center
    }
    left = center
    center = right
    right = right ? right.next : null
  }
  return newHead.next
};
// @lc code=end
