<template>
  <div :class="base_container">
      <img
        :src="previewImg.url"
        :data-zoom="previewLargeImg.url"
        class="responsive-image preview-box"
        draggable="false"
      >
    <div class="thumb-list">
      <img @click="moveThumbs('left')" src="../assets/svg-icons/arrow-left-s-line.svg" class="zoomer-control" alt="move icon">
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
      <img @click="moveThumbs('right')" src="../assets/svg-icons/arrow-right-s-line.svg" class="zoomer-control" alt="move icon">
    </div>
    <div :id="pane_id" class="pane-container"></div>
  </div>
</template>

<script>
import Drift from "../assets/drift-zoom/src/js/Drift.js";

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
        move_button_style: "chevron",
        scroller_position: "bottom"
      }
    };
  },
  computed: {
    base_container: function() {
      return this.options.namespace + "-base-container scroller-at-bottom";
    },
    pane_id: function() {
      return this.options.namespace + "-pane-container";
    },
    move_button: function() {
      return this.options.move_button_style === "chevron"
        ? {
            left: "chevron-left",
            right: "chevron-right",
            top: "chevron-top",
            bottom: "chevron-bottom",
          }
        : {
            left: "angle-double-left",
            right: "angle-double-right",
            top: "angle-double-top",
            bottom: "angle-double-bottom",
          };
    }
  },
  mounted() {
    window.addEventListener('load', () => {
        switch (this.options.scroller_position) {
          case "left":
            this.scrollerAtLeft();
            break;
          case "bottom":
            this.scrollerAtBottom();
            break;
          case "right":
            this.scrollerAtRight();
            break;
          case "top":
            this.scrollerAtTop();
            break;
          default:
            this.scrollerAtBottom();
            break;
        }
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
      if (this.options.pane === "container-round") {
        this.options.inlinePane = true;
      } else {
        this.options.inlinePane = false;
        this.options.paneContainer = document.getElementById(this.pane_id);
        let rect = document.querySelector("." + this.options.namespace + "-base-container");
        let customStyle = "";
        if (this.options.pane === "pane") {
          customStyle =
            "width:" +
            rect.getBoundingClientRect().width * 1.2 +
            "px;height:" +
            rect.getBoundingClientRect().height +
            "px;left:" +
            (rect.getBoundingClientRect().right + window.scrollX + 5) +
            "px;top:" +
            (rect.getBoundingClientRect().top + window.scrollY) +
            "px;";
        } else {
          customStyle =
            "width:" +
            rect.getBoundingClientRect().width +
            "px;height:" +
            (rect.getBoundingClientRect().height + 2) +
            "px;left:" +
            (rect.getBoundingClientRect().x + window.scrollX) +
            "px;top:" +
            (rect.getBoundingClientRect().top + window.scrollY) +
            "px;";
        }
        this.options.paneContainer.setAttribute("style", customStyle);
      }

      this.options.injectBaseStyles = true;
      let previewImg = ".preview-box";
      this.drift = new Drift(
        document.querySelector(previewImg),
        this.options
      );
    },
    scrollerAtTop() {

    },
    scrollerAtRight() {
      
    },
    scrollerAtLeft() {
      
    }
  }
};
</script>
<style>
@import "../assets/drift-zoom/src/css/drift-basic.css";
</style>

<style scoped>
.scroller-at-bottom {
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr;
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

.scroller-at-right {
  
}

.scroller-at-left {
  
}

.scroller-at-top {
  
}

.responsive-image {
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
