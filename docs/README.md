## Install

```
npm install vue-product-zoomer
```

## Import

```
import ProductZoomer from 'vue-product-zoomer'
```

```
Vue.use(ProductZoomer)
```

## Usage

```
<ProductZoomer
  :base-images="images"
  :base-zoomer-options="zoomerOptions"
/>
```

### Component Options

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
| options                    | required | type    |   default | illustrate                                                        | available values(regex)          |
|----------------------------|----------|---------|----------:|-------------------------------------------------------------------|----------------------------------|
| zoomFactor                 | false    | numeric |         4 | scale for zoomer                                                  | [1-9]                            |
| pane                       | false    | string  | container | pane style                                                        | [container|container-rount|pane] |
| hoverDelay                 | false    | integer |       300 | delay for zoom on hover millisecond                               | \d+                              |
| namespace                  | false    | string  |        "" | for multiple zoomer on one page, you need add this to each zoomer | \s+                              |
| move_by_click              | false    | boolean |      true | change image by click thumb or hover thumb                        | true|false                       |
| scroll_items               | false    | integer |         4 | how many scroller items for thumbs                                | \d+                              |
| choosed_thumb_border_color | false    | string  | #ff3d00   | choosed thumber border color                                      | RGB color                        |
| scroller_button_style      | false    | string  | line      | icon for thumb scroller                                           | line|fill                        |
| scroller_position          | false    | string  | left      | scroller items position                                           | left|right|top|bottom            |
| zoomer_pane_position       | false    | string  | right     |  only take affect when option pane equal pane                     | left|right|top|bottom            |
```

## example

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
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click:false // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    }
  }
}
```
