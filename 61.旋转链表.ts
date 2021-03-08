/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function getListLength(head: ListNode): number {
  let count = 1
  while (head.next) {
    count++
    head = head.next
  }
  return count
}

function getNewHead(head: ListNode, index: number) {
  while (index > 1) {
    index--
    head = head.next
  }
  const newHead = head.next
  head.next = null
  return newHead
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || !k) return head
  const length = getListLength(head)

  k %= length
  if (!k) return head

  const newHead = getNewHead(head, length - k)
  
  let oldTail = newHead
  while (oldTail.next) {
    oldTail = oldTail.next
  }
  oldTail.next = head

  return newHead
};
// @lc code=end

