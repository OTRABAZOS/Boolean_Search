
const assert = require('assert')
const bSearch = require('../index.js')
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`

describe('* Search with AND and OR conditions', () => {
  describe('Search without quotes and found first single descriptor', () => {
    const search = "DOLOR OR Aliquam AND lectus"

    it('Check results', done => {
      bSearch(text, search, {}, res => {
        assert.strictEqual(res.res, true) // Result
        assert.strictEqual(res.search, search) // Found word
        assert.strictEqual(res.des.length, 1)
        done()
      })
    })
  })
})

describe('Search with double quotes and found first single descriptor', () => {
  const search = '"DOLOR" OR "Aliquam" AND "lectus"'

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 1)
      done()
    })
  })
})

describe('=== Search without quotes and no found first single descriptor and need found boolean', () => {
  const search = "DOLORS OR Aliquam AND lectus"

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true)
      assert.strictEqual(res.search, search)
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})

describe('Search with quotes and no found first single descriptor and need found boolean', () => {
  const search = '"DOLORS" OR "Aliquam" AND "lectus"'

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})

describe('Search without quotes and no found first single descriptor and need found boolean TO UPPERCASE', () => {
  const search = "DOLORS OR Aliquam AND lectus".toUpperCase()

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})

describe('Search with quotes and no found first single descriptor and need found boolean TO UPPERCASE', () => {
  const search = '"DOLORS" OR "Aliquam" AND "lectus"'.toUpperCase()

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})

describe('Search without quotes and no found first single descriptor and need found boolean', () => {
  const search = "DOLORS OR Aliquam AND lectus"

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true)
      assert.strictEqual(res.search, search)
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})

describe('Search with quotes and no found first single descriptor and need found boolean', () => {
  const search = '"DOLORS" OR "Aliquam" AND "lectus"'

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})


describe('Search with quotes and no found first single descriptor and need found boolean', () => {
  const search = '"DOLORS" OR "consectetur ADipiscing" AND "lectus"'

  it('Check results', done => {
      
    bSearch(text, search, {}, res => {
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 2)
      done()
    })
  })
})
