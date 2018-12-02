<template>
  <div class="headerLogo">
    <i class="iconfont icon-home" @click="$router.replace('/homepage')"></i>
    <span class="wangyi">网易严选</span>
    <i class="iconfont icon-sousuo1"></i>
    <i class="iconfont icon-gouwuche1"></i>
  </div>
</template>

<script>
  export default {
    name: "loginTopHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headerLogo
    background #f3f5f7
    height 100px
    .icon-home
      font-size 50px
      margin-left 30px
      color #999
      line-height 100px
    .wangyi
      font-size 50px
      color #999
      margin-left 180px
    .icon-sousuo1
      margin-left 110px
      font-size 50px
    .icon-gouwuche1
      margin-left 20px
      font-size 50px
</style>
