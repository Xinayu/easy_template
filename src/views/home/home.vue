<template>
    <div class="home">
        <div class="file-wrapper">
            <tree :treeList="list" />
        </div>
        <div class="textEdit-wrapper">
            <textEdit />
        </div>
    </div>
</template>

<script>
import tree from "../../components/tree/tree";
import textEdit from "../../components/textEdit/textEdit";
export default {
    components: { tree, textEdit },
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
                                            tplSrc: "http://www.hao123.com"
                                        }
                                    ]
                                },
                                {
                                    name: "style.css",
                                    tplSrc: "http://www.hao123.com"
                                }
                            ]
                        },
                        {
                            name: "js",
                            children: [
                                {
                                    name: "index.js",
                                    tplSrc: "http://www.hao123.com"
                                }
                            ]
                        },
                        {
                            name: "index.html",
                            tplSrc: "http://www.hao123.com"
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