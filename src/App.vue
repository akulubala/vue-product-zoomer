<template>
  <div>
    <div class="tabs">
      <ul>
        <li :class="{ 'is-active': show == 1}">
          <a @click="showDemo(1)">Demo One</a>
        </li>
        <li :class="{ 'is-active': show == 2}">
          <a @click="showDemo(2)">Demo Two</a>
        </li>
        <li :class="{ 'is-active': show == 3}">
          <a @click="showDemo(3)">Demo Three</a>
        </li>
        <li :class="{ 'is-active': show == 4}">
          <a href="http://www.yoohooworld.com/#/">Documents</a>
        </li>
      </ul>
    </div>
    <div class="columns" id="pane-container" v-show="show == 1">
      <div class="column is-4 is-offset-2">
        <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"/>
      </div>
      <div class="column is-4 content">
        <h5 class="is-size-4">With A Pane Container Zoomer</h5>
        <p>
          <pre>
            <code>
"zoomerOptions": {
    "zoomFactor": 3,
    "pane": "pane",
    "hoverDelay": 300,
    "namespace": "zoomer",
    "move_by_click":false,
    "scroll_items": 7,
    "choosed_thumb_border_color": "#dd2c00"
}
            </code>
        </pre>
        </p>
      </div>
    </div>
    <div class="columns" id="pane-container-round" v-show="show == 2">
      <div class="column is-4 is-offset-2">
        <ProductZoomer :base-images="images" :base-zoomer-options="containerRoundOptions"/>
      </div>
      <div class="column is-4 content">
        <h5 class="is-size-4">Inside Zoomer Container With Round Effect</h5>
        <p>
          <pre>
            <code>
"containerRoundOptions": {
  "zoomFactor": 4,
  "pane": "container-round",
  "hoverDelay": 300,
  "namespace": "inline-zoomer",
  "move_by_click":true,
  "scroll_items": 5,
  "choosed_thumb_border_color": "#bbdefb"
}
            </code>
        </pre>
        </p>
      </div>
    </div>
    <div class="columns" id="inside-container" v-if="show == 3">
      <div class="column is-4 is-offset-2">
        <ProductZoomer :base-images="images" :base-zoomer-options="containerOptions"/>
      </div>
      <div class="column is-4 content">
        <h5 class="is-size-4">Inside Zoomer Container</h5>
        <p>
          <pre>
            <code>
"containerOptions": {
  "zoomFactor": 4,
  "pane": "container",
  "hoverDelay": 300,
  "namespace": "container-zoomer",
  "move_by_click":true,
  "scroll_items": 4
}
            </code>
          </pre>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductZoomer from "./components/ProductZoomer";
export default {
  name: "app",
  data() {
    return {
      show: 1,
      images: {
        thumbs: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/9.jpeg"
          }
        ],
        normal_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/9.jpeg"
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/9.jpeg"
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer",
        move_by_click: false,
        scroll_items: 7,
        choosed_thumb_border_color: "#dd2c00"
      },
      containerRoundOptions: {
        zoomFactor: 4,
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-zoomer",
        move_by_click: true,
        scroll_items: 5,
        choosed_thumb_border_color: "#bbdefb"
      },
      containerOptions: {
        zoomFactor: 4,
        pane: "inside-container",
        hoverDelay: 300,
        namespace: "container-zoomer",
        move_by_click: true,
        scroll_items: 4
      }
    };
  },
  methods: {
    showDemo(index) {
      this.show = index;
    }
  },
  components: {
    ProductZoomer
  }
};
</script>
<style>
</style>


