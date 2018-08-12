// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronRight, faChevronLeft, faAngleDoubleRight, faAngleDoubleLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
