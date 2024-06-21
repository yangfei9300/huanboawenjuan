<template>
	<view class="colonn center_center " style="width: 750rpx;height: 100vh;">
		<view class="centerview colonn center_center">
			<view class="h-10"></view>
			<image src="https://shandongtibohui.zsyflive.com/profile/upload/hbgw/a09a6f8d37764e8076bdd5d29b255ee.png"
			 class="w-120 h-120"
			></image>
			<view class="h-50"></view>
			<view class="roww w-550 border_bottom center_center p-all-20">
				<image src="/static/xingming.png" class="w-40 h-40"></image>
				<view class="w-20"></view>
				<input v-model="form.name" placeholder="请输入姓名" class="allline fs-30" />
			</view>
			<view class="h-50"></view>
			<view class="roww w-550 border_bottom center_center p-all-20">
				<image src="/static/dianhua.png" class="w-40 h-40"></image>
				<view class="w-20"></view>
				<input v-model="form.phone" maxlength="11" placeholder="请输入手机号" class="allline fs-30" />
			</view>
			<view class="h-40"></view>
			<view class="roww w-550  border_bottom center_center p-all-20">
				<image src="/static/yanzhengma.png"
				 class="w-40 h-40"></image>
				<view class="w-20"></view> 
				<input placeholder="请输入验证码"
				 v-model="code"
				 class="allline fs-30" />
			</view>  
			<view class="h-20"></view>
			<view class="roww w-550 fs-30 p-all-20">
				<view class="allline"></view>
					
					<view class="shenqingyanzhnegm"
									@click.stop="sendcode"
									>
									<block v-if="daojishi==100">
										获取验证码
									</block>
									<block v-else>
										重新发送{{daojishi}}
									</block>
									</view>
					 
					
					
			</view>
			<view class="h-20"></view>
			<view class="roww center_center">
				<view class="loginbtn" @click.stop="isVolumeGet">登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	const CryptoJS = require('crypto-js') // 引用AES源码js
	const key = CryptoJS.enc.Utf8.parse('2020081720200817') // 十六位十六进制数作为密钥
	export default {
		data() {
			return {
				formVolume:{
					'quesId':'',
					'phone':''
				},
				form:{
					'quesId':'',
					'name':'',
					'phone':''
				},
				
				'dingshiqi':"",
				daojishi:100,
				codeNumber:'123456',//获取验证码
				code:'',//输入的验证码
				
			}
		},
		onLoad() {
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.form=userInfo;
			}
			
			var lotteryResult=uni.getStorageSync("lotteryResult");
			if(lotteryResult){
				uni.redirectTo({
					url:"/pages/index3/index3"
				})
			}
			setTimeout(res=>{
				console.log("==",res);  
				this.$tools.shareWx()
			},1000)
		},
		methods: {
			isSubmit(){
				if(this.form.name==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				if(this.form.phone==""){
					this.$tools.showToast("请输入电话");
					return false;
				}
				return true
			},
			// 获取是否打过问卷
			isVolumeGet(){
				if(!this.isSubmit()){
					return false;
				}
				if(this.code!=this.codeNumber&&this.codeNumber!=''){
					this.$tools.showToast("请输入正确的验证码");
					return false;
				}
				
				var data1=this.form
				var content= this.Encrypt(data1.phone+"-"+1);
				data1.quesId=getApp().globalData.volumeId;
				uni.setStorageSync("userInfo",data1);
				this.$axios
					.axios('get',
						this.$paths.enrollphone,
						data1)
					.then(res => {
						 if (res.code == 200){
						 	uni.redirectTo({
						 		url:"/pages/index3/index3"
						 	})
						 }else if (res.code == 201){
							uni.redirectTo({
								url:"/pages/index3/index3"
							})
						}else if (res.code == 202) {
							uni.redirectTo({
								url:"/pages/index2/index2"
							})
						}else if (res.code == 203) {
							this.$tools.showToast("已填写其他问卷");
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 发送验证码
			sendcode() {
				var data = this.form;
				if (data.phone == "") {
					this.$tools.showToast("请输入电话");
					return false;
				}
				var content= this.Encrypt(data.phone+"-"+1);
				var data1={
					'content':content
				}
				this.$axios
					.axios('POST',
						this.$paths.getphonesendmsgE,
						data1)
					.then(res => {
						if (res.code == 200) {
							this.$tools.showToast("短信发送成功");
							this.codeNumber = res.data;
							clearInterval(this.dingshiqi);
							this.dingshiqi = setInterval(res => {
								if (this.daojishi - 1 <= 0) {
									this.daojishi = 100;
									clearInterval(this.dingshiqi);
								} else {
									this.daojishi = this.daojishi - 1
								}
							}, 1000)
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 解密方法
			Decrypt(word) {
				let decrypt = CryptoJS.AES.decrypt(word, key, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				})
				let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
				return decryptedStr.toString()
			},
			// 加密方法
			Encrypt(word) {
				let encrypted = CryptoJS.AES.encrypt(word, key, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				});
				return encrypted.toString()
			},
			
		}
	}
</script>

<style>
	@import url(index.css);
</style>