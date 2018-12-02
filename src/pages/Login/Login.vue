<template>
  <div class="div_container">
    <div class="headerLogo">
      <i class="iconfont icon-home" @click="$router.replace('/homepage')"></i>
      <span class="wangyi">网易严选</span>
      <i class="iconfont icon-sousuo1"></i>
      <i class="iconfont icon-gouwuche1"></i>
    </div>

    <div class="img_div">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
    </div>

    <button class="login_phone" @click="$router.replace('/phoneLogin')">
      <i class="iconfont icon-shouji1"></i>
      <span>手机号码登录</span>
    </button>

    <button class="login_email" @click="$router.replace('/emailLogin')">
      <i class="iconfont icon-youxiang"></i>
      <span>邮箱账号登录</span>
    </button>

    <div class="no_register">
      <a href="javascript:;">手机号快捷注册</a>
      <i class="iconfont icon-jiantouyou"></i>
    </div>

    <div class="footer">
      <div class="weixin">
        <span>
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </span>
      </div>

      <span class="one">|</span>

      <div class="qq">
        <span>
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </span>
      </div>

      <span class="two">|</span>

      <div class="weibo">
        <span>
          <i class="iconfont icon-weobo"></i>
          <span>微博</span>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
  import loginTopHeader from '../../components/loginTopHeader/loginTopHeader'
  export default {
    data() {
      return {

      }
    },

    components:{
      loginTopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .div_container
    background #f3f5f7
    width 100%
    height 100%
    position relative
    .headerLogo
      background #fff
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
    .img_div
      width 300px
      height 100px
      img
        width 100%
        height 100%
        margin 200px 250px
    .login_phone
        display block
        width 90%
        height 90px
        margin 400px auto
        border-radius 4px
        color white
        background  #b4282d
        text-align center
        font-size 36px
        line-height 42px
        border 1px solid #b4282d
        .icon-shouji1
          font-size 50px
    .login_email
       display block
       width 90%
       height 90px
       margin -360px auto
       border-radius 4px
       color #b4282d
       text-align center
       font-size 36px
       line-height 42px
       background #f3f5f7
       border 1px solid #b4282d
       .icon-youxiang
         font-size 40px
    .no_register
      position: absolute
      bottom 450px
      left 280px
    .footer
        position absolute
        bottom 50px
        display flex
        margin-left 20%
        color #999
        .qq
          padding 0 10px
        .one,.two
          padding 0 30px

</style>
