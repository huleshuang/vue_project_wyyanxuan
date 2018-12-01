<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/homepage'}" @click="goToPath('/homepage')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/categorys'}" @click="goToPath('/categorys')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/dstance'}" @click="goToPath('/dstance')">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
    <span>识物</span>
  </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/shopcart'}" @click="goToPath('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path === '/personal'}" @click="goToPath('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>

  </footer>
</template>

<script>
  export default {
    methods:{
      goToPath(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.footer_guide
  position: fixed;
  z-index: 100;
  bottom: 0;
  top-border-1px(#e4e4e4)
  position: fixed
  bottom 0
  left 0
  right 0
  width 100%
  height 50px
  background white
  display: flex
  .guide_item
    display: flex
    flex-direction column
    align-items center
    flex 1 //等分
    text-align center
    margin 5px 0
    color #999
    &.on
      color: red
    span
      font-size 12px
      margin-top 2px
      .iconfont
        font-size 40px

</style>
