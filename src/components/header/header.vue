<template>
	<div class="header">
		<span class="back">返回</span>
		<div class="title">淘宝红包</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	.header{
		position:relative;
		width:100%;
		height:0.8rem;
		line-height:0.8rem;
		color:#fff;
		background:#e40528;
		.back{
			position:absolute;
			left:0;
			top:0;
			height:0.8rem;
			line-height:0.8rem;
			padding-left:0.5rem;
			font-size:0.32rem;
			background:url("https://static.fuiou.com/sys/o2o/redpackets/img/redpackets/back.png") no-repeat 0.24rem center;
			background-size:0.2rem 0.35rem;
		}
		.title{
			width:100%;
			text-align:center;
			font-size:0.32rem;
		}
	}
</style>