<template>
  <div>识物</div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {

    mounted(){
      this.$store.dispatch('getShiweu')
    },

    computed:{
      ...mapState(['shiwu'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
