<template>
  <section class="hero is-fullheight" id="container-round">
    <div class="hero-body is-fullheight">
      <div class="container">
        <div class="columns is-centered is-vcentered">
              <div style="margin-right: 2em">
                <h1 class="title is-4 has-text-centered">
                  <span itemprop="name">Inside Round & Pane Bottom</span>
                </h1>
                <pre>
<code class="javascript">
  let zoomerOptions = {
      "zoomFactor": 4,
      "pane": "container-round",
      "hoverDelay": 300,
      "namespace": "inline-round-zoomer",
      "move_by_click":true,
      "scroll_items": 5,
      "choosed_thumb_border_color": "#bbdefb"
  }
</code>
</pre>
              </div>
              <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductZoomer from "../ProductZoomer";

export default {
  name: "inside-round",
  data() {
    return {
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
        zoomFactor: 4,
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-round",
        move_by_click: false,
        scroll_items: 7,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "bottom"
      }
    };
  },
  components: {
    ProductZoomer
  }
};
</script>

