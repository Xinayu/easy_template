<template>
    <div class="login-wrapper">
        <div class="login-box">
            <h2 class="title">USER LGOIN</h2>
            <div class="group">
                <span class="ico">
                    <i class="iconfont icon-send-email-"></i>
                </span>
                <input type="text" placeholder="username@example.com" />
            </div>
            <div class="group">
                <span class="ico">
                    <i class="iconfont icon-lock"></i>
                </span>
                <input type="text" placeholder="password" />
            </div>
            <div class="group">
                <span class="ico">
                    <i class="iconfont icon-enter"></i>
                </span>
                <a href="javascript:;" class="btn">LOGIN</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>