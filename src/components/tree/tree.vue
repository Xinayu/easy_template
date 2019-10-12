<template>
    <div>
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="item-name">
                <span
                    class="item"
                    @click="getFilePath(myLevel,index)"
                >{{item.name}}--{{level}}--{{index+1}}</span>
            </div>
            <div v-if="item.children" class="children-item">
                <!-- 反复调用自身 -->
                <tree :list="item.children" :level="myLevel" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tree",
    data() {
        return {
            myLevel: this.level
        };
    },
    props: {
        list: {
            type: Array
        },
        level: {
            type: Number,
            default: 0
        }
    },
    methods: {
        getFilePath(level, index) {
            console.log(level);

            console.log("------------------------------------");
            console.log(this.list[level]);
            console.log("------------------------------------");
        }
    },
    created() {
        this.myLevel++;
    }
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>