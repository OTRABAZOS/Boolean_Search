const snc = require('snc')
module.exports = (text, andarr, callback) => {
  snc.each(andarr, (el, idx, next, end) => {
    if (text.indexOf(` ${el} `) > -1) next(el)
    else end([])
  }, res => {
    callback(res)
  })
}
