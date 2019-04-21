## 安装组件

```
npm install vue-product-zoomer
```

## 引入组件

```
import ProductZoomer from 'vue-product-zoomer'
```

```
Vue.use(ProductZoomer)
```

## 使用组件

```
<ProductZoomer
  :base-images="images"
  :base-zoomer-options="zoomerOptions"
/>
```

### 组件参数选项

#### images

```
{
    {
      'thumbs':    // optional, if not present will use normal_size instead
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    },
    {
      'normal_size':  // required
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    },
    {
      'large_size':    //optional, if not present will use normal_size instead
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    }
 }
```

#### zoomerOptions

```
{
	'zoomFactor': 3, // scale for zoomer
	'pane': 'pane', // three type of pane ['pane', 'container-round', 'container']
	'hoverDelay': 300, // how long after the zoomer take effect
	'namespace': 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
	'move_by_click':false // move image by click thumb image or by mouseover
  'scroll_items': 5, // thumbs for scroll
  'choosed_thumb_border_color': "#bbdefb", // choosed thumb border color
   'move_button_style': 'chevron'// default chevron , can be set to angle-double
}
```

## 参考

```
export default {
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
      'zoomerOptions': {
        'zoomFactor': 4,
        'pane': 'container',
        'hoverDelay': 300,
        'namespace': 'container-zoomer',
        'move_by_click':true,
        'scroll_items': 4,
        'choosed_thumb_border_color': "#ff3d00"
      }
    }
  }
}
```
