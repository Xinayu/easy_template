import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// vuex
import store from './vuex/store'
// codemirror
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
// axios
import axios from 'axios'


Vue.prototype.$axios = axios;

Vue.use(VueCodeMirror)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')