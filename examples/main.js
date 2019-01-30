import Vue from 'vue'
import App from './App.vue'
import SniptUi from '../packages/index'

import '../packages/theme/src/index.css'

Vue.use(SniptUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
