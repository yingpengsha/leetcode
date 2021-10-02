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

function sortList (head: ListNode | null): ListNode | null {
  if (!head) return null
  let chunks: ListNode[] = []

  while (head) {
    const params: ListNode[] = []
    for (let i = 0; i < 2 && head; i++) {
      params.push(head)
      head = head.next
      params[params.length - 1].next = null
    }
    chunks.push(merge(params[0], params[1]))
  }

  while (chunks.length > 1) {
    const next = []
    while (chunks.length) {
      next.push(merge(chunks.pop(), chunks.pop()))
    }
    chunks = next
  }

  return chunks[0]
}

function merge (one: ListNode | null, two: ListNode | null): ListNode | null {
  if (!one || !two) return one || two

  const vHead = new ListNode(null)
  let current = vHead

  while (one && two) {
    if (one.val <= two.val) {
      current = current.next = one
      one = one.next
    } else {
      current = current.next = two
      two = two.next
    }
  }

  if (one || two) current.next = one || two

  return vHead.next
}
