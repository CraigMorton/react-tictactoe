import {assert} from 'chai'
import {isGridComplete} from '../src/functions/gameLogic.js'

describe('isGridComplete', () => {
  
  it('should return false if game not finished ', () => {
    const grid = [
      {
        symbol: '-',
        claimed: false
      },
      {
        symbol: '-',
        claimed: false
      },
      {
        symbol: '-',
        claimed: false
      }
    ]
    assert.equal(isGridComplete(grid), false)
  })

  it('should return true if all cells claimed', () => {
    const grid = [
      {
        symbol: 'x',
        claimed: true
      },
      {
        symbol: 'x',
        claimed: true
      }
    ]
    assert.equal(isGridComplete(grid), true)
  })

  it('should return true when input is empty array', () => {
    assert.equal(isGridComplete([]), true)
  })

})