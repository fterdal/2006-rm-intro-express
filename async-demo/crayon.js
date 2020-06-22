const chalk = require('chalk')

function crayon(color, message = 'Hello World', timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof chalk[color] === 'function') {
        console.log(chalk[color](message))
        resolve(color)
      } else {
        reject(new Error(`I don't have a ${color} crayon. 😞`))
      }
    }, timeout)
  })
}

module.exports = crayon;
