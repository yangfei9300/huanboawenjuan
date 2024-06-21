<template>
	<view class="colonn">
		<scroll-view class="w-750 "
		 scroll-y
		 style="height: 95vh;"
		>
		<view class="colonn center_center">
			<view class="h-30"></view>
			<image class="toplogo" 
			src="/static/logotop.png"></image>
			<view class="colonn pore">
				<image src="/static/wenjuanidc.png" 
				style="position: absolute;top: 0rpx;z-index: 10;"
				class="w-536 h-214"></image>
				<image src="/static/ditu.png" 
				style="z-index: 9;"
				class="w-514 h-329"></image>  
			</view>
			<view class="h-30"></view>
			<view class="wentiview colonn">
				<view class="h-30"></view>
				<image src="/static/yaoyueguanzhong.png"
				class="w-510" mode="widthFix"
				></image>
				<!-- <image src="/static/yueguanzhong.png"
				class="w-510" mode="widthFix"
				></image> -->
				<view class="h-30"></view>
				<view style="font-weight: bold;" class="fs-30">
					填写您在本次展会上最想约见的专业观众、最想参加的主题论坛或热点话题，以及亟待解决的问题，大会将设专场利用本次平台进行专业的沟通。
				</view>
				<view class="h-50"></view>
				
				<block v-for="(item,index) in problemList">
					<view class="colonn " >  
						<view class="danweimc">{{index+1}}.{{item.question.content}}</view>
						<view class="h-15"></view>
						<view 
						v-if="item.question.qType==3"
						style="border-bottom: 1px solid #c9c9c9;padding-bottom: 10rpx;">
							<input v-model="item.optionsTxt" placeholder="请输入" />
						</view>
						<view class="colonn" 
						v-else>
							<block v-for="(item2,index2) in item.options">
							<view class="h-20"></view>
							<view class="" style="line-height: 50rpx;"
							@click.stop="selClick(index,index2)"
							>
								<image v-if="item2.isSel" src="/static/fuihoa.png"   
								class="selbox1"
								></image>
								<image v-else 
								class="selbox"
								></image>
								<!-- {{index2+1}}. -->
								<text>{{item2.content}}</text>
							</view>
							</block>
						</view>
					</view>
					<view class="h-30"></view>
				</block>
				<!-- <view class="colonn ">
					<view class="danweimc">2.您最想“约”见的观众是</view>
					<view class="h-15 "></view>
					<view class="fs-20">敲敲您发财的小手，可多填几个：</view>
					<view class="h-15"></view>
					<view style="border-bottom: 1px solid #c9c9c9;padding-bottom: 10rpx;">
						<input placeholder="您最想“约”见的观众" />
					</view>
				</view>
				<view class="h-30"></view>
				<view class="colonn " >
					<view class="danweimc">3.您所属的行业</view>
					<view class="h-15"></view>
					<view class="colonn">
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image src="/static/fuihoa.png"   
							class="selbox1"
							></image>
							<text>环境综合服务</text>
						</view>
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image class="selbox"></image>
							<text>水和污水处理</text>
						</view>
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image class="selbox"></image>
							<text>水和污水处理</text>
						</view>
					</view>
				</view>
				<view class="h-30"></view>
				<view class="colonn " >
					<view class="danweimc">4.您最想参加什么主题的论坛或热点话题</view>
					<view class="h-15"></view>
					<view class="colonn">
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image class="selbox"></image>
							<text>环境综合服务</text>
						</view>
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image class="selbox"></image>
							<text>水和污水处理</text>
						</view>
						<view class="h-20"></view>
						<view class="" style="line-height: 50rpx;">
							<image class="selbox"></image>
							<text>水和污水处理</text>
						</view>
					</view>
				</view>
				<view class="h-30"></view>
				<view class="colonn " >
					<view class="danweimc">5.您最急待解决的问题</view>
					<view class="h-15"></view>
					<view style="border-bottom: 1px solid #c9c9c9;padding-bottom: 10rpx;">
						<input placeholder="请输入您最急待解决的问题" />
					</view>
				</view>
				<view class="h-30"></view> -->
				<view class="roww center_center">
					<view class="dasdh" @click="toSubmit">提交</view>
				</view>
				<view class="h-60"></view>
			</view>
		</view>
			<view class="h-30"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				problemList:[],//问卷列表
				problemInfo:{},
				form:{
					  "quesId": "",
					  "name": "",
					  "phone": "",
					  "q1": "",
					  "q2": "",
					  "q3": "",
					  "q4": "",
					  "q5": ""
				},
				userInfo:{}
			}
		},
		onLoad() {
			this.userInfo=uni.getStorageSync("userInfo")
			this.getProblemList();
			setTimeout(res=>{
				console.log("==",res);  
				this.$tools.shareWx()
			},1000)
		},
		methods: {
			toSubmit(){
				var isSub=true;
				for(var a=0;a<this.problemList.length;a++){
					if(this.problemList[a].optionsTxt==''){
						isSub=false;
					}
				}
				if(!isSub){
					this.$tools.showToast("请答完题再提交");
					return false;
				}
				var data=this.form;
				data.quesId=getApp().globalData.volumeId;
				data.name=this.userInfo.name;
				data.phone=this.userInfo.phone;
				data.q1=this.problemList[0].optionsTxt;
				data.q2=this.problemList[1].optionsTxt;
				data.q3=this.problemList[2].optionsTxt;
				data.q4=this.problemList[3].optionsTxt;
				data.q5=this.problemList[4].optionsTxt;
				
				this.$axios
					.axios('post',
						this.$paths.enrolladd,
						data)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("提交成功");
							uni.setStorageSync("lotteryResult",res.data);
							setTimeout(res=>{
								uni.navigateTo({
									url:"/pages/index3/index3"
								})
							},1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 选项选中和取消选中
			selClick(index,index1){
				var subjectInfo=this.problemList[index];//问题详情
				console.log('pp00p',subjectInfo,subjectInfo.qType,subjectInfo.qType==2)
				if(subjectInfo.question.qType==2){
					this.problemList[index].options[index1].isSel=!this.problemList[index].options[index1].isSel;
					var optionList=this.problemList[index].options;
					var selList=[];
					for(var a=0;a<optionList.length;a++){
						if(optionList[a].isSel){
							selList.push(optionList[a].content);
						}
					}
					console.log("selList.join(",selList.join(","))
					this.problemList[index].optionsTxt=selList.join(",");
				}else{
					var optionList=this.problemList[index].options;
					for(var a=0;a<optionList.length;a++){
						optionList[a].isSel=false;
					}
					this.problemList[index].optionsTxt=this.problemList[index].options[index1].content;
					this.problemList[index].options[index1].isSel=!this.problemList[index].options[index1].isSel;
				}
			},
			// 获取问题列表
			getProblemList(){
				this.$axios
					.axios('get',
						this.$paths.eco202405ques+getApp().globalData.volumeId,
						{})
					.then(res => {
						if (res.code == 200) {
							this.problemInfo=res.data.ques;
							var problemList=res.data.questions;
							console.log("===",problemList)
							for(var a=0;a<problemList.length;a++){
								var questions=problemList[a].question;
								if(questions.qType==3){
									problemList[a].optionsTxt="";
								}else{
									var optionsList=problemList[a].options;
									for(var b=0;b<optionsList.length;b++){
										optionsList[b].isSel=false;
									}
									problemList[a].options=optionsList;
								}
							}
							this.problemList=problemList;
							console.log("--00-",problemList)
						} else {
								this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toChoujiajng(){
				uni.navigateTo({
					url:"/pages/index3/index3"
				})
			}
		}
	}
</script>

<style>
@import url(index2.css);
</style>
