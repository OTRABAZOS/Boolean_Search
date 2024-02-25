const bool = require('../src/searchbool.js')

const boolarr = bool('hello AND 1AND2 AND bye OR debian AND redhat OR josep AND hello AND foo AND 1 AND 2')
console.log(JSON.stringify(boolarr))

const boolarr1 = bool('hello AND bye')
console.log(JSON.stringify(boolarr1))

const boolarr2 = bool('hello OR bye')
console.log(JSON.stringify(boolarr2))

const boolarr3 = bool('hello AND bye AND hi AND foo')
console.log(JSON.stringify(boolarr3))

const boolarr4 = bool('hello')
console.log(JSON.stringify(boolarr4))

const boolarr5 = bool('1 and 2')
console.log(JSON.stringify(boolarr5))

const boolarr6 = bool("\"portland\" AND \"cemento\"")
console.log(JSON.stringify(boolarr6))
