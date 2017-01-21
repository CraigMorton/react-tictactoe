import {assert} from 'chai'
import {isGridComplete} from '../src/functions/gameLogic.js'

describe('isGridComplete', () => {
  
  it('should return false if game not finished ', () => {
    const grid = ['', '', '']
    assert.equal(isGridComplete(grid), false)
  })

  it('should return true if all cells claimed', () => {
    const grid = ['x', 'x']
    assert.equal(isGridComplete(grid), true)
  })

  it('should return true when input is empty array', () => {
    assert.equal(isGridComplete([]), true)
  })

})

import {winningSection} from '../src/functions/gameLogic.js'

describe('winningSection function', () => {
  
  it('should return indices of section where winning row found', () => {
    const grid = [
      'X', 'O', 'X',
      'O', 'O', 'X',
      'O', 'X', 'X',
    ]
    assert.deepEqual(winningSection(grid), [2, 5, 8])
  })

  it('should return false if no winning row found', () => {
    const grid = [
      'X', 'O', 'O',
      'O', 'X', 'X',
      'X', 'X', 'O',
    ]
    assert.equal(winningSection(grid), false)
  })

  it('should return first winning sections when multiple wins on board -- should not be possible during normal gameplay', () => {
    const grid = [
      'X', 'X', 'X',
      'O', 'O', 'O',
      '', '', '',
    ]
    assert.deepEqual(winningSection(grid), [0, 1, 2])

  })

// })

// import {isGameWon} from '../src/functions/gameLogic.js'

// describe('isGameWon function', () => {
  
//   it('should return false when grid is empty array', () => {
//     assert.equal(isGameWon([]), false)
//   })

//   it('should return true when first row is same symbol', () => {
//     const input = ['x', 'x', 'x', '-', '-', '-', '-', '-', '-']
//     assert.equal(isGameWon(input), true)
//   })

// })

// import {isSectionWinner} from '../src/functions/gameLogic.js'

// describe('isSectionWinner function', () => {
  
//   it('should return true when input is empty array', () => {
//     assert.equal(isSectionWinner([]), true)
//   })

//   it('should return true when input cells are all the same', () => {
//     const input = ['x', 'x', 'x']
//     assert.equal(isSectionWinner(input), true)
//   })

})