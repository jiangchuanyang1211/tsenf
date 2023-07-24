<template>
  <div class="tw-relative" id="swiper-container" @mouseover="stopTimer"  @mouseleave="startTimer">
    <div class="tw-absolute tw-z-10 tw-w-full tw-h-full tw-opacity-0 hover:tw-opacity-50" >
      <div class="sm:tw-hidden  lg:tw-flex tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-text-white tw-text-xl tw-justify-between tw-items-center tw-p-2">
        <div class="tw-cursor-pointer tw-text-[#fff]" @click="prevImg">&#8592;</div>
        <div class="tw-cursor-pointer tw-text-[#fff]" @click="nextImg">&#8594;</div>
      </div>
    </div>
    <div class="tw-relative">
      <img  :src="currentImg[0]" :alt="currentImg" class="tw-w-full lg:tw-block sm:tw-hidden"/>
      <img  :src="currentImg[1]?currentImg[1]:currentImg[0]" :alt="currentImg" class="tw-w-full sm:tw-block lg:tw-hidden"/>
      <div v-if="showDots" class="tw-absolute tw-bottom-0 tw-left-1/2 tw-translate-x-[-50%] tw-mb-2 tw-z-[99]">
          <div v-for="(img, index) in images" :class=" {'tw-bg-[#999]': index !== currentIndex, 'tw-bg-[#fff]': index === currentIndex}" class="tw-inline-block hover:tw-cursor-pointer tw-w-2 tw-h-2 tw-rounded-full tw-mx-1 tw-cursor-pointer" @click="jumpImg(index)"  :key="img+index"></div>
       
      </div>
      <div v-if="currentTitle && currentTitle.length>0" class="tw-absolute tw-flex tw-translate-x-[-50%] tw-flex-nowrap tw-items-center tw-leading-[112px] tw-gap-[30px] tw-top-[215px] tw-left-1/2 tw-text-center ">
        <h2 class=" tw-font-semibold tw-text-[80px] tw-text-[#FBFBFB]">{{ currentTitle[0] }}</h2>
        <h3 class=" tw-text-[40px] tw-text-[#E5E5E5]">{{ currentTitle[1] }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 2000
    },
    showDots: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const currentIndex = ref(0)
    let timer = null;
    const currentImg = computed(() => props.images[currentIndex.value].url)
    console.log(currentImg)
    const currentTitle = computed(() => props.images[currentIndex.value].titles)
    const nextImg = () => {
      if (currentIndex.value === props.images.length - 1) {
        currentIndex.value = 0
      } else {
        currentIndex.value++
      }
    }

    const prevImg = () => {
      if (currentIndex.value === 0) {
        currentIndex.value = props.images.length - 1
      } else {
        currentIndex.value--
      }
    }

    
    const startTimer = () => {
      if(timer)clearInterval(timer);
      timer = setInterval(() => {
        nextImg()
      }, 5000)
    }
    const stopTimer = () => {
      clearInterval(timer);
    }

    const jumpImg = (index) => {
      currentIndex.value = index
    }

    startTimer();

    onMounted(() => {
      const obj = document.getElementById('swiper-container');
      startTimer();
      touches(obj,'swipeleft',nextImg);
      touches(obj,'swiperight',prevImg);
    })

    onBeforeUnmount(() => {
      stopTimer()
    })
    const touches = (obj,direction,fun)=>{  
//obj:ID对象  
//direction:swipeleft,swiperight,swipetop,swipedown,singleTap,touchstart,touchmove,touchend  
//   划左， 划右， 划上， 划下，点击， 开始触摸， 触摸移动， 触摸结束  
//fun:回调函数  
    var defaults = {x: 5,y: 5,ox:0,oy:0,nx:0,ny:0};  
    direction=direction.toLowerCase();  
    //配置：划的范围在5X5像素内当点击处理  
    obj.addEventListener("touchstart",function() {  
        defaults.ox = event.targetTouches[0].pageX;  
        defaults.oy = event.targetTouches[0].pageY;  
        defaults.nx = defaults.ox;  
        defaults.ny = defaults.oy;  
        if(direction.indexOf("touchstart")!=-1)fun();  
    }, false);  
    obj.addEventListener("touchmove",function() {  
        event.preventDefault();  
        defaults.nx = event.targetTouches[0].pageX;  
        defaults.ny = event.targetTouches[0].pageY;  
        if(direction.indexOf("touchmove")!=-1)fun();  
    }, false);  
    obj.addEventListener("touchend",function() {  
        var changeY = defaults.oy - defaults.ny;  
        var changeX = defaults.ox - defaults.nx;  
        if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>defaults.y){  
        //左右事件  
            if(changeX > 0) {  
                if(direction.indexOf("swipeleft")!=-1)fun();  
            }else{  
                if(direction.indexOf("swiperight")!=-1)fun();  
            }  
        }else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>defaults.x){  
            //上下事件  
            if(changeY > 0) {  
                if(direction.indexOf("swipetop")!=-1)fun();  
            }else{  
                if(direction.indexOf("swipedown")!=-1)fun();  
            }  
        }else{  
            //点击事件  
            if(direction.indexOf("singleTap")!=-1)fun();  
        }  
        if(direction.indexOf("touchend")!=-1)fun();  
    }, false); 
}



    return {
      currentIndex,
      currentImg,
      currentTitle,
      nextImg,
      prevImg,
      jumpImg,
      startTimer,
      stopTimer
    }
  }
}
</script>

<style>
  .carousel-dots {
    margin: 8px auto;
    text-align: center;
  }
</style>
