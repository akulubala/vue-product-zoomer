<template>
<main style="margin-top: 200px;">
  <div class="container">
    <div class="row" style="display:flex;">
      <ProductZoomer
        :base-images="images"
        :base-component-class="ComponentClass"
        :base-zoomer-options="zoomerOptions"
      />
      <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4" id="zoomer-container">

      </div>
    </div>
  </div>
</main>
</template>

<script>
import ProductZoomer from './components/ProductZoomer'
export default {
  name: 'app',
  data () {
    return {
      'images': {
          'thumbs': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/2.jpeg'
            },
            {
              'id': 3,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/3.jpeg'
            },
            {
              'id': 4,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/4.jpeg'
            },
            {
              'id': 5,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/5.jpeg'
            },
            {
              'id': 6,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/6.jpeg'
            },
            {
              'id': 7,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/7.jpeg'
            },
            {
              'id': 8,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/8.jpeg'
            },
            {
              'id': 9,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/thumbs/9.jpeg'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/2.jpeg'
            },
            {
              'id': 3,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/3.jpeg'
            },
            {
              'id': 4,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/4.jpeg'
            },
            {
              'id': 5,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/5.jpeg'
            },
            {
              'id': 6,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/6.jpeg'
            },
            {
              'id': 7,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/7.jpeg'
            },
            {
              'id': 8,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/8.jpeg'
            },
            {
              'id': 9,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/normal_size/9.jpeg'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/2.jpeg'
            },
            {
              'id': 3,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/3.jpeg'
            },
            {
              'id': 4,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/4.jpeg'
            },
            {
              'id': 5,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/5.jpeg'
            },
            {
              'id': 6,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/6.jpeg'
            },
            {
              'id': 7,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/7.jpeg'
            },
            {
              'id': 8,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/8.jpeg'
            },
            {
              'id': 9,
              'url': 'http://yoohooworld.com/images/vue_product_zoomer/large_size/9.jpeg'
            }
          ]
      },
      'ComponentClass': 'col-xs-4 col-lg-4 col-md-4 col-sm-4',
      'zoomerOptions': {
        'zoomFactor': 3,
        'inlinePane': true,
        'hoverDelay': 300,
        'namespace': 'xx'
      }
    }
  },
  components: {
    ProductZoomer
  }
}
</script>
