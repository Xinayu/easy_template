/**
 * vuex状态管理
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import code from './modules/code' //文本编辑器状态


export default new Vuex.Store({
    modules: {
        code
    }
})