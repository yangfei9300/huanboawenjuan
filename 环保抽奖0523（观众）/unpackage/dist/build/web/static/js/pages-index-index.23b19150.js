(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{3562:function(t,e,i){var n=i("dc55");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("51541020",n,!0,{sourceMap:!1,shadowMode:!1})},"8f6f":function(t,e,i){"use strict";i.r(e);var n=i("b348"),s=i("90a9");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("b50d");var a=i("f0c5"),r=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"438430f1",null,!1,n["a"],void 0);e["default"]=r.exports},"90a9":function(t,e,i){"use strict";i.r(e);var n=i("a4ac"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},a4ac:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d401"),i("d3b7"),i("25f0");var n=i("1058"),s=n.enc.Utf8.parse("2020081720200817"),o={data:function(){return{formVolume:{quesId:"",phone:""},form:{quesId:"",name:"",phone:""},dingshiqi:"",daojishi:100,codeNumber:"123456",code:""}},onLoad:function(){var t=this,e=uni.getStorageSync("userInfo");e&&(this.form=e);var i=uni.getStorageSync("lotteryResult");i&&uni.redirectTo({url:"/pages/index3/index3"}),setTimeout((function(e){console.log("==",e),t.$tools.shareWx()}),1e3)},methods:{isSubmit:function(){return""==this.form.name?(this.$tools.showToast("请输入姓名"),!1):""!=this.form.phone||(this.$tools.showToast("请输入电话"),!1)},isVolumeGet:function(){var t=this;if(!this.isSubmit())return!1;if(this.code!=this.codeNumber&&""!=this.codeNumber)return this.$tools.showToast("请输入正确的验证码"),!1;var e=this.form;this.Encrypt(e.phone+"-1");e.quesId=getApp().globalData.volumeId,uni.setStorageSync("userInfo",e),this.$axios.axios("get",this.$paths.enrollphone,e).then((function(e){200==e.code||201==e.code?uni.redirectTo({url:"/pages/index3/index3"}):202==e.code?uni.redirectTo({url:"/pages/index2/index2"}):203==e.code&&t.$tools.showToast("已填写其他问卷")})).catch((function(t){console.log("错误回调",t)}))},sendcode:function(){var t=this,e=this.form;if(""==e.phone)return this.$tools.showToast("请输入电话"),!1;var i=this.Encrypt(e.phone+"-1"),n={content:i};this.$axios.axios("POST",this.$paths.getphonesendmsgE,n).then((function(e){200==e.code?(t.$tools.showToast("短信发送成功"),t.codeNumber=e.data,clearInterval(t.dingshiqi),t.dingshiqi=setInterval((function(e){t.daojishi-1<=0?(t.daojishi=100,clearInterval(t.dingshiqi)):t.daojishi=t.daojishi-1}),1e3)):t.$tools.showToast(e.msg)})).catch((function(t){console.log("错误回调",t)}))},Decrypt:function(t){var e=n.AES.decrypt(t,s,{mode:n.mode.ECB,padding:n.pad.Pkcs7}),i=e.toString(n.enc.Utf8);return i.toString()},Encrypt:function(t){var e=n.AES.encrypt(t,s,{mode:n.mode.ECB,padding:n.pad.Pkcs7});return e.toString()}}};e.default=o},b348:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"colonn center_center ",staticStyle:{width:"750rpx",height:"100vh"}},[i("v-uni-view",{staticClass:"centerview colonn center_center"},[i("v-uni-view",{staticClass:"h-10"}),i("v-uni-image",{staticClass:"w-120 h-120",attrs:{src:"https://shandongtibohui.zsyflive.com/profile/upload/hbgw/a09a6f8d37764e8076bdd5d29b255ee.png"}}),i("v-uni-view",{staticClass:"h-50"}),i("v-uni-view",{staticClass:"roww w-550 border_bottom center_center p-all-20"},[i("v-uni-image",{staticClass:"w-40 h-40",attrs:{src:"/static/xingming.png"}}),i("v-uni-view",{staticClass:"w-20"}),i("v-uni-input",{staticClass:"allline fs-30",attrs:{placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("v-uni-view",{staticClass:"h-50"}),i("v-uni-view",{staticClass:"roww w-550 border_bottom center_center p-all-20"},[i("v-uni-image",{staticClass:"w-40 h-40",attrs:{src:"/static/dianhua.png"}}),i("v-uni-view",{staticClass:"w-20"}),i("v-uni-input",{staticClass:"allline fs-30",attrs:{maxlength:"11",placeholder:"请输入手机号"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),i("v-uni-view",{staticClass:"h-40"}),i("v-uni-view",{staticClass:"roww w-550  border_bottom center_center p-all-20"},[i("v-uni-image",{staticClass:"w-40 h-40",attrs:{src:"/static/yanzhengma.png"}}),i("v-uni-view",{staticClass:"w-20"}),i("v-uni-input",{staticClass:"allline fs-30",attrs:{placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"roww w-550 fs-30 p-all-20"},[i("v-uni-view",{staticClass:"allline"}),i("v-uni-view",{staticClass:"shenqingyanzhnegm",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sendcode.apply(void 0,arguments)}}},[100==t.daojishi?[t._v("获取验证码")]:[t._v("重新发送"+t._s(t.daojishi))]],2)],1),i("v-uni-view",{staticClass:"h-20"}),i("v-uni-view",{staticClass:"roww center_center"},[i("v-uni-view",{staticClass:"loginbtn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.isVolumeGet.apply(void 0,arguments)}}},[t._v("登录")])],1)],1)],1)},s=[]},b50d:function(t,e,i){"use strict";var n=i("3562"),s=i.n(n);s.a},dc55:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-438430f1]{background-image:url(/static/bg1.png);background-size:100% 100%}body.?%PAGE?%[data-v-438430f1]{background-image:url(/static/bg1.png);background-size:100% 100%}.centerview[data-v-438430f1]{width:%?650?%;height:%?750?%;background-color:#fff;border-radius:%?20?%}.loginbtn[data-v-438430f1]{width:%?300?%;height:%?80?%;background-color:#00a0e9;text-align:center;line-height:%?80?%;color:#fff;font-weight:700;border-radius:%?50?%}",""]),t.exports=e}}]);