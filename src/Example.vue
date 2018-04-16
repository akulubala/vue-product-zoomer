<template>
<main>
  <div class="container container-box">
    <div class="row outline-example">
          <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4">
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
            />
          </div>
          <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6">
            <h3>With A Pane Container Zoomer</h3>
            <pre>
'zoomerOptions': {
  'zoomFactor': 3,
  'pane': 'pane',
  'hoverDelay': 300,
  'namespace': 'zoomer',
  'zoomer_container_id': 'zoomer',
  'move_by_click':false
}
            </pre>
          </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4">
          <ProductZoomer
              :base-images="images"
              :base-zoomer-options="containerRoundOptions"
            />
        </div>
        <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6">
            <h3>Inside Zoomer Container With Round Effect</h3>
            <pre>
containerRoundOptions: {
  'zoomFactor': 5,
  'pane': 'container-round',
  'hoverDelay': 300,
  'namespace': 'inline-zoomer',
  'move_by_click':true
}
            </pre>
          </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-4 col-lg-4 col-md-4 col-sm-4">
          <ProductZoomer
              :base-images="images"
              :base-zoomer-options="containerOptions"
            />
        </div>
        <div class="col-xs-6 col-lg-6 col-md-6 col-sm-6">
            <h3>Inside Zoomer Container</h3>
            <pre>
containerOptions: {
  'zoomFactor': 5,
  'pane': 'container',
  'hoverDelay': 300,
  'namespace': 'container-inside-zoomer',
  'move_by_click':true
}
            </pre>
          </div>
      </div>
  </div>
</main>
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
      'zoomerOptions': {
        'zoomFactor': 3,
        'pane': 'pane',
        'hoverDelay': 300,
        'namespace': 'zoomer',
        'move_by_click':false
      },
      'containerRoundOptions': {
        'zoomFactor': 4,
        'pane': 'container-round',
        'hoverDelay': 300,
        'namespace': 'inline-zoomer',
        'move_by_click':true
      },
      'containerOptions': {
        'zoomFactor': 4,
        'pane': 'container',
        'hoverDelay': 300,
        'namespace': 'container-zoomer',
        'move_by_click':true
      }
    }
  },
  components: {
    ProductZoomer
  }
}
</script>
<style>
.container-box {
  padding: 40px;
}
.outline-example {
  display: flex;
}
</style>


