<template>
<main>
  <div>
          <div style="width: 25%">
            <ProductZoomer
              :base-images="images"
              :base-zoomer-options="zoomerOptions"
            />
          </div>
          <div>
            <h3>With A Pane Container Zoomer</h3>
            <pre>
'zoomerOptions': {
  'zoomFactor': 3,
  'pane': 'pane',
  'hoverDelay': 300,
  'namespace': 'zoomer',
  'move_by_click':false,
  'scroll_items': 7,
  'choosed_thumb_border_color': "#dd2c00"
}
            </pre>
          </div>
    <hr>
        <div style="width: 400px">
          <ProductZoomer
              :base-images="images"
              :base-zoomer-options="containerRoundOptions"
            />
        </div>
        <div>
            <h3>Inside Zoomer Container With Round Effect</h3>
            <pre>
'containerRoundOptions': {
  'zoomFactor': 4,
  'pane': 'container-round',
  'hoverDelay': 300,
  'namespace': 'inline-zoomer',
  'move_by_click':true,
  'scroll_items': 5,
  'choosed_thumb_border_color': "#bbdefb"
}
            </pre>
          </div>
      <hr>
        <div style="width: 400px">
          <ProductZoomer
              :base-images="images"
              :base-zoomer-options="containerOptions"
            />
        </div>
        <div>
            <h3>Inside Zoomer Container</h3>
            <pre>
'containerOptions': {
  'zoomFactor': 4,
  'pane': 'container',
  'hoverDelay': 300,
  'namespace': 'container-zoomer',
  'move_by_click':true,
  'scroll_items': 4
}
            </pre>
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
        'move_by_click':false,
        'scroll_items': 7,
        'choosed_thumb_border_color': "#dd2c00"
      },
      'containerRoundOptions': {
        'zoomFactor': 4,
        'pane': 'container-round',
        'hoverDelay': 300,
        'namespace': 'inline-zoomer',
        'move_by_click':true,
        'scroll_items': 5,
        'choosed_thumb_border_color': "#bbdefb"
      },
      'containerOptions': {
        'zoomFactor': 4,
        'pane': 'container',
        'hoverDelay': 300,
        'namespace': 'container-zoomer',
        'move_by_click':true,
        'scroll_items': 4,
      }
    }
  },
  components: {
    ProductZoomer
  }
}
</script>

