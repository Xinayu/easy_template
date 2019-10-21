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
        getTreeNode(node, deepLevel, index) {
            console.log(`${deepLevel}-${index}`);
        },
        // 删除节点
        removeTreeNode(node) {
            console.log(node);
        },
        // 增加节点
        addTreeNode(node) {
            console.log(node);
        }
    }
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>