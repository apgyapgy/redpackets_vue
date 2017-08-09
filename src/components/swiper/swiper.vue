<template>
  	<swiper :options="swiperOption" :class="swiperSlides.length>0?'active':''">
    	<swiper-slide v-for="{slide,index} in swipers" :key="slide">
    		<!--<span data-md='{slide.imgUrl}'>{{slide.linkUrl}}</span>-->
    		{{slide.imgUrl}}
    		<!--<image :src='slide.imgUrl'/>-->
    	</swiper-slide>
    	<div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</template>

<script>
  	export default {
    	name: 'carrousel',
    	props:{
    		swipers:{
    			type:Object
    		}
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