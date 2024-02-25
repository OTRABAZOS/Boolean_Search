const cleanchar = require("cleanchar")

module.exports = (query, options) => {
  query = query.replace(new RegExp("\\sOR\\s", "g"), "~or~")
  query = query.replace(new RegExp("\\sAND\\s", "g"), "~and~")
  query = cleanchar(query, options)
  const cleanquery = query.toLowerCase()
  const splitor = cleanquery.split('~or~')
  const splitand = splitor.map(exp => {
    return exp.split('~and~')
  })
  return splitand
}
