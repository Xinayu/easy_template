<template>
    <div class="textEdit">
        <codemirror ref="mycode" :value="curCode" :options="cmOptions" class="code"></codemirror>
    </div>
</template>

<script>
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
        return {
            curCode: "*{margin:0 auto}",
            cmOptions: {
                value: "",
                mode: "text/css",
                theme: "monokai",
                readOnly: false,
                indentWithTabs: true,
                smartIndent: true,
                lineNumbers: true,
                showCursorWhenSelecting: true
            }
        };
    },
    created() {}
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>