(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index2-index2"],{2867:function(t,i,s){"use strict";s("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,s("14d9");var o={data:function(){return{problemList:[],problemInfo:{},form:{quesId:"",name:"",phone:"",q1:"",q2:"",q3:"",q4:"",q5:""},userInfo:{}}},onLoad:function(){var t=this;this.userInfo=uni.getStorageSync("userInfo"),this.getProblemList(),setTimeout((function(i){console.log("==",i),t.$tools.shareWx()}),1e3)},methods:{toSubmit:function(){for(var t=this,i=!0,s=0;s<this.problemList.length;s++)""==this.problemList[s].optionsTxt&&(i=!1);if(!i)return this.$tools.showToast("请答完题再提交"),!1;var o=this.form;o.quesId=getApp().globalData.volumeId,o.name=this.userInfo.name,o.phone=this.userInfo.phone,o.q1=this.problemList[0].optionsTxt,o.q2=this.problemList[1].optionsTxt,o.q3=this.problemList[2].optionsTxt,o.q4=this.problemList[3].optionsTxt,o.q5=this.problemList[4].optionsTxt,this.$axios.axios("post",this.$paths.enrolladd,o).then((function(i){200==i.code?(t.$tools.showToast("提交成功"),uni.setStorageSync("lotteryResult",i.data),setTimeout((function(t){uni.navigateTo({url:"/pages/index3/index3"})}),1e3)):t.$tools.showToast(i.msg)})).catch((function(t){console.log("错误回调",t)}))},selClick:function(t,i){var s=this.problemList[t];if(console.log("pp00p",s,s.qType,2==s.qType),2==s.question.qType){this.problemList[t].options[i].isSel=!this.problemList[t].options[i].isSel;for(var o=this.problemList[t].options,e=[],n=0;n<o.length;n++)o[n].isSel&&e.push(o[n].content);console.log("selList.join(",e.join(",")),this.problemList[t].optionsTxt=e.join(",")}else{for(o=this.problemList[t].options,n=0;n<o.length;n++)o[n].isSel=!1;this.problemList[t].optionsTxt=this.problemList[t].options[i].content,this.problemList[t].options[i].isSel=!this.problemList[t].options[i].isSel}},getProblemList:function(){var t=this;this.$axios.axios("get",this.$paths.eco202405ques+getApp().globalData.volumeId,{}).then((function(i){if(200==i.code){t.problemInfo=i.data.ques;var s=i.data.questions;console.log("===",s);for(var o=0;o<s.length;o++){var e=s[o].question;if(3==e.qType)s[o].optionsTxt="";else{for(var n=s[o].options,a=0;a<n.length;a++)n[a].isSel=!1;s[o].options=n}}t.problemList=s,console.log("--00-",s)}else t.$tools.showToast(i.msg)})).catch((function(t){console.log("错误回调",t)}))},toChoujiajng:function(){uni.navigateTo({url:"/pages/index3/index3"})}}};i.default=o},4575:function(t,i,s){"use strict";s.r(i);var o=s("c105"),e=s("b509");for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);s("80e2");var a=s("f0c5"),l=Object(a["a"])(e["default"],o["b"],o["c"],!1,null,"415dab92",null,!1,o["a"],void 0);i["default"]=l.exports},"80e2":function(t,i,s){"use strict";var o=s("fcf4"),e=s.n(o);e.a},b509:function(t,i,s){"use strict";s.r(i);var o=s("2867"),e=s.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return o[t]}))}(n);i["default"]=e.a},c105:function(t,i,s){"use strict";s.d(i,"b",(function(){return o})),s.d(i,"c",(function(){return e})),s.d(i,"a",(function(){}));var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"colonn"},[s("v-uni-scroll-view",{staticClass:"w-750 ",staticStyle:{height:"95vh"},attrs:{"scroll-y":!0}},[s("v-uni-view",{staticClass:"colonn center_center"},[s("v-uni-view",{staticClass:"h-30"}),s("v-uni-image",{staticClass:"toplogo",attrs:{src:"/static/logotop.png"}}),s("v-uni-view",{staticClass:"colonn pore"},[s("v-uni-image",{staticClass:"w-536 h-214",staticStyle:{position:"absolute",top:"0rpx","z-index":"10"},attrs:{src:"/static/wenjuanidc.png"}}),s("v-uni-image",{staticClass:"w-514 h-329",staticStyle:{"z-index":"9"},attrs:{src:"/static/ditu.png"}})],1),s("v-uni-view",{staticClass:"h-30"}),s("v-uni-view",{staticClass:"wentiview colonn"},[s("v-uni-view",{staticClass:"h-30"}),s("v-uni-image",{staticClass:"w-510",attrs:{src:"/static/yueguanzhong.png",mode:"widthFix"}}),s("v-uni-view",{staticClass:"h-30"}),s("v-uni-view",{staticClass:"fs-30",staticStyle:{"font-weight":"bold"}},[t._v("填写您在本次展会上最想约见的专业观众、最想参加的主题论坛或热点话题，以及亟待解决的问题，大会将设专场利用本次平台进行专业的沟通交流。")]),s("v-uni-view",{staticClass:"h-50"}),t._l(t.problemList,(function(i,o){return[s("v-uni-view",{staticClass:"colonn "},[s("v-uni-view",{staticClass:"danweimc"},[t._v(t._s(o+1)+"."+t._s(i.question.content))]),s("v-uni-view",{staticClass:"h-15"}),3==i.question.qType?s("v-uni-view",{staticStyle:{"border-bottom":"1px solid #c9c9c9","padding-bottom":"10rpx"}},[s("v-uni-input",{attrs:{placeholder:"请输入"},model:{value:i.optionsTxt,callback:function(s){t.$set(i,"optionsTxt",s)},expression:"item.optionsTxt"}})],1):s("v-uni-view",{staticClass:"colonn"},[t._l(i.options,(function(i,e){return[s("v-uni-view",{staticClass:"h-20"}),s("v-uni-view",{staticStyle:{"line-height":"50rpx"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.selClick(o,e)}}},[i.isSel?s("v-uni-image",{staticClass:"selbox1",attrs:{src:"/static/fuihoa.png"}}):s("v-uni-image",{staticClass:"selbox"}),s("v-uni-rich-text",{attrs:{nodes:i.content}})],1)]}))],2)],1),s("v-uni-view",{staticClass:"h-30"})]})),s("v-uni-view",{staticClass:"roww center_center"},[s("v-uni-view",{staticClass:"dasdh",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1),s("v-uni-view",{staticClass:"h-60"})],2)],1),s("v-uni-view",{staticClass:"h-30"})],1)],1)},e=[]},ca3e:function(t,i,s){var o=s("24fb");i=o(!1),i.push([t.i,"uni-page-body[data-v-415dab92]{background-image:url(/static/bg2.png);background-size:100% 100%;width:%?750?%;height:100vh}body.?%PAGE?%[data-v-415dab92]{background-image:url(/static/bg2.png);background-size:100% 100%}.toplogo[data-v-415dab92]{width:%?522?%;height:%?90?%}.wentiview[data-v-415dab92]{background-image:url(/static/zhizhang.png);background-size:100% 100%;width:%?700?%;min-height:%?500?%;padding:%?20?% %?80?% %?20?% %?100?%}.danweimc[data-v-415dab92]{background-color:#00a0e9;font-size:%?30?%;color:#fff;padding:%?15?% %?15?%;border-radius:%?15?%;box-sizing:border-box;width:-webkit-fit-content;width:fit-content}.selbox[data-v-415dab92]{width:%?30?%;height:%?30?%;background-color:#fff;float:left;margin:%?10?% %?20?% %?10?% %?10?%}.selbox1[data-v-415dab92]{width:%?30?%;height:%?30?%;float:left;margin:%?10?% %?20?% %?10?% %?10?%}.dasdh[data-v-415dab92]{width:%?400?%;height:%?70?%;background-color:#00a0e9;border-radius:%?500?%;text-align:center;line-height:%?70?%;color:#fff}",""]),t.exports=i},fcf4:function(t,i,s){var o=s("ca3e");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=s("4f06").default;e("e81600b6",o,!0,{sourceMap:!1,shadowMode:!1})}}]);