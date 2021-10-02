/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle (head: ListNode | null): ListNode | null {
  const nodeCollection = new WeakSet()
  while (head) {
    if (nodeCollection.has(head)) {
      return head
    } else {
      nodeCollection.add(head)
      head = head.next
    }
  }
  return null
};
// @lc code=end
