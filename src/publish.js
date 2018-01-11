import ProductZoomer from './components/ProductZoomer'
export default ProductZoomer

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ProductZoomer', ProductZoomer)
}
