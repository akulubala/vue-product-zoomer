<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-fullheight">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-4 is-narrow">
            <div class="columns is-vcentered">
              <h1 class="title is-1 has-text-left-tablet">
                <span itemprop="name">Zoomer demonstration One</span>
              </h1>
            </div>
            <div class="has-text-left-tablet">
              <h5 class="subtitle is-5 has-text-left-tablet">
                <span itemprop="description"
                    >Product Zoomer, Scroller At Left, Zoomer Container Within A Div.
                </span>
              </h5>
              <div class="columns is-centered is-vcentered">
                <div class="column">
                  <div class="checkout-wrapper">
                    <div class="checkout">
                      <button class="button is-medium is-success is-rounded">Buy Now →</button>
                      <button
                        class="button is-light is-medium is-rounded paddle_download"
                        href="javascript:;"
                        data-download-url="/updates/Snipper-1.5.1.dmg"
                        data-vendor-name="Tetelz"
                        data-init="true"
                      >Free Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-8 is-narrow">
            <div class="gatsby-image-wrapper">
                <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"/>
            </div>
            <button class="button is-dark">
              <span>Scroller At Left</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductZoomer from "../ProductZoomer";

export default {
  name: "app",
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
        zoomFactor: 3,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer",
        move_by_click: false,
        scroll_items: 4,
        choosed_thumb_border_color: "#dd2c00"
      }
    };
  },
  components: {
    ProductZoomer
  }
};
</script>

