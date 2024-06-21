<script>
	export default {
		globalData:{  
			volumeId:1,//卷的ID
		},
		onLoad(){},
		onLaunch:function(){},
		onShow:function() {},
		onHide:function() {},
		methods:{
			encrypt(word){
			    var key = CryptoJS.enc.Utf8.parse("1234567891234567");
			    var srcs = CryptoJS.enc.Utf8.parse(word);
			    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
			    return encrypted.toString();
			},
			decrypt(word){
			    var key = CryptoJS.enc.Utf8.parse("1234567891234567");
			    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
			    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
			}
		}
	}
</script>  

<style  lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
</style>
