<template>
  <div class="phone_contanier">
    <loginTopHeader/>
    <div class="img_div">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
    </div>

    <div class="input_div">

      <div class="idp">
        <input class="username" type="text" placeholder="手机/邮箱/用户名" v-model="username"/>
      </div>

      <div class="password">
        <input class="pws" :type="isShowPwd ? 'text':'password' " placeholder="密码" v-model="password"/>
        <div class="switch_button" :class="isShowPwd ? 'on' : 'off' " @click="isShowPwd=!isShowPwd">
          <div class="switch_circle" :class="{right:isShowPwd}"></div>
          <span class="switch_text">{{isShowPwd ? 'abc': ''}}</span>
        </div>
      </div>

      <div class="captch">
        <input class="phone" type="text" placeholder="验证码" v-model="captch" @click="upadteCaptch"/>
        <img ref="captcha" src="./images/captcha.svg" />
      </div>

      <div class="p_div">
        <div class="problem">
          <a href="javascript:;">
            遇到问题 ？
          </a>
        </div>

        <div class="pwd">
          <a href="javascript:;">
            使用密码验证登录
          </a>
        </div>
      </div>

    </div>

    <button class="login_phone" @click.prevent="login">
      <span>登录</span>
    </button>

    <button class="login_email" @click="$router.replace('/login')">
      <span >其他方式登录</span>
    </button>

    <div class="no_register">
      <a href="javascript:;">注册账号</a>
      <i class="iconfont icon-jiantouyou"></i>
    </div>

  </div>
</template>

<script>
  import loginTopHeader from '../../components/loginTopHeader/loginTopHeader'
  import {reqUserLogin} from '../../api'
  import {Toast,MessageBox}  from 'mint-ui'
  export default {
    data(){
      return {
        username:'',
        password:'',
        captch:'',
        isShowPwd:false //密码是否可见 false 代表不可见
      }
    },

    computed:{
      //手机验证码校验

    },

    methods:{
      //更新图片验证码,随着时间的更新
      upadteCaptch(){
        this.$refs.captcha.src = './images/captcha.svg?time'+Date.now()
      },
      /**
       * 验证登录的方法
       * @returns {Promise<void>}
       */
      async login(){

        //拿取到表单里的数据
        const {username,password,captch,isShowPwd} = this

        MessageBox.alert('登陆已进入')

        if(!name){
          MessageBox.alert('请输入用户名')
        }else if(!password){
          MessageBox.alert('请输入密码')
        }else if(!captch){
          MessageBox.alert('请输入图片验证码')
        }

        //发送ajax请求，
        const result = await reqUserLogin({username,password,captch})
        //判断登陆的结果 则更新一下图片验证码
        if(result.code!==0){
          this.upadteCaptch()
          MessageBox.alert('登录失败')
        }


        if(result.code===0){
          //发送成功
          if(username ==='hls' &&  password ==='111' ){
            MessageBox.alert('登陆成功')
            this.$router.push('/homepage')
          }
        }
      }
    },

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
    .password
      margin-top 60px
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
      .switch_button
          font-size 30px
          border 1px solid #ddd
          border-radius 8px
          transition background-color .3s,border-color .3s
          padding 0 6px
          width 60px
          height 25px
          line-height 16px
          color #fff
          position absolute
          top 48.5%
          right 90px
          transform translateY(-50%)
          &.off
            background #fff
            .switch_text
              float right
              color #ddd
          &.on
            background #02a774
          >.switch_circle
            //transform translateX(27px)
            position absolute
            top -1px
            left -1px
            width 20px
            height 23px
            border 1px solid #ddd
            border-radius 50%
            background #fff
            box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
            transition transform .3s
            &.right
              transform translateX(52px)

    .captch
      position relative
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
      img
        position absolute
        top -20px
        right -10px
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
    margin 200px auto
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
    margin -160px auto
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
    bottom 10px
    left 280px
</style>
