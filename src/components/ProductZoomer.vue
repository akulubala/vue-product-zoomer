<template>
<div class="product-zoomer" :class="baseComponentClass">
    <div class="preview-box">
        <img id="previewImg" :src="previewImg.url" 
             :data-zoom="previewLargeImg.url" 
             class="img-responsive img-rounded center-block"
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
import Drift from '../assets/drift-zoom/src/js/Drift.js';

export default {
  name: 'productzoomer',
  props: {
    baseZoomerOptions: {
      type: Object,
      default: function () {
        return {}
      }
    },
    baseImages: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    baseComponentClass: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {
      'previewImg': {},
      'previewLargeImg': {},
      'thumbs': [],
      'normal_size': [],
      'large_size': [],
      'choosedThumb': {},
      'drift': null
    }
  },
  mounted() {
    let options = {
      paneContainer: document.querySelector('.zoomer-container'),
      hoverBoundingBox: true,
      injectBaseStyles: true,
      inlinePane: 200,
      zoomFactor: 4
    }
    if (Object.keys(this.baseImages) > 0) {
      for (const key in this.baseImages) {
        if (this.baseImages.hasOwnProperty(key)) {
          const element = this.baseImages[key];
          options[key] = element
        }
      }
    }
    this.drift = new Drift(document.getElementById('previewImg'), options);
  },
  watch: {
    'choosedThumb': function (thumb) {
      let matchNormalImg = this.normal_size.find((img) => {
        return img.id === thumb.id
      });
      let matchLargeImg = this.large_size.find((img) => {
        return img.id === thumb.id
      });
      this.previewLargeImg = Object.assign({}, matchLargeImg);
      this.previewImg = Object.assign({}, matchNormalImg);
      this.drift.setZoomImageURL(matchLargeImg.url)
    }
  },
  created () {
    if (Object.keys(this.baseImages).length > 0) {
      for (const key in this.baseImages) {
        if (this.baseImages.hasOwnProperty(key)) {
          this[key] = this.baseImages[key];
        }
      }
    }
    
    if (this.normal_size.length === 0) {
      console.log('Product Zoomer Need Normal Size Image At Least!!!');
      return;
    }
    if (this.thumbs.length === 0) {
      this.thumbs = Object.assign([], this.normal_size);
    }
    if (this.large_size.length === 0) {
      this.large_size = Object.assign([], this.normal_size);
    }
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
@import "../assets/drift-zoom/src/css/drift-basic.css";
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
