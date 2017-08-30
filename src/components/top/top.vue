<template>
	<div id="totop" @click="totop" v-show="showTop">
		<span class="icon"></span>
		<span class="words">顶部</span>
	</div>
</template>

<script>
	import $$ from 'jquery';
	export default{
		props:{
			showTop:Boolean
		},
		methods:{
			totop:function(){
				$$("html,body").animate({"scrollTop":0},300);
			}
		}
	}
</script>

<style lang="less" scoped>
	#totop{
		position:fixed;
		right:.5rem;
		bottom:1rem;
		width:.9rem;
		height:.9rem;
		border-radius:50%;
		background:#fff;
		border:1px solid #ccc;
		box-sizing: border-box;
		span{
			display:block;
			width:100%;
			height:50%;
			&.icon{
				background:url(top.png) no-repeat center bottom;
				background-size:.24rem .28rem;
			}
			&.words{
				text-align:center;
				font-size:12px;
				line-height:.3rem;
			}
		}
	}
</style>