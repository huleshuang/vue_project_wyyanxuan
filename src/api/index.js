
import ajax from './ajax'

//获取data数据
export const reqData = () => ajax('/data')

//获取轮播图
export const reqBanner = () => ajax('/banner')

//获取homede 所有数据
export const reqHome = () => ajax('/home')

//获取分类数据
export const reqFenlei = () => ajax('/fenlei')

//获取识物
export const reqShiwu = () => ajax('/shiwu')

//账号密码图片验证码登录
export const reqUserLogin = ({name,pwd,captch})=> ajax('/login',{
  name,
  pwd,
  captch
},'POST')
