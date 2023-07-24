<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- header组件 -->
    <Header></Header>
    <!-- 轮播图 -->
    <Slick :images="carouselImages"></Slick>
    <BaseTitle :data="data"></BaseTitle>
    <!-- 产品优势 -->
    <div class="tw-text-center tw-text-[#999] tw-text-[14px] tw-mb-[36px]">
      <p>企业数据安全管理系统 </p>
      <p>保护企业数据不被第三方应用平台实时采集、收集</p>
    </div>
    <div class="tw-hidden lg:tw-block index-card tw-container tw-mb-[160px]">
      <ul class="tw-flex tw-justify-center tw-gap-[26px]">
        <li  v-for="(item, index) in productCon"
          :key="index+item"
          class="tw-w-[390px]">
           <div class="tw-h-[346px] tw-bg-[#ccc]">
            
            <img src="../public/default.png" :data-src="item.url" class="tw-w-full tw-h-full"   />
           </div>
           <div class="tw-w-full tw-h-[309px] tw-pt-[28px] tw-pl-[22px] tw-pr-[10px] tw-font-medium tw-text-[16px] tw-leading-[42px] " style="box-shadow: 0px 9px 32px 0px rgba(83,83,83,0.1);border-radius: 12px 12px 0px 0px;">
              <h3 class=" tw-text-[#2C5C58]">
                <span class="tw-inline-block tw-w-[5px] tw-h-[16px] tw-bg-[#2C5C58] tw-mr-[14px] tw-align-middle"></span>
                <p class=" tw-inline-block tw-align-middle">{{ item.title1 }}</p>
                <p>{{ item.title2 }}</p>
              </h3>
              <div class="tw-mt-[14px] tw-leading-[37px] tw-font-normal tw-text-[#333] ">
                <p>{{ item.text1 }}  </p>
                <p>{{ item.text2 }}</p>
                <p>{{ item.text3 }}</p>
              </div>
           </div>
        </li>
      </ul>
    </div>
    <div class="lg:tw-hidden sm:tw-block sm:tw-mb-[27px]" >
      <ul class="tw-flex tw-flex-wrap tw-justify-center">
        <li v-for="(item1, index1) in productCon"
          :key="index1+item1"
         class="tw-flex tw-flex-wrap tw-justify-center tw-px-[30px] tw-pb-[20px] tw-pt-[26px] tw-w-full" style="box-shadow: 0px 9px 32px 0px rgba(83,83,83,0.1);">
         <h3 class="tw-w-full tw-text-center tw-my-[26px] tw-text-[16px] tw-font-medium tw-text-[#333]">{{ item1.title }}</h3>
         <img :src="item1.url_m" width="72.2%" />
          <div class="tw-w-full tw-justify-start tw-mt-[22px] tw-mb-[10px] tw-text-[14px] tw-text-[#2C5C58]">
            <p>{{ item1.title1 }}</p>
            <p>{{ item1.title2 }}</p>
          </div>
          <div  class="tw-w-full tw-justify-start tw-text-[12px] tw-text-[#999]">
            <p>{{ item1.text1 }}</p>
            <p>{{ item1.text2 }}</p>
            <p>{{ item1.text3 }}</p>
          </div>
        </li>

      </ul>
    </div>
    <div>
      <img src="../public/default.png" data-src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/footer_bg.webp" class="tw-w-full" />
    </div>
    <Footer></Footer>
  </div>
  </template>

  <script setup>
    import {ref} from 'vue'
    const  carouselImages = ref([
      {url:["https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner1.webp","https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner1_m.webp"]},
      {url:["https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner2.webp","https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner2_m.webp"]},
      {url:["https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner3.webp","https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner3_m.webp"]},
      {url:["https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner4.webp","https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/banner4_m.webp"]},

    ]) ;

    const productCon =[

    {
        url:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/manage.webp',
        url_m:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/manage_m.webp',
        title1:'数据安全，尽在掌握',
        title2:'不被第三方应用平台实时采集、收集 、存储',
        text1:'企业自主可控',
        text2:'系统适配国产主流的基础软硬件，覆盖操作系统，',
        text3:'CPU处理器、数据库、整机云、浏览器等',
        title:'管理端'
    },
    {
        url:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/magic.webp',
        url_m:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/magic_m.webp',
        title1:'硬件加密，物理隔离',
        title2:'采用国密端到端加密、备份、恢复',
        text1:'密文传输，一次一密',
        text2:'防止智能手机数据信息',
        text3:'被第三方应用实时采集、收集 、存储',
        title:'魔盒端'
    },
    {
        url:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/app.webp',
        url_m:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/app_m.webp',
        title1:'系统授权-集中管理',
        title2:'密文传输、物理隔离、硬件授权、数据信息不经第三方平台',
        text1:'智能手机遗失或更换',
        text2:'数据信息不再使用第三方应用',
        text3:'恢复/克隆/备份',
        title:'APP端'
    },
   
    ]
    const data = {
      title: "产品优势",
      enTitle: "ABOUT PRODUCT"
    }
  </script>
  <style lang="less" scoped>
    .test{
      color:#ccc;
    }
  </style>
