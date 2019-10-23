<template>
    <ul :class="treeCls">
        <li :class="`${baseCls}-item`" v-for="(it,index) in treeList" :key="index">
            <div :class="`${baseCls}-line`" @click="getTreeNode(it,treeLevel,index)">
                <span
                    :class="[baseCls+'-type',it.children?baseCls+'-type-folder':baseCls+'-type-file']"
                ></span>
                <span :class="`${baseCls}-name`">{{it.name}}</span>
            </div>
            <transition name="fade">
                <tree v-if="it.children" :treeList="it.children" :level="treeLevel"></tree>
            </transition>
        </li>
    </ul>
</template>

<script>
// vuex 辅助函数
import { mapMutations } from "vuex";

export default {
    name: "tree",
    data() {
        return {
            treeLevel: this.level
        };
    },
    props: {
        treeList: { type: Array },
        level: { type: Number, default: 0 },
        baseCls: { type: String, default: "tree" }
    },
    created() {
        this.treeLevel++;
    },
    computed: {
        treeCls() {
            if (this.treeLevel > 1) {
                return [this.baseCls + "-box"];
            } else {
                return [this.baseCls + "-box", this.baseCls + "-root"];
            }
        }
    },
    methods: {
        ...mapMutations({
            changeVal: "code/changeVal"
        }),
        getTreeNode(node, deepLevel, index) {
            var path = node.tplSrc;
            // Send a POST request
            this.$axios({
                method: "get",
                url: path
            })
                .then(response => {
                    this.changeVal(response.data);
                })
                .catch(() => {});
            window.console.log(node.tplSrc, deepLevel, index);
        },
        // 删除节点
        removeTreeNode(node) {
            window.console.log(node);
        },
        // 增加节点
        addTreeNode(node) {
            window.console.log(node);
        }
    }
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>