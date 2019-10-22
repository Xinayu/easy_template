<template>
    <div class="file-wrapper">
        <h2 class="flie-title">
            <i class="iconfont icon-guanligongju icon-mena"></i>文件管理
            <a
                href="javascript:;"
                class="iconfont icon-shuaxinzhongjieban ico-refresh"
                title="刷新文件夹"
            ></a>
        </h2>
        <tree :treeList="list"></tree>
    </div>
</template>

<script>
import tree from "../../components/tree/tree";
export default {
    props: { list: { type: Array } },
    components: { tree }
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>

