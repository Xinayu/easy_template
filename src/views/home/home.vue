<template>
    <div class="home">
        <treeView :list="list"></treeView>
        <div class="textEdit-wrapper">
            <textEdit></textEdit>
        </div>
    </div>
</template>

<script>
import treeView from "../../components/treeView/treeView";
import textEdit from "../../components/textEdit/textEdit";
export default {
    components: { treeView, textEdit },
    data() {
        return {
            mes: "hello easyTemplate",
            list: [
                {
                    name: "根目录",
                    children: [
                        {
                            name: "css",
                            children: [
                                {
                                    name: "com",
                                    children: [
                                        {
                                            name: "com.css",
                                            tplSrc:
                                                "https://cdn.bootcss.com/animate.css/3.7.2/animate.css"
                                        }
                                    ]
                                },
                                {
                                    name: "style.css",
                                    tplSrc:
                                        "https://cdn.bootcss.com/animate.css/3.7.2/animate.css"
                                }
                            ]
                        },
                        {
                            name: "js",
                            children: [
                                {
                                    name: "index.js",
                                    tplSrc:
                                        "https://cdn.bootcss.com/animate.css/3.7.2/animate.css"
                                }
                            ]
                        },
                        {
                            name: "index.html",
                            tplSrc:
                                "https://cdn.bootcss.com/animate.css/3.7.2/animate.css"
                        }
                    ]
                }
            ]
        };
    },
    created() {}
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>