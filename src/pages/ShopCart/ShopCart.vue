<template>
  <div>
      <div class="headerLogo">
        <span class="wangyi">购物车</span>
        <span class="lingquan">领券</span>
      </div>

      <div class="container">

      </div>
  </div>
</template>

<script>
  import loginTopHeader from '../../components/loginTopHeader/loginTopHeader'
  export default {
    components:{
      loginTopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .headerLogo
      background #fff
      height 60px
      .wangyi
        font-size 40px
        color #999
        margin 100px 300px
        line-height 60px
      .lingquan
        margin-left -120px
        color: red
    .container
      background #f3f5f7
      width 100%
      height 100%
</style>

