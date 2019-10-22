/**
 * 编辑器相关的状态
 */


//  -------------------- state
// 默认的状态
const _defaultState = {
    value: '富文本编辑器',
    mode: "text/css",
    theme: "monokai",
    readOnly: false,
    tabSize: 4,
    indentWithTabs: true,
    line: true,
    smartIndent: true,
    lineNumbers: true,
    showCursorWhenSelecting: true,
    lineWrapping: true, //代码折叠
}


const state = {
    ..._defaultState
}

// getters
const getters = {}

//  -------------------- mutation
const mutations = {
    // 重置配置
    resetState(state) {
        state = _defaultState
    },
    // 改变文件类型
    changeMode(state, type) {
        state.mode = type
    },
    // 改变文本框内容
    changeVal(state, val) {
        state.value = val || ''
    },
    // 改变主题
    changeTheme(state, theme) {
        state.theme = theme || 'text/css'
    }
}

//  -------------------- action 


const actions = {
    // aciton可以执行异步操作
    // 比如请求完数据后再进行motations操作
    // resetStateAsync({ commit }) {
    //     commit('resetState')
    // }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}