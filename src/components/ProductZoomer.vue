<template>
<div class="product-zoomer" :class="baseBootstrapGrid">
    <div class="preview-box">
        <img :src="previewProduct.url" 
              :data-zoom="previewProduct.url" 
              class="preview-product img-responsive img-rounded center-block"
        />
    </div>
    <div class="control-box">
        <a @click="moveThumbs('left')" class="control col-xs-1 col-lg-1 col-md-1 col-sm-1">
            <i aria-hidden="true" class="fa fa-angle-left"></i>
        </a> 
        <div class="thumb-list col-xs-10 col-lg-10 col-md-10 col-sm-10">
            <div v-for="(thumb, key) in thumbs">
                <img v-show="key < 4" :src="thumb.url" @click="chooseThumb(thumb)" class="img-responsive center-block col-xs-3 col-lg-3 col-md-3 col-sm-3" :class="{'choosed-thumb': thumb.id === choosedThumb.id}">
            </div>
        </div> 
        <a @click="moveThumbs('right')" class="control col-xs-1 col-lg-1 col-md-1 col-sm-1 text-right">
            <i aria-hidden="true" class="fa fa-angle-right"></i>
        </a>
    </div>
</div>
</template>

<script>
import Drift from 'drift-zoom'

export default {
  name: 'productzoomer',
  props: {
    baseThumbs: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    baseProductImages: {
      type: Array,
      default: function () {
        return []
      }
    },
    baseBootstrapGrid: {
      type: String,
      required: true,
      default: function () {
        return ''
      }
    },
    baseZoomerOptions: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      'previewProduct': {},
      'thumbs': [],
      'choosedThumb': {}
    }
  },
  watch: {
    'choosedThumb': function (thumb) {
      if (this.baseProductImages.length > 0) {
        let matchProduct = this.baseProductImages.find((product) => {
          return product.id === thumb.id
        })
        this.previewProduct = Object.assign({}, matchProduct)
      } else {
        this.previewProduct = Object.assign({}, thumb)
      }
      let options = {
        paneContainer: document.querySelector('.zoomer-container'),
        hoverBoundingBox: true,
        inlinePane: 200,
        inlineOffsetY: -85
      }
      for (const key in this.baseZoomerOptions) {
        if (this.baseZoomerOptions.hasOwnProperty(key)) {
          const option = this.baseZoomerOptions
          if (!options.hasOwnProperty(key)) {
            options[key] = option
          }
        }
      }
      let drift = new Drift(document.querySelector('.preview-product'), {
        paneContainer: document.querySelector('.zoomer-container'),
        hoverBoundingBox: false,
        inlinePane: 200,
        inlineOffsetY: -85
      })
      drift.setZoomImageURL(this.previewProduct.url)
    }
  },
  created () {
    this.thumbs = this.baseThumbs
    this.choosedThumb = this.thumbs[0]
  },
  methods: {
    moveThumbs (direction) {
      let len = this.thumbs.length
      if (direction === 'right') {
        const moveThumb = this.thumbs.splice(len - 1, 1)
        this.thumbs = [moveThumb[0], ...this.thumbs]
      } else {
        const moveThumb = this.thumbs.splice(0, 1)
        this.thumbs = [...this.thumbs, moveThumb[0]]
      }
    },
    chooseThumb (thumb) {
      this.choosedThumb = thumb
    }
  }
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "font-awesome/css/font-awesome.min.css";
@import "drift-zoom/dist/drift-basic.min.css";
.preview-box {
    margin-bottom: 1vh;
}
.control, .thumb-list {
    padding: 0px;
}
.control i {
    cursor: pointer;
}
.thumb-list img {
    padding: 1vh;
}
.row .control-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: xx-large;
}
.choosed-thumb {
  border:2px solid #e53e41
}
</style>
