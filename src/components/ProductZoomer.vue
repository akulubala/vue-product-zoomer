<template>
<div :class="baseComponentClass +' '+ zoomer_box" >
    <div class="preview-box">
        <img :src="previewImg.url" 
             :data-zoom="previewLargeImg.url" 
             class="img-responsive img-rounded center-block"
        />
    </div>
    <div class="control-box">
        <a @click="moveThumbs('left')" class="control col-xs-1 col-lg-1 col-md-1 col-sm-1">
            <i aria-hidden="true" class="fa fa-angle-left"></i>
        </a> 
        <div class="thumb-list col-xs-10 col-lg-10 col-md-10 col-sm-10" style="border:none">
                <img @mouseover="chooseThumb(thumb, $event)" v-show="key < 4" :src="thumb.url" @click="chooseThumb(thumb, $event)" v-for="(thumb, key) in thumbs" class="img-responsive center-block col-xs-3 col-lg-3 col-md-3 col-sm-3" :class="{'choosed-thumb': thumb.id === choosedThumb.id}">
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
      'drift': null,
      'options': {
        'zoomFactor': 4,
        'inlinePane': false,
        'hoverDelay': 200,
        'namespace': 'zoomer',
        'move_by_click': true,
      }
    }
  },
  computed:{
    'zoomer_box': function() {
      return this.options.namespace + '_zoomer_box';
    }
  },
  mounted() {
    if (this.options.hasOwnProperty('zoomer_container_id')) {
      this.options.paneContainer = document.getElementById(this.options.zoomer_container_id);
    } else {
      this.options.paneContainer = document.getElementById('zoomer-container');
    }
    this.options.injectBaseStyles = true;
    let previewImg = '.' + this.zoomer_box + '>div>img';
    this.drift = new Drift(document.querySelector(previewImg), this.options);
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
    this.choosedThumb = this.thumbs[0];

    if (Object.keys(this.baseZoomerOptions).length > 0) {
      for (const key in this.baseZoomerOptions) {
        if (this.baseZoomerOptions.hasOwnProperty(key)) {
          const element = this.baseZoomerOptions[key];
          this.options[key] = element
        }
      }
    }
    if (this.options.inlinePane === true) {
      this.options.hoverBoundingBox = false;
    } else {
      this.options.hoverBoundingBox = true;
    }
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
    chooseThumb (thumb, event) {
      let eventType = event.type;
      if (eventType === 'mouseover') {
        if (this.options.move_by_click !== true) {
          this.choosedThumb = thumb
        }
      } else {
        this.choosedThumb = thumb
      }
      
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
    padding: 2px;
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
