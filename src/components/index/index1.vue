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
	
	import axios from 'axios';
	//Vue.prototype.axios = axios;
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
			$$.ajax({
				url:'https://buy.fuiou.com/200006',
				type:"GET",
				dataType:"jsonp",
				async:true,
				jsonp:'jsonpCallback',
				timeout:20000,
				cache:false,
				contentType:"application/x-www-form-urlencoded;charset=utf-8",
				data:_data,
				success:function(res){
					console.log("success:",res);
					if(res.images.length>0){
						that.swipers = res.images;
					}
					if(res.types.length){
						that.types = res.types;
					}
				},
				error:function(res){
					console.log("err:",res);
				}
			});
			/*axios.get('https://buy.fuiou.com/200006',qs.stringify(_data))
			//axios.get('https://fly.fuiou.com/custom/queryCustomedInf.sxf?FM={loginId:15316117950}')
			.then(function(res){
				console.log(res);
			})
			.catch(function(err){
				console.log(err);
			});*/
		}
	}
</script>

<style lang="less" scoped>
	.padding{
		width:100%;
		height:.8rem;
	}
</style>