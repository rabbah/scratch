const zerionAPI = require('zerion-js');

async function main(args) {
    return {body: 'ok'}
}

exports.main = main

if (process.env.TEST) {
  main({})
}
