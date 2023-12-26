import { describe, expect, it } from 'vitest'
import { getResultMessage } from '@/utils/get-result-message'

describe('🟢 getResultMessage happy path', () => {
  const zeroScoreMsg = '😥 Poxa, você fez 0 pontos de 50 (0%)'
  it(`should return "${zeroScoreMsg}"`, () =>
    expect(getResultMessage({ score: 0, maxScore: 50 })).toBe(zeroScoreMsg))

  const score10Msg = '😑 Você fez 10 pontos de 50 (20%)'
  it(`should return "${score10Msg}"`, () =>
    expect(getResultMessage({ score: 10, maxScore: 50 })).toBe(score10Msg))

  const score20Msg = '😐 Opa! Você fez 20 pontos de 50 (40%)'
  it(`should return "${score20Msg}"`, () =>
    expect(getResultMessage({ score: 20, maxScore: 50 })).toBe(score20Msg))

  const score30Msg = '😉 Legal! Você fez 30 pontos de 50 (60%)'
  it(`should return "${score30Msg}"`, () =>
    expect(getResultMessage({ score: 30, maxScore: 50 })).toBe(score30Msg))

  const score40Msg = '😎 Muito bom! Você fez 40 pontos de 50 (80%)'
  it(`should return "${score40Msg}"`, () =>
    expect(getResultMessage({ score: 40, maxScore: 50 })).toBe(score40Msg))

  const score50Msg = '🏆 Caramba! Você fez 50 pontos de 50 (100%)'
  it(`should return "${score50Msg}"`, () =>
    expect(getResultMessage({ score: 50, maxScore: 50 })).toBe(score50Msg))
})