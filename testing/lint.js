const lint = require('mocha-eslint')

describe('* ESLint: JavaScript Code Quality Tool', () => {
  lint('./test/*.js')  
  lint('./src/*.js')  
  lint('./*.js')
})
