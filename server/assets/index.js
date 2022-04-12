const fs = require('fs')
const path = require('path')
const pathToFile = path.resolve(__dirname, './e29.jpg')

const base64 = fs.readFileSync(pathToFile, "base64")
console.log('base64: ', base64)
