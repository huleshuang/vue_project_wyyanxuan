<template>
  <div>
    <TopHeader/>

    <div class="swiper-container" v-if="shiwu.shiwu.banner.length>3">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in shiwu.shiwu.banner" :key="index">
          <img v-bind:src="item.picUrl" />
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>

    <DetailScroll :scroll="shiwu.shiwu.column"/>

    <DetailItem :detail="shiwu.shiwu"/>

    <QuarterPastTen :detail="shiwu.shiwu"/>

    <DetailLoolk :detail="shiwu.shiwu"/>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import TopHeader from '../../components/loginTopHeader/loginTopHeader'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import DetailScroll from '../../components/DetailScroll/DetailScroll'
  import DetailItem from '../../components/DetailItem/DetailItem'
  import QuarterPastTen from '../../components/QuarterPastTen/QuarterPastTen'
  import DetailLoolk from '../../components/DetailLoolk/DetailLoolk'
  export default {

    mounted(){
      this.$store.dispatch('getShiweu')
    },

    computed:{
      ...mapState(['shiwu'])
    },

    components:{
      TopHeader,
      DetailScroll,
      DetailItem,
      QuarterPastTen,
      DetailLoolk
    },

    watch:{
      //监听--->状态改变--->回调函数
      shiwu(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,

            autoplay: { //自动轮播
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },

            keyboard: { //键盘使用
              enabled: true,
              onlyInViewport: true,
            },

            //设置
            slidesPerView: 1.15,
            spaceBetween: 10, //间距
            centeredSlides:true  //左右间距
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-slide
    width 650px
    height 350px
    /*padding 20px*/
    img
      width 100%
      height 100%


  .content
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width 440px
      height 200px
      background-color: rgba(255,255,255,.9);
      .subTitle
        position relative
        font-size 15px
        color #7f7f7f
        line-height 15px
        padding 15px

      .title
        font-size 15px
        line-height 15px
        color #333
        margin-top 30px
        font-weight 700
      .desc
        margin-top 20px
        font-size 30px

</style>
