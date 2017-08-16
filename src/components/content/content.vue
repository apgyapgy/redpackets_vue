<template>
	<div id="content" class="active">
		<span class="title"></span>
		<div v-for="ty in types"  class="con">
			<img class="title onclick oprStat" :src="joinImgUrl(ty.images.imgUrl)"/>
			<ul class="list clearfix onclick">
				<li v-for="list in ty.groupons" class="onclick oprStat active" data-url="list.images[0].linkUrl" data-mid="">
					<Cutdown :endtime="list.dueTm?list.dueTm.time:new Date().getTime()"></Cutdown>
					<div class="img_wrap">
						<img :src="joinImgUrl(list.images[0].imgUrl)" alt="" />
					</div>
					<div class="info_wrap">
						<div class="voucher">
							<div class="voucher_price"><span>领券</span><b>{{couponPrice(list.gprice,list.oprice)}}元</b></div>
							<div class="buy_price">券后价:￥<b class="yuan">{{priceYuan(list.gprice)}}</b><b v-show="priceFloat(list.gprice)" class="float">{{(''+priceFloat(list.gprice)).substring(1)}}</b></div>
						</div>
						<div class="name">{{list.title}}</div>
						<span class="solded">已售<b>{{computeSolded(list.stock)}}</b>件</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Cutdown from 'components/cutdown/cutdown';
	export default{
		props:{
			types:{
				type:Array
			}
		},
		created(){
			if(this.types){
				console.log("types:",this.types);
			}
		},
		methods:{
			joinImgUrl:function(_url){
				return "https://static.fuiou.com/sys/o2o/"+_url;
			},
			computeSolded:function(_num){
				_num -= 0;
				if(_num > 10000){
					return (parseInt(_num/1000))/10 + '万';
				}
				return _num;
			},
			couponPrice:function(gp,op){
				return (op - gp)/100;
			},
			priceYuan:function(gp){
				return parseInt(gp/100);
			},
			priceFloat:function(gp){
				var _float = gp - parseInt(gp/100)*100;
				_float /= 100;
				if(_float == 0){
					return 0;
				}else{
					return  _float;
				}
			}
		},
		mounted(){
			if(this.types){
				console.log("mounted types:",this.types);
			}
		},
		components:{
			Cutdown
		}
	}
</script>

<style lang="less" scoped>
	/*content*/
	#content{
		display:none;
		width:100%;
		&.active{
			display:block;
		}
		.title{
			display:block;
			width:100%;
			height:auto;
			margin-bottom:0.1rem;
		}
		.list{
			padding-left:0.1rem;
			width:100%;
			box-sizing:border-box;
			li{
				display:none;
				position:relative;
				float:left;
				padding-right:0.1rem;
				margin-bottom:0.24rem;
				width:50%;
				height:5.16rem;
				box-sizing:border-box;
				&.active{
					display:block;
				}
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
							margin-top:0.12rem;
							min-width:1.3rem;
							height:0.32rem;
							background:#e40528;
							border-radius:0.05rem;
							font-size:0.24rem;
							color:#fff;
							align-items:center;
							span{
								padding:0 0.05rem;
								height:0.32rem;
								line-height:0.32rem;
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
								margin-right:0.02rem;
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
					.name{
						width:100%;
						height:0.6rem;
						overflow:hidden;
						line-height:0.3rem;
						font-size:0.24rem;
						font-family:"HiraginoSansGB W3";
						color:#666;
						word-break:break-all;
						text-align:left;
					}
					.solded{
						position:absolute;
						bottom:0.04rem;
						right:0.15rem;
						color:#999;
						font-size:0.2rem;
					}
				}
			}
		}
	}
</style>

<!--for(var i = 0;i < _types.length;i++){
	var _lists = _types[i].groupons;
	var _domstr = '<div class="con"><img class="title onclick oprStat" data-mid="'+_types[i].tpName+'" data-url="'+_types[i].images.linkUrl+'" src="'+(_imgPre+_types[i].images.imgUrl)+'"/><ul class="list clearfix onclick">';
	for(var j = 0;j < _lists.length;j++){
		var _dt = _lists[j].dueTm?_lists[j].dueTm.time:new Date().getTime();//倒计时时间
		var _oprice = _lists[j]["oprice"],_gprice =_lists[j]["gprice"];//oprice原价，gprice券后价
		//原价-券后价  =》 优惠券价
		var _qprice = Math.abs((_oprice - _gprice)/100);
		_gprice /= 100;
		if(Math.abs(_gprice) > Math.abs(parseInt(_gprice))){//券后价有小数  10分=0.1元
			var numToStr = "" + _gprice;
			var _floatPrice = numToStr.substring(numToStr.indexOf(".")+1);
			_opstr = '<b class="yuan">'+parseInt(_gprice)+'</b><b class="float">.'+_floatPrice+'</b>'
		}else{
			_opstr = '<b class="yuan">'+_gprice+'</b>';
		}
		if(_lists[j]['images'].length){
			var _imgStr = '<img class="lazy" data-original="'+(_imgPre+_lists[j]["images"][0]["imgUrl"])+'">';
		}else{
			_imgStr = '<img class="lazy" data-original="">';
		}
		var _solded = _lists[j].stock>10000?(parseInt(_lists[j].stock/1000)/10)+"万":_lists[j].stock;
		_domstr += '<li class="onclick oprStat active" data-url="'+_lists[j].outLinkUrl+'" data-mid="'+_lists[j].grouponId+'">'
					+'<div class="cutdown" data-endtime="'+_dt+'">'
						+'<span class="hour"></span>'
						+'<b>:</b>'
						+'<span class="minutes"></span>'
						+'<b>:</b>'
						+'<span class="seconds"></span>'
					+'</div>'
					+'<div class="img_wrap">'
						+_imgStr
					+'</div>'
					+'<div class="info_wrap">'
						+'<div class="voucher">'
							+'<div class="voucher_price"><span>领券</span><b>'+_qprice+'元</b></div>'
							+'<div class="buy_price">券后价:￥'+_opstr+'</div>'
						+'</div>'
						+'<div class="name">'+_lists[j].title+'</div>'
						+'<span class="solded">已售<b>'+_solded+'</b>件</span>'
					+'</div>'
				+'</li>';
	}
	_domstr += '</ul></div>';
	_domArr.push(_domstr);
}-->