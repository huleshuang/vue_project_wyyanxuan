<template>
  <div>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll">
          <div class="imgContainer">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>

   <div class="splite">
     <Splite></Splite>
   </div>

  </div>
</template>

<script>
  import Splite from '../../components/Split/Split'
  import BScroll from 'better-scroll'
  export default {
    props:{
      scroll: Array,
      createScroll: Function
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true,

        })
      })
    },

    components:{
      Splite
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .m-exploreChannels
    overflow hidden
    padding 15px 15px 15px
    height: 250px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;

    .scroll-wrap
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;

      display: flex;
      flex-wrap: nowrap;
      .scroll-item
        position: relative;
        width: 164px
        height: 164px
        margin-right: 40px;
        .imgContainer
          img
            width 100%
            height:100%
            border-radius 13px


        .title
          color: #333;
          font-size: 20px;
          line-height: 1;
          text-align: center;
          width: 200px;
          margin-left -20px
          margin-top 20px


        .topNum
          font-size: 13px;
          position: absolute;
          top: -10px;
          right: 15px;
          width: 300px;
          height: 60px;
          color: #fff
          line-height: 60px;
          text-align: right;
  .splite
    margin-top -40px
</style>
