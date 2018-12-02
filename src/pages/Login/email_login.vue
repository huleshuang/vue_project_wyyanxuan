<template>
  <div class="phone_contanier">
    <loginTopHeader/>
    <div class="img_div">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
    </div>

    <div class="input_div">
      <div class="idp">
        <input class="phone" type="text" placeholder="邮箱账号"/>
      </div>
      <div class="captch">
        <input class="phone" type="text" placeholder="密码"/>
      </div>

      <div class="p_div">
        <div class="problem">
          <a href="javascript:;">
            注册账号
          </a>
        </div>

        <div class="pwd">
          <a href="javascript:;">
            忘记密码
          </a>
        </div>
      </div>

    </div>

    <button class="login_phone">

      <span>登录</span>
    </button>

    <button class="login_email" @click="$router.replace('/login')">

      <span>其他方式登录</span>
    </button>

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
  .phone_contanier
    width 100%
    height 100%
  .img_div
    width 200px
    height 70px
    img
      width 100%
      height 100%
      margin 50px 250px
  .input_div
    margin-left 50px
    .idp
      margin-top 300px
      width 90%
      height 80px
      border-bottom 1px solid #999
      background #fff
      line-height 80px

      input
        outline: none;

        &::-webkit-input-placeholder
          color: darkgray;
          padding-left: 10px;
    .captch
      margin-top 70px
      width 90%
      height 80px
      border-bottom 1px solid #999
      background #fff
      line-height 80px
      input
        outline: none;
        &::-webkit-input-placeholder
          color: darkgray;
          padding-left: 10px;
      button
        border 1px solid #999
        background #fff
        margin-left 130px
    .p_div
      margin-top 50px
      font-size 30px
      .problem
        float left
      .pwd
        float right
        margin-right 60px
  .login_phone
    display block
    width 90%
    height 90px
    margin 150px auto
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
    margin -130px auto
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
    bottom 150px
    left 280px
</style>
