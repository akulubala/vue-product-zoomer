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


## Options

|    images                                     | component-class |         zoomer-options         |
| --------------------------------------------  | --------------- | ------------------------------ |
| {                                             |    String       | {                              |
|    {                                          |                 |    zoomFactor: integer,        |
|      'thumbs':                                |base class added |    inlinePane: boolean,        |
|      [                                        |to zoomer        |    hoverDelay: integer,        |
|        {'id':'unique id', 'url': 'image url'},|component        |    namespace: String,          |
|        {'id':'unique id', 'url': 'image url'} |                 |    move_by_click: boolean,     |
|      ]                                        |                 |    zoomer_container_id: String |
|    },                                         |                 | }                              |
|    {                                          |                 |                                |
|      'normal_size':                           |                 | zoomFactor: scale for zoomer,  |
|      [                                        |                 | this option can change bounding|
|        {'id':'unique id', 'url': 'image url'},|                 | box size and zoom factor       |
|        {'id':'unique id', 'url': 'image url'} |                 | inlinePane: if zoomer inline ? |
|      ]                                        |                 | if inlinePane is false, then   |
|    },                                         |                 | zoomer_container_id must,      |
|    {                                          |                 | hoverDelay: how long after     |
|      'large_size':                            |                 | zoomer take effect.            |
|      [                                        |                 | namespace: when mutiple zoomer |
|        {'id':'unique id', 'url': 'image url'},|                 | on one page, must present      |
|        {'id':'unique id', 'url': 'image url'} |                 | move_ty_click: change image by |
|      ]                                        |                 | click or mouseover
|    }                                          |
| }                                             |
| if thumbs or large_size not present,          | 
|    they will be normal_size, normal_size      |
|    must present                               | 


`export default {
  name: 'app',
  data () {
    return {
      'images': {
          'thumbs': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/2.jpeg'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/2.jpeg'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/large_size/1.jpeg'
            },
            {
              'id': 2,
              'url': 'http://yoohooworld.com/images/vue-product-zoomer/images/large_size/2.jpeg'
            }
          ]
      },
      'ComponentClass': 'col-xs-4 col-lg-4 col-md-4 col-sm-4',
      'zoomerOptions': {
        'zoomFactor': 3,
        'inlinePane': false,
        'hoverDelay': 300,
        'namespace': 'zoomer',
        'zoomer_container_id': 'zoomer',
        'move_by_click':false
      }
    }
  },
  components: {
    ProductZoomer
  }
}`

```
