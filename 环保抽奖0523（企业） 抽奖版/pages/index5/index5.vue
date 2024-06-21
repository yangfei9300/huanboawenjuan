<template>
	<view>
		<image src="/static/fuli.jpg" class="w-750" mode="widthFix"></image>
		<view class="roww center_center w-750"
		style="position: fixed;bottom: 100rpx;"
		>
			<view class="btnee" @click.stop="toyudeng">点击领取门票</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			setTimeout(res=>{
				console.log("==",res);  
				this.$tools.shareWx()
			},1000)
		},
		methods: {
			toyudeng(){
				window.location.href="https://frdzhtsignup.zsyflive.com/frd/scOC6RLbHDbEfwIAP0zN+29TygtCAJtgCbxmpV2HXkSumxzLNXmbEsufxtaqfLn9"
			}
		}
	}
</script>

<style>
@import url(index5.css);
</style>
