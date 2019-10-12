<template>
    <div class="home">
        <tree :list="list" />
    </div>
</template>

<script>
import tree from "../../components/tree/tree";
export default {
    components: { tree },
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
                                    name: "style.css",
                                    children: [{ name: "第三层" }]
                                }
                            ]
                        },
                        {
                            name: "js",
                            children: [
                                {
                                    name: "index.js"
                                }
                            ]
                        },
                        {
                            name: "index.html"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>