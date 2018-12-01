
import ajax from './ajax'

//获取data数据
export const reqData = () => ajax('/data')

//获取轮播图
export const reqBanner = () => ajax('/banner')

//获取homede 所有数据
export const reqHome = () => ajax('/home')

//获取分类数据
export const reqFenlei = () => ajax('/fenlei')

