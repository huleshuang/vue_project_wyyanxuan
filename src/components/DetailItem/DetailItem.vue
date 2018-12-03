<template>
  <div>
    <div class="m-exploreRcmds" v-if="detail.recommendOne">
      <div class="container">
        <div class="module-title">{{detail.recommendOne.nickname}}</div>
        <div class="m-mainPosItem">
          <div class="imgContainer">
            <img :src="detail.recommendOne.picUrl"/>
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="topicInfo">
        <div class="line1">
          <div class="title">{{detail.recommendOne.typeName}}</div>
          <div class="price">
            <div class="num">{{detail.recommendOne.priceInfo}}</div>
            <div class="unit">元起</div>
          </div>
        </div>
        <div class="line2">
          <div class="subTitle" v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
        </div>
      </div>

      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendTwo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendTwo.subTitle}}</div>
            </div>

          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendTwo.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendThree">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendThree.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      detail: Object
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  .m-exploreRcmds
    .container
      .module-title
        width 100%
        height 100px
        text-align center
        line-height 100px
      .m-mainPosItem
        .imgContainer
          position relative
          width 688px
          height 386px
          margin 0 auto

          img
            width 100%
            height 100%
          .topicTag
            position: absolute
            top 20px
            left 20px
            border 1px solid #eee
            padding 5px 10px
            background #eee
            border-radius 13px

    .topicInfo{
      box-sizing border-box
      border 1px solid #eee
      overflow: hidden;
      position: relative;
      padding:50px 50px
      background-color: #fff;
      .line1{
        margin-bottom: 30px
        display: flex;
        align-items: center;
        line-height: 1.2;
        justify-content: space-between;
        .title{

          font-size: 34px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          display block

        }
        .price{
          margin-right 4px;

          .num{
            float: left;
            font-size: 32px;
          }
          .unit{
            float: left;
            font-size 32px
          }
        }
      }
      .line2{
        .subTitle{
          position: relative;
          font-size: 30px;
          line-height: 1.2;
          color: #7f7f7f;
        }
      }
    }

    .m-minorPosItem
      .topicInfo
        float left
        width 100%
        .author-container
          width 358px
          height 286px
          float: left
          .author
            height: 0.64rem;
            font-size: 0.26666667rem;
            display: -webkit-box;
            display: flex;
            align-items: center;
            .avatar
              width 48px
              height 48px
              float left
              img
                width 100%
                height 100%
                border-radius 50px
          .line1
            margin-top 30px
        .minorPic
          float right
          .imgContainer
            width 279px
            height 279px
            img
              width 100%
              height 100%

</style>
