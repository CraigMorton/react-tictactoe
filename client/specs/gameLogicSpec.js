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
    assert.equal(winningSection(grid), null)
  })

  it('should return first winning sections when multiple wins on board -- should not be possible during normal gameplay', () => {
    const grid = [
      'X', 'X', 'X',
      'O', 'O', 'O',
      '', '', '',
    ]
    assert.deepEqual(winningSection(grid), [0, 1, 2])

  })

})

import {isCatsGame} from '../src/functions/gameLogic.js'

describe('isCatsGame function', () => {
  
  it('should return false when grid is empty array', () => {
    assert.equal(isCatsGame([]), false)
  })

  it('should return true no winning plays in complete grid', () => {
    const grid = [
      'X', 'O', 'O',
      'O', 'X', 'X',
      'X', 'X', 'O',
    ]
    assert.equal(isCatsGame(grid), true)
  })

  it('should return false when grid incomplete', () => {
    const grid = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', '',
    ]
    assert.equal(isCatsGame(grid), false)
  })

  it('should return false when winning play found in grid', () => {
    const grid = [
      'X', 'X', 'X',
      'X', 'O', 'O',
      'O', 'X', 'O',
    ]
    assert.equal(isCatsGame(grid), false)
  })

  it('should return false when winning play found in incomplete grid', () => {
    const grid = [
      'X', 'X', 'X',
      'X', 'O', 'O',
      'O', 'X', '',
    ]
    assert.equal(isCatsGame(grid), false)
  })

})

import {isGameOver} from '../src/functions/gameLogic.js'

describe('isGameOver function', () => {
  
  it('should return true when grid is empty array', () => {
    assert.equal(isGameOver([]), true)
  })

  it('should return true no winning plays in complete grid', () => {
    const grid = [
      'X', 'O', 'O',
      'O', 'X', 'X',
      'X', 'X', 'O',
    ]
    assert.equal(isGameOver(grid), true)
  })

  it('should return false when grid incomplete', () => {
    const grid = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', '',
    ]
    assert.equal(isGameOver(grid), false)
  })

  it('should return true when winning play found in grid', () => {
    const grid = [
      'X', 'X', 'X',
      'X', 'O', 'O',
      'O', 'X', 'O',
    ]
    assert.equal(isGameOver(grid), true)
  })

  it('should return true when winning play found in incomplete grid', () => {
    const grid = [
      'X', 'X', 'X',
      'X', 'O', 'O',
      'O', 'X', '',
    ]
    assert.equal(isGameOver(grid), true)
  })

})

import {getOtherPlayer} from '../src/functions/gameLogic.js'

describe('getOtherPlayer function', () => {
  
  it('should return O when passed X', () => {
    assert.equal(getOtherPlayer('X'), 'O')
  })

  it('should return X when passed O', () => {
    assert.equal(getOtherPlayer('O'), 'X')
  })

})
