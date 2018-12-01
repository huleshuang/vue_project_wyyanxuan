/*
  通过 actions模块 commit()提交 异步获取
      触发对应mutations模块的方法
 */

import {REECIVE_DATA,RECEIVE_BANNER,RECEIVE_HOME,RECEIVE_FENLEI} from './mutations-type'
import {reqData,reqBanner,reqHome,reqFenlei} from '../api'

export default {
  /**
   * 获取data数据
   */
  async getData({commit},cb){
    const result = await reqData()
    console.log('我是data数据'+result.data)
    commit(REECIVE_DATA,{data:result.data})
    typeof cb === 'function' && cb()
  },

  /**
   * 轮播图数据获取
   */
  async getBanner({commit},cb){
    const result = await reqBanner()
    console.log('我是banner数据'+result.data)
    if(result.code === 0){
      commit(RECEIVE_BANNER,{banner:result.bannerList})
      typeof cb === 'function' && cb()
    }

  },
  /**
   * 获取home_data的数据
   */
  async getHomeData ({commit}){
    const result = await reqHome()
    console.log('哈哈哈哈哈哈哈哈哈---哈哈')
    console.log(result)
    if(result.code===0){
      commit(RECEIVE_HOME,{home:result})
    }
  },
  /**
   * 获取分类数据
   */
  async getFenlei ({commit}){
    const result  = await reqFenlei()
    console.log('我是分类')
  }
}


