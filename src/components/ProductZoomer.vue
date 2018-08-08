<template>
<div :class="zoomer_box">
    <div class="preview-box" >
        <img :src="previewImg.url" 
             :data-zoom="previewLargeImg.url" 
             class="responsive-image"
             draggable="false"
        />
    </div>
    <div class="control-box">
        <div @click="moveThumbs('left')" class="control">
          <font-awesome-icon :icon="move_button.left"></font-awesome-icon>
        </div>
        <div class="thumb-list">
              <img @mouseover="chooseThumb(thumb, $event)" 
                  draggable="false"
                  v-show="key < options.scroll_items" 
                  :key="key" 
                  :src="thumb.url" 
                  @click="chooseThumb(thumb, $event)" 
                  v-for="(thumb, key) in thumbs" 
                  class="responsive-image" 
                  v-bind:style="{'boxShadow' : thumb.id === choosedThumb.id ? '0px 0px 0px 2px ' + options.choosed_thumb_border_color : ''}"
                  :class="{'choosed-thumb': thumb.id === choosedThumb.id}">
        </div>
        <div @click="moveThumbs('right')" class="control">
          <font-awesome-icon :icon="move_button.right"></font-awesome-icon>
        </div>
    </div>
    <div :id="pane_id" class="pane-container"></div>
</div>
</template>

<script>
import Drift from "../assets/drift-zoom/src/js/Drift.js"

export default {
  name: "ProductZoomer",
  props: {
    baseZoomerOptions: {
      type: Object,
      default: function() {
        return {};
      }
    },
    baseImages: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      previewImg: {},
      previewLargeImg: {},
      thumbs: [],
      normal_size: [],
      large_size: [],
      choosedThumb: {},
      drift: null,
      options: {
        'zoomFactor': 4,
        'pane': 'container',
        'hoverDelay': 300,
        'namespace': 'container-zoomer',
        'move_by_click':true,
        'scroll_items': 4,
        'choosed_thumb_border_color': "#ff3d00",
        'move_button_style': 'chevron'
      }
    };
  },
  computed: {
    zoomer_box: function() {
      return this.options.namespace + "-zoomer-box";
    },
    pane_id: function() {
      return this.options.namespace + "-pane-container";
    },
    move_button: function() {
      return this.options.move_button_style === 'chevron' ? 
              {
                "left": "chevron-left",
                "right": "chevron-right"
              }
              :
              {
                "left": "angle-double-left",
                "right": "angle-double-right"
              }
    }
  },
  mounted() {
    document
      .querySelector("." + this.zoomer_box + " .thumb-list")
      .setAttribute(
        "style",
        "grid-template-columns: repeat(" +
          this.baseZoomerOptions.scroll_items +
          ", auto)"
      );
    let t = setInterval(() => {
      if (document.readyState === "complete") {
        if (this.options.pane === "container-round") {
          this.options.inlinePane = true;
        } else {
          this.options.inlinePane = false;
          this.options.paneContainer = document.getElementById(this.pane_id);
          let rect = document
            .querySelector("." + this.zoomer_box)
            .getBoundingClientRect();
          let customStyle = "";
          if (this.options.pane === "pane") {
            customStyle =
              "width:" +
              rect.width * 1.2 +
              "px;height:" +
              rect.height +
              "px;left:" +
              (rect.right + window.scrollX + 5) +
              "px;top:" +
              (rect.top + window.scrollY) +
              "px;";
          } else {
            customStyle =
              "width:" +
              rect.width +
              "px;height:" +
              rect.height +
              "px;left:" +
              (rect.x + window.scrollX) +
              "px;top:" +
              (rect.top + window.scrollY) +
              "px;";
          }
          this.options.paneContainer.setAttribute("style", customStyle);
        }

        this.options.injectBaseStyles = true;
        let previewImg = "." + this.zoomer_box + ">div>img";
        this.drift = new Drift(
          document.querySelector(previewImg),
          this.options
        );
        clearInterval(t);
      }
    }, 500);
  },
  watch: {
    choosedThumb: function(thumb) {
      let matchNormalImg = this.normal_size.find(img => {
        return img.id === thumb.id;
      });
      let matchLargeImg = this.large_size.find(img => {
        return img.id === thumb.id;
      });
      this.previewLargeImg = Object.assign({}, matchLargeImg);
      this.previewImg = Object.assign({}, matchNormalImg);
      if (this.drift !== null) {
        this.drift.setZoomImageURL(matchLargeImg.url);
      }
    }
  },
  created() {
    if (Object.keys(this.baseImages).length > 0) {
      for (const key in this.baseImages) {
        if (this.baseImages.hasOwnProperty(key)) {
          this[key] = this.baseImages[key];
        }
      }
    }

    if (this.normal_size.length === 0) {
      console.log("Product Zoomer Need Normal Size Image At Least!!!");
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
          this.options[key] = element;
        }
      }
    }

    if (
      this.options.pane === "container-round" ||
      this.options.pane === "container"
    ) {
      this.options.hoverBoundingBox = false;
    } else {
      this.options.hoverBoundingBox = true;
    }
  },
  methods: {
    moveThumbs(direction) {
      let len = this.thumbs.length;
      if (direction === "right") {
        const moveThumb = this.thumbs.splice(len - 1, 1);
        this.thumbs = [moveThumb[0], ...this.thumbs];
      } else {
        const moveThumb = this.thumbs.splice(0, 1);
        this.thumbs = [...this.thumbs, moveThumb[0]];
      }
    },
    chooseThumb(thumb, event) {
      let eventType = event.type;
      if (eventType === "mouseover") {
        if (this.options.move_by_click !== true) {
          this.choosedThumb = thumb;
        }
      } else {
        this.choosedThumb = thumb;
      }
    }
  }
};
</script>

<style>
@import "../assets/drift-zoom/src/css/drift-basic.css";
.preview-box {
  margin-bottom: 1vh;
}
.control {
  display: grid;
  align-items: center;
  font-size: x-large;
  cursor: pointer;
}
.control-box {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 5px;
}
.control-box .thumb-list {
  display: grid;
  grid-column-gap: 4px;
}
.choosed-thumb {
  border-radius: 0px;
}
.pane-container {
  display: none;
  position: absolute;
  z-index: 10000;
  pointer-events: none;
}
.responsive-image {
  height: auto;
  width: 100%;
}
</style>
