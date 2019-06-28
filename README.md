# Welcome to Vue Product Zoomer 👋
![Version](https://img.shields.io/badge/version-3.0.0-blue.svg?cacheSeconds=2592000)
[![npm](https://img.shields.io/npm/dt/vue-product-zoomer.svg)](https://www.npmjs.com/package/vue-product-zoomer)
[![GitHub issues](https://img.shields.io/github/issues/akulubala/vue-product-zoomer.svg)](https://github.com/akulubala/vue-product-zoomer/issues)
[![GitHub license](https://img.shields.io/github/license/akulubala/vue-product-zoomer.svg)](https://github.com/akulubala/vue-product-zoomer/blob/master/LICENSE)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://yoohooworld.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/akulubala/vue-product-zoomer/graphs/commit-activity)
[![Twitter: akulubala](https://img.shields.io/twitter/follow/akulubala.svg?style=social)](https://twitter.com/akulubala)

> A Image Zoomer For Eshop Website.Saving Your Time...

### 🏠 [Homepage](https://yoohooworld.com/demo.html)

## Install

```sh
npm install vue-product-zoomer
```

## Usage

```sh
import ProductZoomer from 'vue-product-zoomer'
Vue.use(ProductZoomer)

<ProductZoomer
  :base-images="images"
  :base-zoomer-options="zoomerOptions"
/>

```

### Options

#### images
```sh
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

```sh
{
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
```

## Author

👤 **Raymond Cheng**

* Twitter: [@akulubala](https://twitter.com/akulubala)
* Github: [@akulubala](https://github.com/akulubala)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/akulubala/vue-product-zoomer/issues).

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_