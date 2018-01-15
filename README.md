[![npm](https://img.shields.io/npm/dt/vue-product-zoomer.svg)](https://www.npmjs.com/package/vue-product-zoomer)
[![GitHub issues](https://img.shields.io/github/issues/akulubala/vue-product-zoomer.svg)](https://github.com/akulubala/vue-product-zoomer/issues)
[![GitHub license](https://img.shields.io/github/license/akulubala/vue-product-zoomer.svg)](https://github.com/akulubala/vue-product-zoomer/blob/master/LICENSE)

# vue-product-zoomer

> Vue Product Image Zoomer Package, Useful For e-Shop Project.
> Demo: https://akulubala.github.io/vue-product-zoomer/

## Instruction 

``` bash
# install 
npm install vue-product-zoomer

# Import
import ProductZoomer from 'vue-product-zoomer'

# Usage
<ProductZoomer
    :base-images="images"
    :base-component-class="ComponentClass"
    :base-zoomer-options="zoomerOptions"
  />


`export default {
  name: 'app',
  data () {
    return {
      'images': {
          'thumbs': [
            {
              'id': 1,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/1.jpeg'
            },
            {
              'id': 2,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/2.jpeg'
            },
            {
              'id': 3,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/3.jpeg'
            },
            {
              'id': 4,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/4.jpeg'
            },
            {
              'id': 5,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/5.jpeg'
            },
            {
              'id': 6,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/6.jpeg'
            },
            {
              'id': 7,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/7.jpeg'
            },
            {
              'id': 8,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/8.jpeg'
            },
            {
              'id': 9,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/9.jpeg'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/2.jpeg'
            },
            {
              'id': 3,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/3.jpeg'
            },
            {
              'id': 4,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/4.jpeg'
            },
            {
              'id': 5,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/5.jpeg'
            },
            {
              'id': 6,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/6.jpeg'
            },
            {
              'id': 7,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/7.jpeg'
            },
            {
              'id': 8,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/8.jpeg'
            },
            {
              'id': 9,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/9.jpeg'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/2.jpeg'
            },
            {
              'id': 3,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/3.jpeg'
            },
            {
              'id': 4,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/4.jpeg'
            },
            {
              'id': 5,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/5.jpeg'
            },
            {
              'id': 6,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/6.jpeg'
            },
            {
              'id': 7,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/7.jpeg'
            },
            {
              'id': 8,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/8.jpeg'
            },
            {
              'id': 9,
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/9.jpeg'
            }
          ]
      },
      'ComponentClass': 'col-xs-4 col-lg-4 col-md-4 col-sm-4'
    }
  },
  components: {
    ProductZoomer
  }
}`

```
