<template>
<div class="container">
  <div class="row" style="display:flex;">
  <ProductZoomer
    :base-images="images"
    :base-component-class="ComponentClass"
  />
  <div class="right-panel　col-lg-4 col-md-4 col-sm-4 zoomer-container">
        <h3>ffff</h3>
        <ul>
          <li>How the Markdown format makes styled collaborative editing easy</li>
          <li>How Markdown differs from traditional formatting approaches</li>
          <li>How to use Markdown to format text</li>
          <li>How to leverage GitHub’s automatic Markdown rendering</li>
          <li>How to apply GitHub’s unique Markdown extensions</li>
        </ul>
  </div>
</div>
</div>

</template>

<script>
import ProductZoomer from '../dist/gh-page/app.js'

export default {
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
}
</script>
