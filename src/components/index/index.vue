<template>
	<div class="index">
		<Heade></Heade>
		<div class="padding"></div>
		<Swiper :swipers="swipers"></Swiper>
		<Con :types="types"></Con>
		<Top :showTop="showTop"></Top>
	</div>
</template>

<script>
	import Vue from 'Vue';
	import Header from "components/header/header";
	import Swiper from 'components/swiper/swiper';
	import Content from 'components/content/content';
	import Top from 'components/top/top';
	import qs from 'qs';
	import $$ from 'jquery';
	
	export default{
		data(){
			return {
				swipers:[],
				goods:[],
				types:[],
				showTop:false,
				outerHeight:window.outerHeight
			}
		},
		components:{
			'Heade':Header,
			Swiper,
			'Con':Content,
			Top
		},
		methods:{
			handleScroll:function(e){
				if(window.scrollY > this.outerHeight){
					if(this.showTop == false){
						this.showTop = true;
					}
				}else{
					if(this.showTop == true){
						this.showTop = false;
					}
				}
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll);
		},
		created:function(){
			var that = this;
			var _data = {
				"subjectId":"C38583840074554",
				"networkTp":1,
				"userId":'13625625040'
			};
			this.$http.jsonp("https://buy.fuiou.com/200006",{
				params:{
					"subjectId":"C38583840074554",
					"networkTp":1,
					"userId":'13625625040'
				},
				timeout:20000,
				jsonp:'jsonpCallback'
			}).then(function(res){
				res = res.body;
				console.log("success:",res);
				if(res.images.length>0){
					that.swipers = res.images;
				}
				if(res.types.length){
					that.types = res.types;
				}
			}).catch(function(res){
				console.log("err:",res);
			});
		}
	}
</script>

<style lang="less" scoped>
	.padding{
		width:100%;
		height:.8rem;
	}
</style>