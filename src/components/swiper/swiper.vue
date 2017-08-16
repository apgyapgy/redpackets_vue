<template>
	<div class="swiper-container" :class="swiperSlides.length>0?'active':''">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="slide in swipers">
				<image :src='joinImgUrl(slide.imgUrl)'/>
			</div>
		</div>
	</div>
  	<!--<swiper class="swiperWrapper" :options="swiperOption" :class="swiperSlides.length>0?'active':''">
    	<swiper-slide v-for="slide in swipers">
    		<image :src='joinImgUrl(slide.imgUrl)'/>
    	</swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
  	</swiper>-->
</template>

<script>
//	import Vue from 'vue';
//	import VueAwesomeSwiper from 'vue-awesome-swiper';
//	Vue.use(VueAwesomeSwiper);
  	export default {
    	name: 'carrousel',
    	props:{
    		swipers:Array
    	},
    	data() {
	      	return {
		        swiperOption: {
			        autoplay: 3500,
			        setWrapperSize :true,
			        pagination : '.swiper-pagination',
			        paginationClickable :true,
			        mousewheelControl : true,
			        observeParents:true,
		        },
	        	swiperSlides: [1, 2, 3, 4, 5]
	      	}
    	},
    	mounted() {
    		console.log("swipers:",this.swipers);
      		/*setInterval(() => {
        		console.log('simulate async data')
        		let swiperSlides = this.swiperSlides
        		if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
      		}, 3000);*/
    	},
    	methods:{
    		joinImgUrl:function(_url){
    			console.log("join:",this.swipers)
    			return "https://static.fuiou.com/sys/o2o/"+_url;
    		}
    	},
    	created(){
    	}
  	}
</script>

<style lang="less" scoped>
	.swiper-container{
		display:none;
		width:100%;
		height:5rem;
		&.active{
			display:block;
		}
		.swiper-wrapper{
			width:100%;
			height:5rem;
		}
	}
</style>