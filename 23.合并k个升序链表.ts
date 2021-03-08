/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isCanReverse(head: ListNode, count:number): boolean {
  let actualCount = 0
  while (head && actualCount < count) {
    actualCount++
    head = head.next
  }
  return actualCount >= count
}

function reverseN(head: ListNode, count: number): { head: ListNode, next: ListNode | null } {
  if (count === 1) return { head, next: head.next }
  const last = reverseN(head.next, --count).head
  const lastNext = head.next.next
  head.next.next = head
  head.next = lastNext
  return { 
    head: last,
    next: head.next
  }
}

function reverseKGroup(head: ListNode, count: number): ListNode {
  if(!head || !head.next || !count || !isCanReverse(head, count)) return head
  const { head: newHead, next: nextChunkHead } = reverseN(head, count)
  reverseKGroup(nextChunkHead, count)
  return newHead
}
// @lc code=end

