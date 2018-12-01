<template>
  <div id="homepage">
    <div class="headerWarp">
      <div class="headerLogo">
        <h1>网易严选</h1>
        <input type="text" class="inputText" placeholder="搜索商品, 共19702款好物"/>
        <i class="iconfont icon-sousuo"></i>
        <a href="javascript:;" class="login" @click="$router.push('/login')">登录</a>
      </div>

      <div class="headerScroll">
        <div class="ulClass">
          <ul class="herderScroList">
            <li v-for="(item,index) in data" :key="index" @click="active(index)" :class="{active:index === activeIndex}">{{item.name}}</li>
          </ul>
        </div>
        <i class="iconfont icon-jiantou-xiao"></i>
      </div>
    </div>

    <div class="swiper-container" v-if="banner.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img v-bind:src="item.picUrl" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="policyDesc">
      <div class="item" v-for="(item,index) in home.home.policyDescList" :key="index">
        <img v-bind:src="item.icon"/>
        <span>{{item.desc}}</span>
      </div>
    </div>

    <div class="slpite">
      <Splite></Splite>
    </div>

    <CateListHome/>

    <div class="b_img">
      <img src="./images/1.png"/>
    </div>


    <div class="BR">
      <div class="hd_branch">
        <h3>品牌制造商</h3>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
      <div class="hd-itemWrap">
        <div class="hd-item" v-for="(item,index) in home.home.tagList" :key="index" v-if="index<4">
          <div class="brDiv">
            <h4>{{item.name}}</h4>
            <div class="title">
              ￥{{item.floorPrice}} 元
            </div>
          </div>
          <img :src="item.picUrl"/>
        </div>
      </div>
    </div>

    <div class="slpite">
      <Splite></Splite>
    </div>

    <div class="BR">
      <div class="hd_branch">
        <h3>人气推荐</h3>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>

      <div class="bigImg" v-for="(item,index) in home.home.popularItemList" :key="index" v-if="index<1">
        <img :src="item.listPicUrl"/>
        <div class="text">
          <p class="scell">
            销售量 &nbsp;{{item.sellVolume}}
          </p>
          <p>
            评价描述:
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;{{item.simpleDesc}}</h3>
          </p>
        </div>
      </div>

      <ul class="imgList_people">
        <li v-for="(item,index) in home.home.popularItemList" :key="index" v-if="index<3">
          <a>
            <img :src="item.listPicUrl"/>
            <p>{{item.name}}</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="slpite">
      <Splite></Splite>
    </div>

    <div class="BR">
      <div class="hd_branch">
        <h3>新品首发</h3>
        <div class="more">
          <span>更多</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>

      <ul class="newItemNewUserList">
        <li class="newItemList" v-for="(item,index) in home.home.popularItemList" :key="index">
          <a href="javascript:;">
            <img :src="item.primaryPicUrl"/>
            <p>{{item.simpleDesc}}</p>
          </a>
        </li>
      </ul>
    </div>

    <div class="slpite">
      <Splite></Splite>
    </div>

    <div class="homefooter">
      <div class="footer_div">
        <a class="ap">下载APP</a>
        <a class="computer">电脑版</a>
       <div class="pp">
         <p>网易公司版权所有 1997-2018</p>
         <p>食品经营许可证：JY13301080111719</p>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState,mapGetters} from 'vuex'
  import Splite from '../../components/Split/Split'
  import CateListHome from '../../components/cateList_home/Categories'
  export default {
    data(){
      return {
        activeIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getData',()=>{
        this.$nextTick(() => {  // 列表数据更新显示后执行滑动
          this._initScroll()
        })

      })

      this.$store.dispatch('getBanner')
      // new Swiper('.swiper-container', {
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      //   loop: true,
      //
      // })

      this.$store.dispatch('getHomeData')
    },

    // computed 计算属性
    computed:{
      ...mapState(['data','banner','home'])
    },

    methods:{
      //是否选中的判断
      active(index){
        this.activeIndex = index
      },
      _initScroll(){  //滑动
        new BScroll('.headerScroll',{
          click: true , //响应点击
          scrollX: true //横向滑动
        })
      },

    },
    watch:{ //设置监听这个方法 是为了解决轮播的问题
      // 更新状态数据==>调用监视的回调函数 ==> 异步更新界面 ==> 执行$nextTick()指定的回调函数
      banner(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,

            autoplay: { //自动轮播
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },

            keyboard: { //键盘使用
              enabled: true,
              onlyInViewport: true,
            },
          })
        })
      }
    },

    components:{
      Splite,
      CateListHome
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #homepage
    color darkgray
    .headerWarp
      position: fixed;
      z-index: 100;
      top: 0;
      background #ffffff
      .headerLogo
        position relative
        display flex
        width 100%
        h1
          font-size 30px
          margin-left 35px
          margin-top 23px
          color darkgray
          font-family Copperplate
          line-height 55px
        input
          background #eee
          width 480px
          height 55px
          margin 16px
          border-radius 10px
       .icon-sousuo
         position: absolute
         top 29px
         left 246px
         color darkgray
       .login
         margin-top 30px
         color: red

      .headerScroll
        display flex
        overflow: hidden;

        .herderScroList
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left 30px
          margin-top 20px

          /*width 80%*/
          /*flex-direction row*/
          li
            width: 70px
            text-align: center
            flex-wrap nowrap
            font-size 30px
            margin 0 5px
            &.active
              padding: 0 0 19px 0;
              border-bottom 3px solid #b4282d;
              color: #b4282d;
        .icon-jiantou-xiao
          margin-top 65px
          margin-left 20px
          color: darkgrey
          font-size 38px

    .swiper-container
      padding-top 190px

      .swiper-wrapper
        .swiper-slide
          img
            width 100%
      .swiper-pagination
        margin 0 20px

    .policyDesc
      margin-bottom 12px
      background #fff
      display flex
      justify-content space-between
      align-items center
      width 100%
      margin-top 20px
      .item
        width 33%
        height 20px
        box-sizing border-box
        padding 0 17px
        img
          width 40px
          vertical-align middle //垂直居中
        span
          font-size 20px
          color #333
          margin-left -13px

    .b_img

      width 100%
      height 335px
      img
        width 100%
        height 100%

    .imgList
      width 100%
      .imgList_cateList
        float left
        width 25%
        a
          width 100px
          height 100px

    .slpite
      margin-top 30px
    .BR
      .hd_branch
        box-sizing border-box
        width 100%
        height 100px
        /*background pink*/
        line-height 100px
        padding 0 20px
        h3
          float left
          color black
        .more
          float right
          color black
          .icon-jiantouyou
            float right
            font-size 40px
      .hd-itemWrap
        box-sizing border-box
        padding 0 20px

        .hd-item
          position relative
          display: inline-block
          margin-bottom: 10px
          margin-left 4px
          width 42%
          height: 240px
          /*overflow hidden*/
          background-color linen
          padding: 22px;
          border: 1px solid #999;
          .brDiv
            position absolute
            top 20px
            left 60px
          img
            width 100%
            height 100%

          h4
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-size 20px
            line-height 50px
            margin-bottom 6px
          .title
            margin-left 20px
            color: red
      .bigImg
        width 690px
        height 279px
        background linen
        margin 0 auto
        img
          width 279px
          height 100%
          float left
        .text
          float right
          margin-top 100px
          margin-right 100px
          font-size 30px
          line-height 40px
          .scell
            color red

      .imgList_people
        width 100%
        height 216px
        display flex
        li
          width 216px
          height 216px
          display flex
          flex 1
          a
            img
              width 100%
              height 100%
            p
              text-align center
              font-size 18px
              margin-top -30px

      .newItemNewUserList
        width 100%
        overflow hidden
        box-sizing border-box
        padding 0 45px
        /*background yellowgreen*/
        .newItemList
          width 216px
          height 334px
          float left
          a

            .img_cate
              width 100%
              height 100%
            p
              text-align center
              font-size 18px
              margin-top -30px

    .homefooter
      width 100%
      background gray
      height 245px

      .footer_div
        color: white
        text-align center
        vertical-align middle
        box-sizing border-box
        padding-top 50px
        a
          color: white
          border 1px solid white
          margin 30px
          font-size 30px
          width 60px
          height 30px

        .ap
          padding 9px 20px
        .computer
          padding 9px 29px
        .pp
          margin-top 27px
          line-height 40px
          font-size 13px

</style>


