<template>
	<swiper :options="swiperOption" ref='swi'>
	    <swiper-slide v-for="slide in swipers" :key = "slide.id">
	    	<img :src="joinImgUrl(slide.imgUrl)"/>
	    </swiper-slide>
	    <div class="swiper-pagination" slot="pagination"></div>
  	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
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
			        observeParents:true
		        }
	      	}
    	},
    	mounted() {
    	},
    	methods:{
    		joinImgUrl:function(_url){
    			return "https://static.fuiou.com/sys/o2o/"+_url;
    		}
    	},
    	created(){
    	},
    	components:{
    		swiper,
      		swiperSlide
    	}
  	}
</script>

<style lang="less" scoped>
	.swiper-container{
		width:100%;
		height:5rem;
		&.active{
			display:block;
		}
		.swiper-wrapper{
			width:100%;
			height:5rem;
			.swiper-slide{
				width:100%;
				img{
					width:100%;
				}
			}
		}
	}
</style>