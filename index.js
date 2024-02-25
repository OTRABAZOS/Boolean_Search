const cleanchar = require("cleanchar")
const searchbool = require("./src/searchbool.js")
const andfind = require("./src/andfind.js")
const tck = require('tck')
const snc = require('snc')

module.exports = (text, search, options, callback) => {
  if (tck.isEmpty(text)) callback({ res: false })
  else if (tck.isEmpty(search) || !tck.isString(search)) callback({ res: true })
  else if (tck.isString(search)) {
    const boolres = searchbool(search)
    const cleantext = ` ${cleanchar(text, options)} `
    
    if (boolres.length === 1 && boolres[0].length === 1) {
      if (cleantext.indexOf(` ${boolres[0][0]} `) > -1) callback({ res: true, search: search, des: boolres[0][0] })
      else callback({ res: false })
    } else {
      if (boolres.length > 1) {
        snc.each(boolres, (el, idx, next, end) => {
          andfind(cleantext, el, res => {
            if (res.length > 0) end({ res: true, search: search, des: res })
            else next()
          })
        }, ret => {
          if (tck.isArray(ret)) callback({ res: false })
          else callback(ret)
        })

      } else if (boolres[0].length > 1) {
        andfind(cleantext, boolres[0], res => {
          if (res.length > 0) callback({ res: true, search: search, des: res })
          else callback({ res: false })
        })
      }
    }
  }
}
