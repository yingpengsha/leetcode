/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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
function mergeList (head: ListNode | null, count: number): ListNode {
  if (!head || !count || count === 1) return head
  const n = count >> 1
  let left = head
  for (let i = 1; i < n; i++) head = head.next
  let right = head.next
  head.next = null
  left = mergeList(left, n)
  right = mergeList(right, count - n)

  const newHead = new ListNode()
  let currentHead = newHead
  while (left && right) {
    if (left.val <= right.val) {
      currentHead = currentHead.next = left
      left = left.next
      currentHead.next = null
    } else {
      currentHead = currentHead.next = right
      right = right.next
      currentHead.next = null
    }
  }
  if (left || right) {
    currentHead.next = (left || right)
  }
  return newHead.next
}
function sortList (head: ListNode | null): ListNode | null {
  let count = 0
  let fakeHead = head
  while (fakeHead) {
    count += 1
    fakeHead = fakeHead.next
  }
  return mergeList(head, count)
};
// @lc code=end
