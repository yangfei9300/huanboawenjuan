<template>
	<view class="content">
		<view class="t-bg" style="background-image: url('/static/luck/DZP_BJ.png')">
			<image class="t-wan" src="/static/luck/wenan.png"></image>
			<image class="t-wan-lp" src="/static/luck/hengfu.png"></image>
			<view class="t-choujiang t-flex-row">
				<!-- style="background-image: url('/static/luck/BJ.png')" -->
				<view :animation="rotate" class="t-zp" style="background-image: url('/static/luck/yuan1.png')"></view>
				<!-- <image @click="toLottery" class="t-start" src="/static/luck/start.png"></image> -->

				<image @click="toLottery" class="t-start" src="/static/luck/start.png"></image>
			</view>
			<view class="h-50"></view>
			<view class="colonn fs-30">
				<text style="margin-left: 50rpx;color: white;">
					注:请于展会现场领取礼品
					<br />
					时间:2024年8月28-30日
					<br />
					地点:山东国际会展中心（槐荫路日照路1号）
				</text>
			</view>
			<!-- <view style="color: white; padding: 50rpx 50rpx">
				1.展会现场出示中奖页面领取 时间：2024年8月28-30日
				<br />
				地点：山东国际会展中心（日照路）
			</view> -->
			<view class="t-jh t-flex-row" @click.stop="toYaoqing" style="background-image: url('/static/luck/anniu.png'); font-weight: bold">
				<text space="emsp" class="styles_pulse__9HoxO">预登记 享好礼</text>
			</view>
		</view>

	<!-- 	<view class="t-bottom">
			<view class="t-luck-wrapper">
				<view class="t-rule">
					<text>
						注:请于展会现场领取礼品
						<br />
						时间:2024年8月28-30日
						<br />
						地点:山东国际会展中心（槐荫路日照路1号）
					</text>
				</view>
			</view>
		</view> -->

		<!-- 规则部分 -->
		<!-- <view class="t-bottom">
			<view class="t-luck-wrapper"> -->
		<!-- <view class="t-jh t-flex-row" style="background-image:url('/static/luck/anniu.png')">
					您还有{{luckDrawTimes}}次机会
				</view> -->
		<!-- <view class="t-jh t-flex-row" 
				style="background-image:url('/static/luck/anniu.png');font-weight: bold;">
					<text space="emsp">预登记 享好礼</text>
				</view> -->

		<!-- <view class="t-fuhuo-text t-flex-row">复活方式</view>
				<view class="t-fh-fs t-flex-row-sb">
					<view class="t-flex-row" hover-class="t-click-class">观看品牌5s视频</view>
					<button open-type="share" class="t-share t-flex-row t-plain-btn"
						hover-class="t-click-class">一键分享朋友</button>
				</view>
				<view class="t-line"></view> -->
		<!-- <view class="t-r-title t-flex-row">抽奖规则</view>
				<view class="t-rule">
					<text>1.无门槛参与：凡是授权获取电话号码的小程序用户均可参与抽奖；</text>
					<text>2.每个用户每天默认有一次抽奖资格，用户可以通过以下方式复活继续参与抽奖：
						（1）通过观看品牌视频5秒钟每天获取一次复活资格
						（2）通过一键分享朋友圈（且有人点击）获取复活资格，每分享一个新的朋友，获取一次复活资格，复活次数上不封顶；</text>
					<text>3.中奖奖品以现金的形式下发用户微信零钱，到账时间不超过24小时,具体到账时间以微信支付通知为准（因微信官方要求，微信实名认证用户方可收到奖金）；</text>
					<text>4.中奖记录在个人中心-我的红包中查看。</text>
				</view> -->
		<!-- </view>
		</view> -->
		<!-- 抽奖结束弹窗 -->
		<kevy-mask :show="isShowAwd" @click="toConfirmAwd">
			<view class="t-full t-flex-row">
				<view class="t-tk-modal">
					<view class="t-tk-bg t-bg-full" style="background-image: url('/static/luck/tankuang.png')">
						<view v-if="drawIdx != null && drawIdx == 0" class="t-xxcy t-flex-col-s">
							<image src="/static/luck/xiexiecanyu.png"></image>
							<view class="t-xxcy-ts t-flex-row">再努力努力肯定就会中哦~</view>
						</view>
						<view v-if="drawIdx != null && drawIdx > 0" class="t-tk-zj t-flex-col-s">
							<image class="t-tk-zj-tip" src="/static/luck/wenzi.png"></image>
							<view class="t-tk-zj-desc t-flex-col">
								<!-- <image class="t-zj-jp" :src="'/static/luck/' + drawIdx + '.png'"></image> -->
								<view class="t-zj-jp-desc roww center_center"
								style="font-weight: bold;font-size: 65rpx;"
								> 
									{{ prizes[drawIdx] }}
									<!-- 某某公司提供的能量动力
									{{ drawIdx == 5 ? '探亲礼包' : drawIdx == 4 ? '加油卡' : drawIdx == 3 ? '鸡腿' : drawIdx == 2 ? '方便面' : '矿泉水' }}，同等价值{{
										drawIdx == 5 ? '888' : drawIdx == 4 ? '100' : drawIdx == 3 ? '10' : drawIdx == 2 ? '5' : '2'
									}}元现金已到账微信零钱 -->
								</view>
							</view>
						</view>
					</view>
					<view @click="toConfirmAwd" class="t-tk-btn t-bg-full" style="background-image: url('/static/luck/xiaoanniu.png')">
						{{ drawIdx > 0 ? '领取' : '确定' }}
					</view>
				</view>
			</view>
		</kevy-mask>
		
		<view class="cjjl colonn" @click.stop="toHistory"
		@longpress="tohome"
		>
			<view>抽</view>
			<view>奖</view>
			<view>记</view>
			<view>录</view>
		</view>
		
	</view>
</template>

<script>
var animation = uni.createAnimation({
	duration: 4000,
	timingFunction: 'ease-out'
});
import kevyMask from '@/components/kevy-mask/kevy-mask.vue';
export default {
	components: {
		kevyMask
	},
	data() {
		return {
			rotate: 0, //度数-抽奖动画
			turning: false, //转盘是否正在转
			luckDrawTimes: 5, //抽奖机会，5代表可以抽5次
			isShowAwd: false, //是否显示奖品弹框，抽奖后提示，要么中奖奖品，要么谢谢参与
			drawIdx: null, //抽到的奖品下标，用于指定中奖奖品并旋转转盘到对应奖品处。例如共5个奖品，下标3代表第4个奖品，下标从0开始

			giftList: [], //礼物列表
			drawClick: {}, //抽奖实体类
			prizes: ['幸运奖','三等奖','幸运奖','幸运奖','二等奖','一等奖'],
			lotteryLongding:false,//抽奖加载中
		};
	},
	onLoad() {
		this.getgiftList();
		setTimeout(res=>{
			console.log("==",res);  
			this.$tools.shareWx()
		},1000)
	},
	methods: {
		tohome(){
			uni.clearStorageSync();
			uni.navigateTo({
				url:"/pages/index/index"
			})
		},
		
		toHistory(){
			uni.navigateTo({
				url:"/pages/index4/index4"
			})
		},
		// 查询礼物的sort
		selectGiftId(giftId) {
			var sort = '';
			for (var a = 0; a < this.giftList.length; a++) {
				if (giftId == this.giftList[a].id) {
					sort = this.giftList[a].sort;
				}
			}
			return sort;
		},
		// 获取礼物列表
		getgiftList() {
			var data = {};
			this.$axios
				.axios('get', this.$paths.giftlist, data)
				.then((res) => {
					if (res.code == 200) {
						this.giftList = res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 抽奖
		toLottery() {
			if(this.lotteryLongding){
				this.$tools.showToast("已经抽过奖品了");
				return false;
			}
			this.lotteryLongding=true;
			var data = {
				id: uni.getStorageSync('lotteryResult').id
			};
			this.$axios
				.axios('post', this.$paths.enrolldraw, data)
				.then((res) => {
					if (res.code == 200) {
						this.drawClick = res.data;
						this.start(this.selectGiftId(this.drawClick.giftId));
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
					this.lotteryLongding=false;
				});
		},

		toYaoqing() {
			uni.navigateTo({
				url: '/pages/index5/index5'
			});
		},
		/**
		 * 抽奖按钮点击
		 */
		start(awardIdx1) {
			console.log('擦', awardIdx1);
			let $ = this;
			let luckDrawTimes = $.luckDrawTimes;
			if (luckDrawTimes < 1) {
				uni.showToast({
					title: '抽奖机会已用完',
					icon: 'none'
				});
				return;
			}
			if (!$.turning) {
				$.turning = true;
				$.$nextTick(() => {
					//这里去请求服务器，生成中奖信息，其中awardIdx为中奖
					// uni.request({
					// })
					//以下为模拟请求返回数据，awardIdx从0开始，0代表谢谢参与，其他代表剩余的奖品，这里随机一个数（0-4之间）
					let res = {
						awardIdx: awardIdx1
					};
					let { awardIdx } = res;
					//计算旋转角度
					let rdm = $.computeRotateAward(awardIdx1, 1);
					animation.rotate(rdm).step();
					$.rotate = animation.export();
					$.luckDrawTimes = $.luckDrawTimes <= 0 ? 0 : $.luckDrawTimes - 1;
					setTimeout(() => {
						let animation1 = uni.createAnimation({
							duration: 100,
							timingFunction: 'linear'
						});
						animation1.rotate(0).step();
						$.drawIdx = awardIdx1;
						$.isShowAwd = true;
						$.$nextTick(() => {
							setTimeout(() => {
								$.rotate = animation1.export();
								$.turning = false;
							}, 1000);
						});
					}, 4350);
				});
			}
		},
		/**
		 * 根据后台返回中奖奖品索引计算旋转角度
		 * @param {*} idx 中奖奖品下标，从0开始
		 * @param {*} type 1-计算角度 2-计算奖品
		 */
		computeRotateAward(idx, type) {
			let award;
			if (idx == 5) {
				award = type == 1 ? 60 : '一等奖';
			} else if (idx == 4) {
				award = type == 1 ? 300 : '二等奖';
			} else if (idx == 3) {
				award = type == 1 ? 120 : '幸运奖';
			} else if (idx == 2) {
				award = type == 1 ? 240 : '幸运奖';
			} else if (idx == 1) {
				award = type == 1 ? 180 : '三等奖';
			} else {
				award = type == 1 ? 0 : '幸运奖';
			}
			console.log('=点击抽奖=', idx, type, award);
			// ['谢谢参与','三等奖','谢谢参与','幸运奖','二等奖','一等奖']
			//这里6代表6圈，你可以设置为你想要的
			return type == 1 ? 6 * 360 + award : award;
		},
		/**
		 * 确认奖品按钮点击事件
		 */
		toConfirmAwd() {
			//这里中奖信息关闭弹框
			this.isShowAwd = false;
			uni.navigateTo({
				url: '/pages/index4/index4'
			});
		}
	}
};
</script>

<style scoped>
@import url(index3.css);
.content {
	width: 100%;
	box-sizing: border-box;
}

.t-bg {
	width: 100%;
	box-sizing: border-box;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	position: relative;
	overflow-x: hidden;
	height: 1200rpx;
	padding-top: 345rpx;
	/* margin-top: 40rpx; */
	height: 100vh;
}

.t-overlay {
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	transition: all 0.5s;
}

.t-wan {
	position: absolute;
	width: 100%;
	height: 283rpx;
	top: 12rpx;
	left: 0;
	z-index: 1;
}

.t-wan-lp {
	position: absolute;
	width: 370rpx;
	height: 130rpx;
	top: 223rpx;
	z-index: 0;
	left: calc(50% - 185rpx);
}

.t-choujiang {
	width: 630rpx;
	height: 630rpx;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	margin: 0rpx auto;
	position: relative;
}

.t-zp {
	width: 577rpx;
	height: 577rpx;
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.t-start {
	width: 146rpx;
	height: 171rpx;
	position: absolute;
	z-index: 1;
}

.t-jh {
	width: 456rpx;
	height: 120rpx;
	margin: 0 auto;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	font-size: 40rpx;
	color: #980100;
	position: absolute;
	margin-left: 150rpx;
	bottom: 100rpx;
}

.t-fuhuo-text {
	font-size: 30rpx;
	color: #980100;
	width: 100%;
	height: 42rpx;
	margin-top: 14rpx;
}

.t-fh-fs {
	width: 580rpx;
	height: 100rpx;
	margin: 20rpx auto 0rpx;
}

.t-fh-fs view {
	width: 250rpx;
	height: 100rpx;
	background-image: linear-gradient(180deg, #df0236 0%, #dd0227 100%);
	border-radius: 10rpx;
	font-size: 30rpx;
	color: #ffffff;
}

.t-share {
	width: 250rpx;
	height: 100rpx;
	background-image: linear-gradient(180deg, #df0236 0%, #dd0227 100%);
	border-radius: 10rpx;
	font-size: 30rpx;
	color: #ffffff;
}

.t-bottom {
	position: relative;
	width: 100%;
	box-sizing: border-box;
	opacity: 0.99;
	background: #fdc469;
	top: -20rpx;
}

.t-luck-wrapper {
	/* position: relative; */
	box-sizing: border-box;
	/* top: -219rpx; */
}

.t-line {
	width: 580rpx;
	height: 1rpx;
	margin: 50rpx auto 0rpx;
	background: #980100;
}

.t-r-title {
	font-size: 28rpx;
	color: #980100;
	height: 40rpx;
	width: 100%;
	margin: 30rpx auto 0rpx;
	width: 585rpx;
}

.t-rule {
	margin: 10rpx auto 0rpx;
	width: 585rpx;
}

.t-rule text {
	font-size: 28rpx;
	color: #980100;
	text-align: justify;
	display: block;
}

.t-wrapper {
	width: 100%;
	height: 100%;
	position: relative;
	top: 0rpx;
}

.t-video-con {
	width: 100%;
	height: 422rpx;
	background: #fff;
	position: relative;
}

.t-video {
	width: 100%;
	height: 100%;
}

.t-close {
	position: absolute;
	top: 0rpx;
	right: 0rpx;
	width: 34rpx;
	height: 34rpx;
	padding: 30rpx;
	z-index: 9999;
}

.t-nocice {
	position: fixed;
	left: 0rpx;
	top: 0rpx;
	z-index: 999;
	width: 100%;
	height: 40rpx !important;
	box-sizing: border-box;
	font-size: 30rpx;
}

.t-tk-modal {
	width: 632rpx;
	height: 588rpx;
	position: relative;
	box-sizing: border-box;
}

.t-tk-bg {
	width: 100%;
	height: 528rpx;
	background-size: 100% 100%;
}

.t-tk-btn {
	width: 336rpx;
	height: 120rpx;
	position: absolute;
	bottom: 0rpx;
	left: calc(50% - 168rpx);
	font-size: 40rpx;
	color: #980100;
	line-height: 120rpx;
	text-align: center;
	background-size: 100% 100%;
}

.t-flex-row {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.t-flex-row-sa {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}

.t-flex-row-sb {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.t-flex-row-s {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}

.t-flex-row-s-s {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
}

.t-flex-row-s-e {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
}

.t-flex-row-e {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	line-height: 60rpx;
}

.t-flex-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.t-flex-col-sa {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.t-flex-col-sb {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.t-flex-col-s {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

.t-flex-col-s-s {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

.t-flex-col-s-e {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
}

.t-flex-col-e {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
}

.t-xxcy image {
	width: 400rpx;
	height: 148rpx;
	margin-top: 139rpx;
}

.t-xxcy-ts {
	width: 510rpx;
	height: 100rpx;
	background: #fef2cd;
	border-radius: 20rpx;
	font-size: 30rpx;
	color: #d93637;
	margin-top: 43rpx;
}

.t-tk-zj {
}

.t-tk-zj-tip {
	width: 347rpx;
	height: 106rpx;
	margin-top: 44rpx;
}

.t-tk-zj-desc {
	width: 474rpx;
	height: 281rpx;
	background: #fef2cd;
	border-radius: 20rpx;
	margin-top: 2rpx;
}

.t-zj-jp {
	width: 264rpx;
	height: 157rpx;
}

.t-zj-jp-desc {
	font-size: 24rpx;
	color: #d93637;
	text-align: justify;
	width: 420rpx;
}

.t-click-class {
	opacity: 0.7;
}
</style>
