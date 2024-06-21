// 项目域名
// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
// export const BASE_URL = 'http://192.168.0.100:8080/api'
export const BASE_URL = 'https://zbbmapi.sdreal.top/api'
export const BASE_URL1 = 'https://shandongtibohui.zsyflive.com' 
// 加密接口短信
const getphonesendmsgE="https://shandongtibohui.zsyflive.com" + '/miniapp/getphone/sendmsgE'
//----------项目接口请求路径-----------
// 授权注册接口  registerUserInfo
const enrollphone =BASE_URL + '/eco202405/enroll/phone' 
// 获取问卷列表  
const eco202405ques =BASE_URL + '/eco202405/ques/' 
// 提交问卷
const enrolladd =BASE_URL + '/eco202405/enroll/add' 
// 获取礼物列表  /api/eco202405/gift/list
const giftlist =BASE_URL + '/eco202405/gift/list' 
// 抽奖  /api/eco202405/enroll/draw
const enrolldraw =BASE_URL + '/eco202405/enroll/draw' 
// 查询用户记录  /api/eco202405/enroll/list
const enrolllist =BASE_URL + '/eco202405/enroll/list' 
// 分享获取具体参数 
const ticketwxminiapp=BASE_URL1 + '/miniapp/wx/ticket'

 export default {
	 ticketwxminiapp,
	 enrolllist,
	 enrolldraw,
	 giftlist,
	 enrolladd,
	 eco202405ques,
 	enrollphone, 
	getphonesendmsgE
 }
 