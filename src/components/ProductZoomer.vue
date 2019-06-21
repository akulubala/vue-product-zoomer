<template>
  <div :class="options.namespace + '-base-container scroller-at-' + options.scroller_position">
      <img
        :src="previewImg.url"
        :data-zoom="previewLargeImg.url"
        class="responsive-image preview-box"
        draggable="false"
      >
    <div class="thumb-list">
      <img v-if="['top', 'bottom'].includes(options.scroller_position) && options.scroller_button_style === 'line'"
           @click="moveThumbs('backward')"
           src="../assets/svg-icons/arrow-left-s-line.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img v-else-if="['top', 'bottom'].includes(options.scroller_position) && options.scroller_button_style === 'fill'"
           @click="moveThumbs('backward')"
           src="../assets/svg-icons/arrow-left-s-fill.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img v-else-if="['left', 'right'].includes(options.scroller_position) && options.scroller_button_style === 'line'" 
           @click="moveThumbs('backward')"
           src="../assets/svg-icons/arrow-up-s-line.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img @click="moveThumbs('backward')"
           src="../assets/svg-icons/arrow-up-s-fill.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      v-else>
      <img
        @mouseover="chooseThumb(thumb, $event)"
        draggable="false"
        v-show="key < options.scroll_items"
        :key="key"
        :src="thumb.url"
        @click="chooseThumb(thumb, $event)"
        v-for="(thumb, key) in thumbs"
        class="responsive-image"
        v-bind:style="{'boxShadow' : thumb.id === choosedThumb.id ? '0px 0px 0px 2px ' + options.choosed_thumb_border_color : ''}"
        :class="{'choosed-thumb': thumb.id === choosedThumb.id}"
      >
      <img v-if="['top', 'bottom'].includes(options.scroller_position) && options.scroller_button_style === 'line'"
           @click="moveThumbs('forward')"
           src="../assets/svg-icons/arrow-right-s-line.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img v-else-if="['top', 'bottom'].includes(options.scroller_position) && options.scroller_button_style === 'fill'"
           @click="moveThumbs('forward')"
           src="../assets/svg-icons/arrow-right-s-fill.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img v-else-if="['left', 'right'].includes(options.scroller_position) && options.scroller_button_style === 'line'" 
           @click="moveThumbs('forward')"
           src="../assets/svg-icons/arrow-down-s-line.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
      <img v-else-if="['left', 'right'].includes(options.scroller_position) && options.scroller_button_style === 'fill'" 
           @click="moveThumbs('forward')"
           src="../assets/svg-icons/arrow-down-s-fill.svg"
           class="zoomer-control responsive-image"
           alt="move thumb icon"
      >
    </div>
    <div :id="pane_container_id" class="pane-container"></div>
  </div>
</template>

<script>
import Drift from "../assets/drift-zoom/src/js/Drift.js";
function getCaculatedPanePosition(paneStyle = 'pane', rect, scrollerPosition) {
  console.log(scrollerPosition)
  let customStyle = "";
  switch (scrollerPosition) {
    case 'left':
      customStyle =
          "width:" +
          rect.width +
          "px;height:" +
          rect.height +
          "px;left:" +
          (rect.right + window.scrollX + 5) +
          "px;top:" +
          (rect.top + window.scrollY) +
          "px;";
      break;
    case 'right':
      customStyle =
          "width:" +
          rect.width +
          "px;height:" +
          rect.height +
          "px;right:" +
          (rect.left - 5) +
          "px;";
      console.log(customStyle);
      break;
    case 'top':

      break;
    case 'bottom':

      break;
  }
  if (paneStyle === "pane") {
    
  } else {
    customStyle =
      "width:" +
      rect.width +
      "px;height:" +
      (rect.height + 2) +
      "px;left:" +
      (rect.x + window.scrollX) +
      "px;top:" +
      (rect.top + window.scrollY) +
      "px;";
  }
  return customStyle;
}

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
        zoomFactor: 4,
        pane: "container",
        hoverDelay: 300,
        namespace: "container-zoomer",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#ff3d00",
        scroller_button_style: "line",
        scroller_position: "right",
        preview_ratio_thumb: "4"
      }
    };
  },
  computed: {
    base_container_div: function() {
      return document.querySelector('.' + this.options.namespace + '-base-container');
    },
    pane_container_id: function() {
      return this.options.namespace + "-pane-container";
    },
    preview_img: function() {
      return '.' + this.options.namespace + '-base-container .preview-box';
    }
  },
  mounted() {
    if (!["left", "right", "top", "bottom"].includes(this.options.scroller_position)) {
        throw "scroller_position is invalid";
    }
    if (!["fill", "line"].includes(this.options.scroller_button_style)) {
        throw "scroller_button_style is invalid";
    }
    window.addEventListener('load', () => {
        switch (this.options.scroller_position) {
          case "left":
            this.base_container_div.setAttribute("style", "grid-template-columns:1fr " + this.options.preview_ratio_thumb + "fr;");
            this.scrollerAtLeft();
            break;
          case "bottom":
            this.base_container_div.setAttribute("style", "grid-template-rows:" + this.options.preview_ratio_thumb + "fr 1fr;");
            this.scrollerAtBottom();
            break;
          case "right":
            this.scrollerAtRight();
            break;
          case "top":
            this.base_container_div.setAttribute("style", "grid-template-rows:" + this.options.preview_ratio_thumb + "fr 1fr;");
            this.scrollerAtTop();
            break;
          default:
            this.scrollerAtBottom();
            break;
        }

        this.options.injectBaseStyles = true;
        if (this.options.pane === "container-round") {
          this.options.inlinePane = true;
        } else {
          this.options.inlinePane = false;
          this.options.paneContainer = document.getElementById(this.pane_container_id);
          let rect = document.querySelector("." + this.options.namespace + "-base-container").getBoundingClientRect();
          document.getElementById(this.pane_container_id).setAttribute("style", getCaculatedPanePosition(this.options.pane, rect, this.options.scroller_position));
        }
        this.drift = new Drift(
          document.querySelector(this.preview_img),
          this.options
        );
    })
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
      throw "Product Zoomer Need Normal Size Image At Least!!!";
    }
    if (this.thumbs.length === 0) {
      this.thumbs = Object.assign([], this.normal_size);
    } else {
      this.choosedThumb = this.thumbs[0];
    }
    if (this.large_size.length === 0) {
      this.large_size = Object.assign([], this.normal_size);
    }
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
      if (direction === "backward") {
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
    },
    scrollerAtBottom() {
      let scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2
      document
          .querySelector(".scroller-at-bottom .thumb-list")
          .setAttribute(
            "style",
            "grid-template-columns:calc(100%/" + scrollerItemsCount + "/2) repeat(" + 
               (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;"
          );
    },
    scrollerAtTop() {
      let scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2
      document
          .querySelector(".scroller-at-top .thumb-list")
          .setAttribute(
            "style",
            "grid-template-columns:calc(100%/" + scrollerItemsCount + "/2) repeat(" + 
               (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;"
          );
    },
    scrollerAtRight() {
      let scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      let previewImg = document.querySelector('.preview-box');
      let thumbList = document.querySelector(".scroller-at-right .thumb-list");
      document
          .querySelector(".scroller-at-right")
          .setAttribute(
            "style",
            "width:" + (previewImg.naturalWidth + thumbList.children[1].naturalWidth) + "px"
          );
      document
          .querySelector(".scroller-at-right .thumb-list")
          .setAttribute(
            "style",
            "height:" + previewImg.naturalWidth + "px;width:"+ thumbList.children[1].naturalWidth + "px;grid-template-rows:calc(100%/" + scrollerItemsCount + "/2) repeat(" + 
               (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;"
          );   
    },
    scrollerAtLeft() {
      let scrollerItemsCount = parseInt(this.baseZoomerOptions.scroll_items) + 2;
      let height = document.querySelector('.preview-box').height;
      document
          .querySelector(".scroller-at-left .thumb-list")
          .setAttribute(
            "style",
            "height:" + height + "px;grid-template-rows:calc(100%/" + scrollerItemsCount + "/2) repeat(" + 
               (scrollerItemsCount - 2) + ", auto) calc(100%/" + scrollerItemsCount + "/2);visibility:visible;"
          );    
    }
  }
};
</script>
<style>
@import "../assets/drift-zoom/src/css/drift-basic.css";
</style>

<style scoped>
.scroller-at-top {
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: 1fr;
  align-items: center;
}

.scroller-at-top .preview-box {
  grid-column: 1 / 2;
  grid-row: 2 / 3 ;
}

.scroller-at-top .thumb-list {
  display: grid;
  align-items: center;
  grid-column-gap: 0.2em;
  grid-column: 1 / 2;
  grid-row: 1 / 2 ;
  visibility: hidden;
}
.scroller-at-bottom {
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: 1fr;
  align-items: center;
}

.scroller-at-bottom .preview-box {
  grid-column: 1 / 2;
  grid-row: 1 / 2 ;
}

.scroller-at-bottom .thumb-list {
  display: grid;
  align-items: center;
  grid-column-gap: 0.2em;
  grid-column: 1 / 2;
  grid-row: 2 / 3 ;
  visibility: hidden;
}

.scroller-at-left {
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: 2fr;
  justify-items: center;
}

.scroller-at-left .preview-box {
  grid-column: 2 / 3;
  grid-row: 1 / 2 ;
}

.scroller-at-left .thumb-list {
  display: grid;
  grid-row-gap: 0.2em;
  grid-column: 1 / 2;
  grid-row: 1 / 2 ;
  visibility: hidden;
  justify-items: center;
}

.scroller-at-right {
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: 1fr;
}

.scroller-at-right .preview-box {
  grid-column: 1 / 2;
  grid-row: 1 / 2 ;
}

.scroller-at-right .thumb-list {
  display: grid;
  grid-row-gap: 0.2em;
  grid-column: 2 / 3;
  grid-row: 1 / 2 ;
  visibility: hidden;
  justify-items: center;
}


.scroller-at-right .thumb-list .responsive-image, .scroller-at-left .thumb-list .responsive-image {
  width: auto;
  height: 100%;
}

.scroller-at-top .thumb-list .responsive-image, .scroller-at-bottom .thumb-list .responsive-image {
  height: auto;
  width: 100%;
}

.zoomer-control {
  cursor: pointer;
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
</style>
