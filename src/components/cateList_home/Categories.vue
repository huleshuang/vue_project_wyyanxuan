<template>
  <nav class="category_nav">
    <div class="swiper-container_g">
      <div class="swiper-wrapper">
        <!--拿到一屏所有的商品对象数组-->
        <div class="swiper-slide">
          <!--遍历每一项商品对象 包含图片和名称-->
          <div class="cateList" v-for="(cate,index) in home.home.cateList" :key="index">
            <a href="javascript:;" class="link_to_goods">
              <div class="goods_container">
                <img :src="cate.iconUrl" alt="">
              </div>
              <span>{{cate.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import{mapState} from 'vuex'
  import Swiper from 'swiper'
  export default{
    mounted(){
      new Swiper('.swiper-container_g', {
        loop: false, // 循环模式选项
        autoplay:false
      })
    },
    computed:{
      ...mapState(['home'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .category_nav
    margin-top 0
    .swiper-container_g
      width 100%
      background #FFEDDB
      padding-bottom 30px
      .swiper-wrapper
        width 100%
        /*height 340px*/
        .swiper-slide
          text-align:center;
          font-size 0
          .cateList
            display inline-block
            width 20%
            text-align: center
            .link_to_goods
              display: flex
              flex-direction column
              align-items center
              padding-top 20px
              padding-bottom 40px
              height 110px
              .goods_container
                width 110px
                padding-bottom 5px
                img
                  width 100%
                  height 100%
              span
                font-size 12px
                color #333

</style>
