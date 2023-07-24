<template>
  <!-- header组件 -->
  <Header></Header>
  <div class="tw-relative">
    <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/header.webp" :alt="关于我们" class="tw-w-full tw-hidden lg:tw-block"/>
    <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/header_m.webp" :alt="关于我们" class="tw-w-full lg:tw-hidden sm:tw-block"/>
   </div>
   <BaseTitle :data="data"></BaseTitle>
   <div class="tw-w-full lg:tw-h-[783px] tw-relative lg:tw-mb-[409px] lg:tw-pt-[520px] sm:tw-pt-[250px] about-bg" >
      <div class="about-bg-text lg:tw-w-[540px] sm:tw-w-[57%] tw-text-center lg:tw-text-[16px]  sm:tw-text-[10px] tw-text-[#fff] tw-absolute sm:tw-right-[5%] lg:tw-top-[260px] lg:tw-right-[12.5%] sm:tw-top-[8%] ">
        公司于2016年4月在四川成都天府新区注册成立，2019年12月高新企业认证通过，2022年2月24日成都市知识产权优势示范单位。
成立至今已有12项国家技术发明专利授权，软件著作权21项，商标注册22项，实用新型专利4项、
外观专利2项等获得授权，目前累计提交发明专利33项在陆续授权中。
      </div>
      <div class="tw-w-full tw-flex tw-justify-center tw-px-[35px] lg:tw-pb-0 sm:tw-pb-[54px] lg:tw-mt-0 sm:tw-mt-[-20px]">
        <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/honors.webp" class="tw-hidden lg:tw-block"/>
        <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/honors_m.webp" class="lg:tw-hidden sm:tw-block"/>
      </div>
   </div>
   <Footer></Footer>
</template>

<script setup>
const data = {
      title: "公司介绍",
      enTitle: "ABOUT COMPANY"
   }
</script>

<style>
@media (min-width: 960px) {
  .about-bg{
    background:url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/content.webp');
    background-position: center;
    background-repeat: no-repeat;
  }
  .about-bg-text{
    right: calc(50% - 540px);
  }
}
@media (max-width: 959px) {
  .about-bg{
    background:url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/about/content_m.webp');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

</style>
