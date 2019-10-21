import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')