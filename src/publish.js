import Zoomer from './components/ProductZoomer'

const ProductZoomer = {
  install(Vue, options) {
    Vue.component(Zoomer.name, Zoomer)
  }
}

export default ProductZoomer
