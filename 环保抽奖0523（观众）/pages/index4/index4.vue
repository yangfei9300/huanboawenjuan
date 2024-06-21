<template>
	<view>
		<view class="colonn">
			
			<view class="roww center_center p-all-20 border_bottom"
			v-for="(item,index) in lotteryHistory"
			>
				<view class="colonn">
					<view class="font_size7_r">{{item.giftName}}</view>
					<view class="h-10"></view>
					<view class="fs-30">{{item.createTime}}</view>
				</view>
				<view class="allline"></view>
				<view class="font_size7_r" style="color: red;"
				v-if="item.gift_get_time"
				>已领取</view>
				<view class="font_size7_r"
				v-else
				style="color: green;" @click="isShowClick">查看兑换码</view>
			</view>  
			
			<!-- <view class="roww center_center p-all-20 border_bottom"
			>
				<view class="colonn">
					<view class="font_size7_r">奖品名称</view>
					<view class="h-10"></view>
					<view class="fs-30">2023-04-04</view>
				</view>
				<view class="allline"></view>
				<view class="font_size7_r" 
				style="color: green;" @click="isShowClick">查看兑换码</view>
			</view> -->  
			
		</view>
		
		<view class="colonn center_center huuibeijing"
		style="background-color: rgba(255, 255, 255, 0.7);"
		v-if="isShow"
		 @click="isShowClick"
		>
			<tki-qrcode cid="qrcode2" ref="qrcode2"
			:val="qrValue" :size="size" :onval="onval" 
			:loadMake="loadMake"
				:usingComponents="true" @result="qrR" />
		</view>
		
	</view>
</template>

<script>
	const CryptoJS = require('crypto-js') // 引用AES源码js
	const key = CryptoJS.enc.Utf8.parse('2020081720200817') // 十六位十六进制数作为密钥
	
	export default {
		data() {
			return {
				// 二维码
				ifShow: false,
				size: 400,
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				qrValue: "",
				src: '', // 二维码生成后的图片地址或base64
				unionid: "",
				shareUrl: "",
				
				isShow:false,
				lotteryHistory:[],
			}
		},
		onLoad() {
			this.getGift();
			setTimeout(res=>{
				console.log("==",res);  
				this.$tools.shareWx()
			},1000)
		},
		methods: {
			getGift(){
				var data = {
					'phone':uni.getStorageSync("userInfo").phone
				};
				this.$axios
					.axios('get', this.$paths.enrolllist, data)
					.then((res) => {
						if (res.code == 200) {
							this.lotteryHistory=res.data;
						} else {
							this.$tools.showToast(res.msg);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
						this.lotteryLongding=false;
					});
			},
			isShowClick(item){
				var qrValue=item.giftId+"-"+item.id;
				qrValue=this.Encrypt(qrValue);
				console.log("==",qrValue)
				this.qrValue=qrValue;
				this.isShow=!this.isShow;
			},
			qrR(res){ 
				console.log("二维码");
			},
			// 解密方法
			Decrypt(word) {
				let decrypt = CryptoJS.AES.decrypt(word, key, {
					mode: CryptoJS.mode.ECB,
					padding: CryptoJS.pad.Pkcs7
				})
				let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
				return decryptedStr.toString();
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
@import url(index4.css);
</style>
