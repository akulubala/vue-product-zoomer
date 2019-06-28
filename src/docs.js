import Vue from 'vue'
import 'bulma/css/bulma.css'
import ProductZoomer from "../dist/assets/js/app.bundle.js";
import App from './App'

Vue.config.productionTip = false
Vue.use(ProductZoomer)

new Vue({
  render: h => h(App)
}).$mount('#app')
