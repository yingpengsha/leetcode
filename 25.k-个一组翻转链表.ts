/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function isCanReverse (head: ListNode, count: number): boolean {
  let actualCount = 0
  while (head && actualCount < count) {
    actualCount++
    head = head.next
  }
  return actualCount >= count
}

function reverseN (head: ListNode, count: number): { head: ListNode, tail: ListNode | null } {
  if (count === 1) return { head, tail: head }
  const last = reverseN(head.next, --count).head
  const lastNext = head.next.next
  head.next.next = head
  head.next = lastNext
  return {
    head: last,
    tail: head
  }
}

function reverseKGroup (head: ListNode, count: number): ListNode {
  if (!head || !head.next || !count || !isCanReverse(head, count)) return head
  const { head: newHead, tail: newTail } = reverseN(head, count)
  newTail.next = reverseKGroup(newTail.next, count)
  return newHead
}
// @lc code=end
