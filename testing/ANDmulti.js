
const assert = require('assert')
const bSearch = require('../index.js')
const cleanchar = require("cleanchar")
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`

describe('* Search with MULTIPLE AND condition', () => {
  describe('Found one AND condition without double quotes', () => {
    const search = "DOLOR AND Aliquam AND ipsum"

    it('Check results', () => {
      const res = bSearch(text, search)
      assert.strictEqual(res.res, true) // Result
      assert.strictEqual(res.search, search) // Found word
      assert.strictEqual(res.des.length, 3) // Searched word
    })

    it('Check found alone words in text', () => {
      const words = search.split(" AND ")
      words.forEach(word => {
        const res2 = bSearch(text, word)
        assert.strictEqual(res2.res, true)
        assert.strictEqual(res2.search, word)
        assert.strictEqual(res2.des, cleanchar(word))
      })
    })
  })

  describe('Found one AND condition WITH double quotes', () => {
    const search = '"DOLOR" AND "Aliquam" AND "ipsum"'

    it('Check results', () => {
      const res = bSearch(text, search)
      assert.strictEqual(res.res, true)
      assert.strictEqual(res.search, search)
      assert.strictEqual(res.des.length, 3)
    })

    it('Check found alone words in text', () => {
      const words = search.split(" AND ")
      words.forEach(word => {
        const res2 = bSearch(text, word)
        assert.strictEqual(res2.res, true)
        assert.strictEqual(res2.search, word)
        assert.strictEqual(res2.des, cleanchar(word))
      })
    })
  })

  describe('Found one AND condition WITH double quotes', () => {
    const search = '"DOLOR" AND "Aliquam varius" AND "ipsum"'

    it('Check results', () => {
      const res = bSearch(text, search)
      assert.strictEqual(res.res, true)
      assert.strictEqual(res.search, search)
      assert.strictEqual(res.des.length, 3)
    })

    it('Check found alone words in text', () => {
      const words = search.split(" AND ")
      words.forEach(word => {
        const res2 = bSearch(text, word)
        assert.strictEqual(res2.res, true)
        assert.strictEqual(res2.search, word)
        assert.strictEqual(res2.des, cleanchar(word))
      })
    })
  })
})
