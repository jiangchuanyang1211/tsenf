<template>
   <!-- header组件 -->
   <Header></Header>
   <div class="tw-relative">
      <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/service/header.webp" :alt="服务中心" class="tw-w-full tw-hidden lg:tw-block"/>
      <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/service/header_m.webp" :alt="服务中心" class="tw-w-full lg:tw-hidden sm:tw-block"/>
    </div>
    <BaseTitle :data="data"></BaseTitle>
    <div class="advantage-card tw-container tw-mt-[50px] tw-mb-[80px]">
      <ul class=" tw-flex  tw-justify-center lg:tw-flex-nowrap tw-gap-[30px] sm:tw-flex-wrap" >
         <li v-for="(item, index) in serviceCon"
          :key="index+item"
         class="lg:tw-w-[382px] sm:tw-w-full lg:tw-h-[314px] card-shadow tw-flex lg:tw-flex-wrap lg:tw-justify-center tw-items-center lg:tw-p-[34px] sm:tw-pt-[16px] sm:tw-pl-[16px] sm:tw-pb-[18px]">
            <img :src="item.icon" class="lg:tw-w-[96px] lg:tw-h-[96px] sm:tw-w-[80px] sm:tw-h-[80px]"/>
           <h4 class="tw-w-full tw-text-center tw-items-center  lg:tw-text-[18px] sm:tw-text-[14px]  tw-flex-wrap tw-flex sm:tw-pl-[16px] lg:tw-pl-0 lg:tw-justify-center sm:tw-justify-start">{{ item.title }}
               <div class="tw-w-full tw-flex-wrap tw-flex lg:tw-justify-center sm:tw-justify-start tw-mt-[10px] lg:tw-mb-[26px] sm:tw-mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" height="4px" viewBox="0 0 80 4" version="1.1">
                  <title>分隔线</title>
                  <defs>
                     <linearGradient x1="1.95225522%" y1="49.875%" x2="99.8875108%" y2="50.1247132%" id="linearGradient-1">
                           <stop stop-color="#191626" offset="0%"/>
                           <stop stop-color="#183C34" offset="24.808785%"/>
                           <stop stop-color="#000000" stop-opacity="0" offset="100%"/>
                     </linearGradient>
                  </defs>
                  <g id="网页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                     <g id="服务中心备份" transform="translate(-512.000000, -1185.000000)" fill="url(#linearGradient-1)">
                           <g id="Rectangle-3" transform="translate(512.000000, 1185.000000)">
                              <rect id="s" x="0" y="0" width="80" height="4"/>
                           </g>
                     </g>
                  </g>
               </svg>
               </div>
               <p class="tw-w-full sm:tw-text-left sm:tw-mt-4 lg:tw-mt-0 lg:tw-text-center   sm:tw-text-[12px] md:tw-text-[14px]">{{ item.text }}</p>
           </h4>
        </li>

      </ul>
    </div>
    <Footer></Footer>
</template>

<script setup>
import {ref} from 'vue'
   const serviceCon = [
      {
         icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/service/phone.webp',
         title:'客服电话',
         text:'028-85735574'
      },
      {
         icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/service/email.webp',
         title:'客服邮箱',
         text:'service@tsenf.com'
      },
      {
         icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/service/map.webp',
         title:'地址',
         text:'成都市天府新区宁波路中铁卓越中心'
      },
   ]
   const data = {
      title: "服务中心",
      enTitle: "ABOUT SERVICE"
   }
</script>

<style>
 .card-shadow{
   box-shadow: 0px 9px 32px 0px rgba(83,83,83,0.1);
 }
</style>
