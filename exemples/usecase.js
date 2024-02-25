const bSearch = require('../index.js')
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius porttitor est a ornare. Quisque pulvinar nec libero ut posuere. Praesent lobortis eleifend magna, eu egestas lorem. Proin vitae diam leo. Nunc placerat nibh a tellus volutpat molestie.
!!!Sample text in English. Piece of text in another language. Play with #hashtags and @social!!!
Nullam sodales, diam sit amet volutpat feugiat, lectus neque lacinia mauris, scelerisque vulputate diam nunc at mi. Vestibulum semper quam faucibus dolor fermentum suscipit.`

const search = 'Sample AND @social'
const resp = bSearch(text, search)
console.log("RESP1: " + JSON.stringify(resp))

const search2 = 'Lorem AND @social'
const resp2 = bSearch(text, search2)
console.log("RESP2: " + JSON.stringify(resp2))

const search3 = 'Lorem AND ipsum OR @social'
const resp3 = bSearch(text, search3)
console.log("RESP3: " + JSON.stringify(resp3))

const search4 = 'Lorem AND @social OR ipsum'
const resp4 = bSearch(text, search4)
console.log("RESP4: " + JSON.stringify(resp4))

const search5 = 'Lorem'
const resp5 = bSearch(text, search5)
console.log("RESP5: " + JSON.stringify(resp5))

const search6 = "\"proin\" AND \"diam\""
const textresp6 = "RETWEET: JohnDoe - Without a specialist in #SmallTown No education on #Subject We are going in the opposite direction of common sense. And professionalism"
const resp6 = bSearch(textresp6, search6)
console.log("RESP6: " + JSON.stringify(resp6))
