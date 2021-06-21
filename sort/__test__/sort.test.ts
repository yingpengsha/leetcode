import mergeSort from '../mergeSort'
import quickSort from '../quickSort'
import radixSort from '../radixSort'
import { genUnorderedNumbers, genUnorderedNonNegativeIntegerNumbers } from './genUnorderedNumbers'

test('should merge sort right', () => {
  for (let i = 0; i < 10; i++) {
    const numbers = genUnorderedNumbers()
    expect(mergeSort(numbers)).toEqual(numbers.sort((a, b) => a - b))
  }
})

test('should quick sort right', () => {
  for (let i = 0; i < 10; i++) {
    const numbers = genUnorderedNumbers()
    expect(quickSort(numbers)).toEqual(numbers.sort((a, b) => a - b))
  }
})

test('should radix sort right', () => {
  for (let i = 0; i < 10; i++) {
    const numbers = genUnorderedNonNegativeIntegerNumbers()
    expect(radixSort(numbers)).toEqual(numbers.sort((a, b) => a - b))
  }
})
