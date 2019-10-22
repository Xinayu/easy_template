<template>
    <div class="textEdit">
        <codemirror ref="mycode" :value="cmOptions.value" :options="cmOptions" class="code"></codemirror>
    </div>
</template>

<script>
// vuex 辅助函数
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";

// theme css
import { codemirror } from "vue-codemirror";
// 主题
import "codemirror/theme/monokai.css";
// 文本格式
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");
export default {
    name: "textEdit",
    components: { codemirror },
    data() {
        return {};
    },
    created() {
        var val = "*{*{margin：0;padding:0}//初始化时候加载的内容}";
        this.changeVal(val);
    },
    methods: {
        ...mapMutations({
            reset: "code/resetState",
            changeVal: "code/changeVal",
            changeMode: "code/changeMode",
            changeTheme: "code/changeTheme"
        }),
        // 改变编辑的内容
        changeContent(val) {
            this.curCode = val || "";
        },
        ...mapActions({
            // resetAsync: "code/resetStateAsync"
        })
    },
    computed: mapState({
        cmOptions(state) {
            return state.code;
        }
    })
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>