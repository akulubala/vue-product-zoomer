import Vue from 'vue'
import 'bulma/css/bulma.css'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
