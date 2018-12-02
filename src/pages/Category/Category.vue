<template>
  <div>
    <div class="headerLogo">
      <input type="text" class="inputText" placeholder="搜索商品, 共19702款好物"/>
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul class="ulli">
          <!--current-->
          <li class="menu-item" v-for="(item, index) in fenlei.fenlei.categoryL1List"
              :key="index">
            <a class="text bottom-border-1px">
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>

      <div class="rightList">

        <div class="shengdian">
          <img src="http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75"/>
        </div>

        <ul class="right_ul_lis">
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144"/>
              <div>三石福利价</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/85b82491e38a8283ef1d18638a70b3ae.png?imageView&quality=85&thumbnail=144x144"/>
              <div>严选明星价</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/6078ca70600b25662a5576236f31fdf6.png?imageView&quality=85&thumbnail=144x144"/>
              <div>开天辟地价</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/876516511abb6a40dcb47579944779b9.png?imageView&quality=85&thumbnail=144x144"/>
              <div>囤货装特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/4416fb0c98002650fdd860713d1fbdbc.png?imageView&quality=85&thumbnail=144x144"/>
              <div>服装特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/9787be8360d5156af0f47727d449a177.png?imageView&quality=85&thumbnail=144x144"/>
              <div>鞋包配饰特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/aefcd5a3e629615e499b50b570b3e525.png?imageView&quality=85&thumbnail=144x144"/>
              <div>爆款美食直降</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/cdb06a5af79a63fae97baee4ec2ded0c.png?imageView&quality=85&thumbnail=144x144"/>
              <div>精款美食</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/764a01617ef6dec680ac3dcaf34ebb81.png?imageView&quality=85&thumbnail=144x144"/>
              <div>大家都在搜</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/25294c2cf0bc082576b8bbf3e0282204.png?imageView&quality=85&thumbnail=144x144"/>
              <div>百分百好评</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/d365f7e40358cabd2968cb467df5e1fd.png?imageView&quality=85&thumbnail=144x144"/>
              <div>百元暖冬好物</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/65ea6437731840ba697a33b543b8c9cd.png?imageView&quality=85&thumbnail=144x144"/>
              <div>懒人专属定制</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/c27680e52838f793fcc5ff941cb3907a.png?imageView&quality=85&thumbnail=144x144"/>
              <div>防霾必备神奇</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/85b82491e38a8283ef1d18638a70b3ae.png?imageView&quality=85&thumbnail=144x144"/>
              <div>严选明星价</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/6078ca70600b25662a5576236f31fdf6.png?imageView&quality=85&thumbnail=144x144"/>
              <div>开天辟地价</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/876516511abb6a40dcb47579944779b9.png?imageView&quality=85&thumbnail=144x144"/>
              <div>囤货装特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/4416fb0c98002650fdd860713d1fbdbc.png?imageView&quality=85&thumbnail=144x144"/>
              <div>服装特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/9787be8360d5156af0f47727d449a177.png?imageView&quality=85&thumbnail=144x144"/>
              <div>鞋包配饰特惠</div>
            </a>
          </li>

          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/876516511abb6a40dcb47579944779b9.png?imageView&quality=85&thumbnail=144x144"/>
              <div>囤货装特惠</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="http://yanxuan.nosdn.127.net/4416fb0c98002650fdd860713d1fbdbc.png?imageView&quality=85&thumbnail=144x144"/>
              <div>服装特惠</div>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    //发送异步请求
    mounted(){
      this.$store.dispatch('getFenlei',()=>{
        this.$nextTick(()=>{
          new BScroll('.rightList',{
            click: true , //响应点击
            scrollY: true //横向滑动
          })
        })
      })
    },

    computed:{
      ...mapState(['fenlei'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .headerLogo
    position relative
    display flex
    width 100%
    input
      background #eee
      width 1900px
      height 65px
      margin 40px 40px
      border-radius 10px
      &::-webkit-input-placeholder
        color: darkgray;
        padding-left: 200px;
        font-size: 22px;

    .icon-sousuo
      position: absolute
      top 60px
      left 201px
      color darkgray
  bottom-border-1px(rgba(7, 17, 27, 0.1))
  .goods
    display: flex
    position: absolute
    top: 135px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 500px
      background:white
      border 1px solid #eee
      .menu-item
        display table
        height: 54px
        width: 136px
        padding: 0 18px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .text
          display: table-cell
          width: 70px
          margin-top 40px
          padding-top 70px
          vertical-align: middle

          font-size: 28px
  .rightList
    border 1px solid #eee
    .right_ul_lis
      li
        width 145px
        height 145px
        float left
        padding 0 10px
        margin-left 30px
        margin-top 20px
        img
          width 100%
          height 100%
        div
          font-size 12px
          text-align center
    .shengdian
      width 528px
      height 192px
      margin 20px 0 0 40px
      img
        width 100%
        height 100%


</style>
