const assert = require('assert')
const bSearch = require('../index.js')
const cleanchar = require("cleanchar")
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
¡¡¡Texto Español. Troç de text en català. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`
//const not_pass = { res: false }
//const yes_pass = { res: true }

describe('* Basic tests', () => {

  /*
  describe('Check Empty values', done => {
    it('Not pass when no have values to check', () => {
      const res = bSearch()
      assert.deepStrictEqual(res, not_pass)
    })
  
    it('Pass when only have text', () => {
      const res = bSearch(text)
      assert.deepStrictEqual(res, yes_pass)
    })
  })
  */
  
  describe('Search a simple word', () => {
    it('Found a simple word', done => {
      const search = "Dolor"
      bSearch(text, search, {}, res => {
        assert.strictEqual(res.res, true) // Result
        assert.strictEqual(res.search, search) // Searched word    
        assert.strictEqual(res.des, cleanchar(search)) // Found word
        done()
      })
    })

    /*
    it('Found a simple words from text', () => {
      const listwords = text.split(" ")
      listwords.forEach(word => {
        const res = bSearch(text, word)
        assert.strictEqual(res.res, true)
        assert.strictEqual(res.search, word)
        assert.strictEqual(res.des, cleanchar(word))            
      })
    })
  })
  */

    it('XXXXXXXXXXXXXXX Found a simple word', done => {
      const search = "DOLOR"
      bSearch(text, search, {}, res => {
        assert.strictEqual(res.res, true) // Result
        assert.strictEqual(res.search, search) // Searched word    
        assert.strictEqual(res.des, cleanchar(search)) // Found word
        done()
      })
    })

  /*
    it('Found a simple words from text', () => {
      const listwords = text.split(" ")
      listwords.forEach(word => {
        const upword = word.toUpperCase()
        const res = bSearch(text, upword)
        assert.strictEqual(res.res, true)
        assert.strictEqual(res.search, upword)
        assert.strictEqual(res.des, cleanchar(upword))
      })
    })
    */
  })
})
