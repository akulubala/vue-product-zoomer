'use strict'
const utils = require('./utils')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: true,
    extract: true
  }),
  cssSourceMap: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
