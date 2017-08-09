<template>
	<div class="content active">
		<span class="title"></span>
		<ul id="list" class="clearfix onclick">
			<li class="onclick oprStat active" data-url="" data-mid="">
				<div class="cutdown" data-endtime="">
					<span class="hour">12</span>
					<b>:</b>
					<span class="minutes">12</span>
					<b>:</b>
					<span class="seconds">12</span>
				</div>
				<div class="img_wrap">
					<img src="https://static.fuiou.com/sys/o2o/image/coupon/coupon_15016664833492320_m.png" alt="" />
				</div>
				<div class="info_wrap">
					<div class="voucher">
						<div class="voucher_price"><span>领券</span><b>20元</b></div>
						<div class="buy_price">券后价:￥<b class="yuan">9</b><b class="float">.99</b></div>
					</div>
					<div class="name">我就是来测试的，测试的</div>
					<span class="solded">已售<b>369</b>件</span>
				</div>
			</li>
			<li class="onclick oprStat active" data-url="" data-mid="">
				<div class="cutdown" data-endtime="">
					<span class="hour">12</span>
					<b>:</b>
					<span class="minutes">12</span>
					<b>:</b>
					<span class="seconds">12</span>
				</div>
				<div class="img_wrap">
					<img src="https://static.fuiou.com/sys/o2o/image/coupon/coupon_15017253244811618_m.png" alt="" />
				</div>
				<div class="info_wrap">
					<div class="voucher">
						<div class="voucher_price"><span>领券</span><b>20元</b></div>
						<div class="buy_price">券后价:￥<b class="yuan">9</b><b class="float">.99</b></div>
					</div>
					<div class="name">我就是来测试的，测试的</div>
					<span class="solded">已售<b>369</b>件</span>
				</div>
			</li>
			<li class="onclick oprStat active" data-url="" data-mid="">
				<div class="cutdown" data-endtime="">
					<span class="hour">12</span>
					<b>:</b>
					<span class="minutes">12</span>
					<b>:</b>
					<span class="seconds">12</span>
				</div>
				<div class="img_wrap">
					<img src="https://static.fuiou.com/sys/o2o/image/coupon/coupon_15016660967234786_m.png" alt="" />
				</div>
				<div class="info_wrap">
					<div class="voucher">
						<div class="voucher_price"><span>领券</span><b>20元</b></div>
						<div class="buy_price">券后价:￥<b class="yuan">9</b><b class="float">.99</b></div>
					</div>
					<div class="name">我就是来测试的，测试的</div>
					<span class="solded">已售<b>369</b>件</span>
				</div>
			</li>
			<li class="onclick oprStat active" data-url="" data-mid="">
				<div class="cutdown" data-endtime="">
					<span class="hour">12</span>
					<b>:</b>
					<span class="minutes">12</span>
					<b>:</b>
					<span class="seconds">12</span>
				</div>
				<div class="img_wrap">
					<img src="https://static.fuiou.com/sys/o2o/image/coupon/coupon_15015585449451091_m.png" alt="" />
				</div>
				<div class="info_wrap">
					<div class="voucher">
						<div class="voucher_price"><span>领券</span><b>20元</b></div>
						<div class="buy_price">券后价:￥<b class="yuan">9</b><b class="float">.99</b></div>
					</div>
					<div class="name">我就是来测试的，测试的</div>
					<span class="solded">已售<b>369</b>件</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	.content{
		display:none;
		width:100%;
		&.active{
			display:block;
		}
		.title{
			display:block;
			width:100%;
			height:1.3rem;
			background:url("https://static.fuiou.com/sys/o2o/redpackets/img/redpackets/title.png") no-repeat center;
			background-size:2.86rem 0.98rem;
		}
		#list{
			padding-left:0.1rem;
			width:100%;
			box-sizing:border-box;
			li{
				position:relative;
				float:left;
				padding-right:0.1rem;
				margin-bottom:0.24rem;
				width:50%;
				height:5.16rem;
				box-sizing:border-box;
				.img_wrap{
					width:100%;
					height:4rem;
					border-radius:10px;
					text-align:center;
					font-size:0;
					span{
						height:100%;
						display:inline-block;
						vertical-align:middle;
					}
					img{
						width:100%;
						max-height:4rem;
						height:4rem;
						border-radius:0.1rem;
					}
				}
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
				.info_wrap{
					box-sizing:border-box;
					width:100%;
					height:1.16rem;
					padding-left:0.1rem;
					.voucher{
						width:100%;
						height:0.56rem;
						font-family:"HiraginoSansGB W3";
						color:#e40528;
						.voucher_price{
							float:left;
							display:flex;
							margin-top:0.14rem;
							min-width:1.3rem;
							height:0.3rem;
							background:#e40528;
							border-radius:0.05rem;
							font-size:0.24rem;
							color:#fff;
							span{
								padding:0 0.05rem;
								height:0.3rem;
								line-height:0.3rem;
								text-align:center;
								flex:1;
							}
							b{
								font-weight: normal;
								padding:0 0.05rem;
								height:0.26rem;
								line-height:0.26rem;
								background:#fff;
								color:#e40528;
								border-radius:0.05rem;
								text-align:center;
								margin:0.02rem 0.02rem 0 0;
							}
						}
						.buy_price{
							float:right;
							padding-right:0.06rem;
							font-size:0.28rem;
							height:100%;
							line-height:2em;
							.yuan{
								font-size:0.36rem;
							}
						}
					}
				}
				.name{
					width:100%;
					height:0.6rem;
					overflow:hidden;
					line-height:0.3rem;
					font-size:0.24rem;
					text-align:left;
					font-family:"HiraginoSansGB W3";
					color:#666;
				}
				.solded{
					position:absolute;
					bottom:0.04rem;
					right:0.06rem;
					color:#999;
					font-size:0.2rem;
				}
			}
		}
	}
</style>