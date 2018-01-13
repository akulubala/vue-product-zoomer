<template>
<div class="row" style="display:flex;">
  <ProductZoomer
    :base-thumbs="thumbs"
    :base-component-class="ComponentClass"
  />
  <div class="right-panel　col-lg-2 col-md-2 col-sm-2 zoomer-container">
            <h3>ffff</h3>
            <div class="price-content">
                    <!-- <span class="price-type">金额</span>：
                    <strong class="price">￥85</strong> -->
            </div>
            <div class="media">
                <div class="media-left">
                    <span class="media-title media-middle">
                        初次服务费：
                    </span>
                </div>
                <div class="media-body">
                    <div　class="col-lg-1２">
                        <div 
                         class="config-tag col-lg-12">
                                １００
                        </div>
                    </div>
                </div>
            </div>
            <div class="media">
                <div class="media-left">
                    <span class="media-title media-middle">
                        后续服务费：
                    </span>
                </div>
                <div class="media-body">
                    <div　class="col-lg-1２">
                        <div >
                               ８０００
                        </div>
                    </div>
                </div>
            </div>
            <div class="media">
                <div class="media-left media-middle">
                    <span class="media-title">
                        数量：
                    </span>
                </div>
                <div class="media-body">
                    <div　class="col-lg-1２">
                        <div class="input-group">
                            <div class="count-input space-bottom">
                                <a class="incr-btn decrease">–</a>
                                <input class="quantity" type="text" name="quantity" value='1'/>
                                <a class="incr-btn increase">&plus;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-btn-box">
                <div class="rent-price">
                    合计金额：<strong id="sumPrice">500</strong> <span class="_price_explain"></span>
                </div>
                <button class="btn btn-primary">立即下单</button>
                <button class="btn btn-danger">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    加入购物车
                </button>
            </div>
        </div>
</div>
</template>

<script>
import ProductZoomer from '../published/app.js'

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
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/thumbs/9.jpg'
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
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/normal_size/9.jpg'
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
              'url': 'https://akulubala.github.io/vue-product-zoomer/images/large_size/9.jpg'
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
