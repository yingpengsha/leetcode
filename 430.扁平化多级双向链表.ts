/*
 * @lc app=leetcode.cn id=430 lang=typescript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
// class ListNode {
//     val: number
//     prev: ListNode | null
//     next: ListNode | null
//     child: ListNode | null
//     constructor(val?: number, prev? : ListNode, next? : ListNode, child? : ListNode) {
//         this.val = (val===undefined ? 0 : val);
//         this.prev = (prev===undefined ? null : prev);
//         this.next = (next===undefined ? null : next);
//         this.child = (child===undefined ? null : child);
//     }
// }

function flatten(head: Node | null): Node | null {
  let current = head
  const tails = []
  while (current) {
    if (current.child) {
      current.next && tails.push(current.next)
      current.next = current.child
      current.child.prev =current
      current.child = null
    }
    if (!current.next && tails.length) {
      current.next = tails.pop()
      current.next.prev = current
    }
    current = current.next
  }
  return head
};
// @lc code=end

