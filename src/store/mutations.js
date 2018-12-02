/*
  mutaions 定义
    包含n个方法: 能直接更新state
 */

import {REECIVE_DATA,RECEIVE_BANNER,RECEIVE_HOME,RECEIVE_FENLEI,RECEIVE_SHIWU} from './mutations-type'

export default {

  [REECIVE_DATA] (state,{data}) {
    state.data = data
  },

  [RECEIVE_BANNER] (state,{banner}) {
    state.banner = banner
  },

  [RECEIVE_HOME] (state,{home}) {
    state.home = home
  },

  [RECEIVE_FENLEI] (state,{fenlei}) {
    state.fenlei = fenlei
  },

  [RECEIVE_SHIWU] (state,{shiwu}){
    state.shiwu = shiwu
  }
}
