import ProductZoomer from './components/ProductZoomer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

ProductZoomer.install = (Vue, options) => {
  library.add(faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
export default ProductZoomer;
