import random from 'random'

export function genUnorderedNumbers (): number[] {
  return Array(random.int(0, 50)).fill(1).map(() => random.float(-100, 100))
}

export function genUnorderedNonNegativeIntegerNumbers (): number[] {
  return Array(random.int(0, 50)).fill(1).map(() => random.int(0, 1000))
}
