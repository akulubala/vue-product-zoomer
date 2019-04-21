import Vue from 'vue'
import 'bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronRight,
  faChevronLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faChevronRight,
  faChevronLeft,
  faAngleDoubleRight,
  faAngleDoubleLeft
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
