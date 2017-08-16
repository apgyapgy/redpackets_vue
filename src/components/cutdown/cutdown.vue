<template>
	<div class="cutdown">
		<span class="hour" ref="cut">{{h}}</span>
		<b>:</b>
		<span class="minutes">{{m}}</span>
		<b>:</b>
		<span class="seconds">{{s}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			endtime:Number
		},
		data(){
			return{
				h:'00',
				m:'00',
				s:'00',
				_timer:null,
				nTime:0
			}
		},
		mounted(){
			this.getCutDownTime();
			this.startCutDown();
		},
		methods:{
			//时间格式化
			getCutDownTime:function(){ 
				this.nTime = (new Date()).getTime();
				var _diffTime = (this.endtime - this.nTime);
				if(_diffTime <= 0){
					this.h = '00';
					this.m = '00';
					this.s = '00';return;
				}
				//截至时间减去当前时间获得剩余时间
				var nH = Math.floor(_diffTime/(1000*60*60));
				nH = nH < 10?'0'+nH:nH;
				//定义参数 获得小时
				var nM = Math.floor(_diffTime/(1000*60)) % 60;
				nM = nM < 10?'0'+nM:nM;
				//定义参数 获得分钟
				var nS = Math.floor(_diffTime/1000) % 60;
				nS = nS < 10?'0'+nS:nS;
				this.h = nH;
				this.m = nM;
				this.s = nS;
				return;
			},
			startCutDown:function(){
				this.render();
			},
			render:function(){
				var that = this;
				that.getCutDownTime();
				if((that.endTime - that.nTime) <= 0){
					window.clearTimeout(that._timer);
				}else{
					that._timer = window.setTimeout(function(){
						that.render();
					},1000);
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.cutdown{
		position:absolute;
		right:0.2rem;
		top:0.2rem;
		height:0.36rem;
		font-family:"HiraginoSansGB W3";
		color:#fff;
		font-size:0.2rem;
		line-height:0.36rem;
		b{
			float:left;
			width:0.12rem;
			height:0.36rem;
			text-align:center;
			color:rgba(0,0,0,0.8);
		}
		span{
			float:left;
			width:0.36rem;
			height:0.36rem;
			border-radius:5px;
			background:rgba(0,0,0,0.8);
			text-align:center;
		}
	}
</style>