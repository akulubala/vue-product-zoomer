<template>
<div class="row" style="display:flex;">
  <ProductZoomer
    :base-thumbs="thumbs"
    :base-bootstrap-grid="bootstrapGrid"
  />
  <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4 zoomer-container">

  </div>
</div>
</template>

<script>
import ProductZoomer from './components/ProductZoomer'
export default {
  name: 'app',
  data () {
    return {
      'thumbs': [
        {
          'id': 1,
          'url': 'http://reiniot.local/storage/product_image/主图2.jpg'
        },
        {
          'id': 2,
          'url': 'http://reiniot.local/storage/product_image/主图4.jpg'
        },
        {
          'id': 3,
          'url': 'http://reiniot.local/storage/product_image/主图2.jpg'
        },
        {
          'id': 4,
          'url': 'http://reiniot.local/storage/product_image/主图4.jpg'
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
