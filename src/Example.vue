<template>
<div class="row" style="display:flex;">
  <ProductZoomer
    :base-thumbs="thumbs"
    :base-bootstrap-grid="bootstrapGrid"
  />
  <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4 zoomer-container">
    your other contents here.
  </div>
</div>
</template>

<script>
import ProductZoomer from '../dist/published/app.js'

export default {
  name: 'app',
  data () {
    return {
      'thumbs': [
        {
          'id': 1,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/1.jpeg'
        },
        {
          'id': 2,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/2.jpeg'
        },
        {
          'id': 3,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/3.jpeg'
        },
        {
          'id': 4,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/4.jpeg'
        },
        {
          'id': 5,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/5.jpeg'
        },
        {
          'id': 6,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/6.jpeg'
        },
        {
          'id': 7,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/7.jpeg'
        },
        {
          'id': 8,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/8.jpeg'
        },
        {
          'id': 9,
          'url': 'https://akulubala.github.io/vue-product-zoomer/images/9.jpg'
        }
      ],
      'bootstrapGrid': 'col-xs-4 col-lg-4 col-md-4 col-sm-4'
    }
  },
  components: {
    ProductZoomer
  }
}
</script>
