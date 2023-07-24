<template>
   <!-- header组件 -->
   <Header></Header>
   <div class="tw-relative">
     <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/header.webp" :alt="解决方案" class="tw-w-full tw-hidden lg:tw-block"/>
     <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/header_m.webp" :alt="解决方案" class="tw-w-full lg:tw-hidden sm:tw-block"/>
    </div>
    <BaseTitle :data="data"></BaseTitle>
   <div class="tw-w-full solution-bg1 tw-relative lg:tw-block sm:tw-hidden">
      <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/bg1.webp"/>
      <h3 class="tw-absolute tw-text-[#333] tw-top-[4%] tw-left-[23%] tw-text-[24px] tw-font-semibold">集团用户</h3>
      <h3 class="tw-absolute tw-text-[#333] tw-bottom-[44%] tw-right-[23.8%] tw-text-[24px] tw-font-semibold">合作伙伴解决方案</h3>
      <div class="tw-absolute solution-con1 tw-pt-[44px] tw-pl-[76px] tw-pb-[70px] tw-left-[18.7%] tw-text-[#333]" style="top:calc(22% - 200px)">

         <h4 class="solution-con1-title tw-relative tw-mb-[23px] tw-font-semibold">
            集团用户解决方案
         </h4>
         <ul class="tw-w-[631px] tw-leading-[48px]">
            <li v-for="(item, index) in userCon"
          :key="index+item"
            ><span class="tw-inline-block tw-w-2 tw-h-2 tw-bg-[#2C5C58] tw-rounded-[8px] tw-align-middle tw-mr-3"></span>{{ item }}</li>
         </ul>
      </div>
      <div class=" tw-w-[38.2%] tw-absolute solution-con2 tw-pt-[104px] tw-pl-[76px] tw-pb-[6%] tw-left-[25%] tw-bg-[#2C5C58] tw-text-[#fff]" style="bottom:calc(31% - 350px)">
         <h4 class="solution-con1-title tw-relative tw-mb-[23px] tw-font-semibold">
            合作伙伴解决方案
         </h4>
         <ul class="tw-w-[563px] tw-leading-[57px]">
            <li 
            v-for="(item, index) in partnerCon"
          :key="index+item"
            class="tw-flex tw-items-center"><span class="tw-inline-block  tw-w-2 tw-h-2 tw-bg-[#fff] tw-rounded-[8px] tw-align-middle tw-mr-3"></span>{{ item }}</li>
         </ul>
      </div>
   </div>
   <!-- 移动端 -->
   <div class="sm:tw-bolck lg:tw-hidden tw-relative tw-w-full solution-bg1  tw-h-[85vw] sm:tw-min-h-[500px] md:tw-min-h-[400px] tw-max-h-[480px] ">
      <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/bg1_m.webp" class="tw-w-full"/>
      <h3 class="tw-absolute tw-text-[#333] tw-text-[18px] tw-leading-[78px] tw-top-[-1vw] tw-left-[23%]">集团用户</h3>
      <div class=" tw-w-[74vw] tw-pr-[27px] tw-relative solution-con1 tw-pt-[11px] tw-pl-[10px] tw-pb-[27px] tw-left-[18px] tw-top-[-100px] tw-text-[#333]" >

         <h4 class="solution-con1-title tw-relative tw-mb-[23px] tw-text-[16px]">
            集团用户解决方案
         </h4>
         <ul class="tw-w-full tw-leading-[28px] tw-text-[10px]">
            <li v-for="(item, index) in userCon"
          :key="index+item"
            class=""><span class="tw-inline-block tw-w-[6px] tw-h-[6px]  tw-bg-[#2C5C58] tw-rounded-[6px] tw-align-middle tw-mr-[6px]"></span>{{ item }}</li>
         </ul>
      </div>
   </div>
   <div></div>
   <div class="sm:tw-bolck lg:tw-hidden tw-relative tw-w-full solution-bg1  solution-sm2 tw-mt-[20px] tw-h-[80vw] tw-min-h-[380px] tw-max-h-[540px]">
      <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/bg2_m.webp" class="tw-w-full"/>
      <h3 class="tw-absolute tw-text-[#333] tw-top-[-7px] tw-right-[11vw] tw-text-[16px]">
         合作伙伴<br/>解决方案
      </h3>
      <div class=" tw-pr-[27px] tw-w-[65vw] tw-min-h-[300px]  tw-absolute solution-con2 tw-pt-[11px] tw-pl-[10px] tw-pb-[30px] tw-left-[10px] tw-bg-[#2C5C58] tw-text-[#fff] tw-bottom-[22px] " >
         <h4 class="solution-con1-title tw-relative tw-mb-[23px] tw-text-[16px]">
            集团用户解决方案
         </h4>
         <ul class="tw-w-full tw-leading-[28px] tw-text-[10px]">
            <li v-for="(item, index) in partnerCon"
          :key="index+item"
            class=""><span class="tw-inline-block tw-w-[6px] tw-h-[6px] tw-bg-[#fff] tw-rounded-[6px] tw-align-middle tw-mr-[6px]"></span>{{ item }}</li>
         </ul>
      </div>


   </div>
   <Footer></Footer>
 </template>

 <script setup>
   const data = {
      title: "解决方案",
      enTitle: "ABOUT SOLUTIONS"
   }
   import {ref} from 'vue'
  const userCon = ref([
  '集团数据分机构采用逻辑隔离',
  '集团下属子机构之间的内部协作关系需由上级机构建立',
  '集团管理员创建机构时，为每个机构生唯一编号',
  '支持同一个用户绑定多个机构，多个部门（可跨机构、跨部门）',
  '解决集团人员结构复杂，跨机构跨部门不便的痛点'
  ])
  const partnerCon = ref([
  '合作伙伴使用单独的机构编号',
  '多个合作伙伴数据根据机构编号和部门编号做逻辑隔离',
  '合作伙伴不具备登录后台管理系统权限',
  '合作伙伴通讯录创建需要集团系统管理员才能创建',
  '合作伙伴的通讯录、魔盒数据、交流数据与集团数据库物理隔离',
  '合作伙伴用户只能查看集团对接部门的交流数据'
  ])
 </script>

 <style>
 @media (min-width: 960px) {
   /* .solution-bg1{
      background:url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/bg1.webp')
   }
   .solution-bg2{
      background:url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/solution/bg2.webp')
   } */
 }
 @media (max-width: 374px) {
   .solution-sm2{
      min-height:420px
   }
 }
 .solution-bg1 .solution-con1{
   background: #FFFFFF;
   box-shadow: 0px 9px 32px 0px rgba(83,83,83,0.1);
 }
 
 .solution-con1-title:after{
   content: '';
    position: absolute;
    bottom:-5px;
    left:0;
    width: 56px;
    height: 4px;
    background: linear-gradient(136deg, #191626 0%, #183C34 25%, rgba(0,0,0,0) 100%);
 }



 </style>
