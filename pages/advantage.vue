<template>
  <div>
    <Header></Header>

    <img class="tw-hidden md:tw-flex tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/advantage/bg1.png">
    <img class="md:tw-hidden tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/advantage/mBg1.png">

    <BaseTitle :data="data"></BaseTitle>

    <div
      class="
        tw-flex tw-justify-center
        md:tw-mt-[30px] md:tw-pb-[130px]
           tw-mt-[16px]    tw-pb-[20px]  tw-w-full"
    >
      <!-- 内容区 -->
      <div
        class="
          tw-flex tw-justify-between tw-flex-wrap
          md:tw-w-[854px] md:tw-min-w-[854px]
             tw-w-[350px]    tw-min-w-[350px]"
        >
        <div
          v-for="item,index in content" :id="index"
          class="
            advantage-card tw-flex tw-flex-col tw-bg-[#FFFFFF]
            md:tw-w-[412px] md:tw-h-[440px] md:tw-rounded-[12px] md:tw-mb-[30px]
               tw-w-[173px]    tw-h-[228px]    tw-rounded-[6px]     tw-mb-[10px]
          "
        >
          <!-- 图片 -->
          <img class="tw-hidden md:tw-flex md:tw-w-[412px] md:tw-h-[260px]" :src="'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/' + item.mImg">
          <img class="tw-w-[173px] tw-h-[108px] md:tw-hidden" :src="'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/' + item.img">

          <!-- 标题 -->
          <span
            class="
              tw-text-[#333333]
              md:tw-ml-[30px] md:tw-mt-[36px] md:tw-text-[16px]/[22px] md:tw-font-medium
                 tw-ml-[7px]     tw-mt-[18px]    tw-text-[13px]/[19px]    tw-font-normal
            "
            >{{ item.title }}</span>

          <!-- 分割线 -->
          <div
            class="
              advantage-line
              md:tw-w-[56px] md:tw-h-[4px] md:tw-ml-[30px] md:tw-mt-[10px] md:tw-mb-[34px]
                 tw-w-[28px]    tw-h-[2px]    tw-ml-[7px]     tw-mt-[6px]     tw-mb-[12px]
            "
          ></div>

          <!-- 文本 -->
          <span
            v-for="item2,index2 in item.content" :id="index"
            class="tw-hidden md:tw-flex tw-ml-[30px] tw-text-[14px]/[20px] tw-font-normal tw-text-[#333333]"
          >{{ item2 }}</span>

          <!-- 文本(移动端) -->
          <span
            v-for="item2,index2 in item.mContent" :id="index"
            class="md:tw-hidden tw-ml-[7px] tw-pr-[7px] tw-text-[10px]/[14px] tw-font-normal tw-text-[#333333]"
          >{{ item2 }}</span>



        </div>
      </div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>

defineOptions({
  name: "Advantage"
})

const data = {
  title: "核心优势",
  enTitle: "ABOUT ADVANTAGE"
}

const content = [
  {
    title: "系统授权-集中管理",
    content: ["通过统一的授权机制和管理平台", "对软件、硬件和系统进行集中授权管理"],
    mContent: ["通过统一的授权机制和管理平台，对软件、硬件和系统进行集中授权管理"],
    img: 'advantage/content1.png',
    mImg: 'advantage/mContent1.png'
  },
  {
    title: "硬件加密-远程授权",
    content: ["软硬件相结合的加密认证", "手机号码魔盒唯一绑定、系统授权"],
    mContent: ["软硬件相结合的加密认证，手机号码魔盒唯一绑定、系统授权"],
    img: 'advantage/content2.png',
    mImg: 'advantage/mContent2.png'
  },
  {
    title: "专属应用-安全无忧",
    content: ["多种核心应用，硬件授权使用", "全方面保障用户数据和隐私安全"],
    mContent: ["多种核心应用，硬件授权使用，全方面保障用户数据和隐私安全"],
    img: 'advantage/content3.png',
    mImg: 'advantage/mContent3.png'
  },
  {
    title: "私有部署-数据自持",
    content: ["为实现对数据的完全控制和所有权", "企业可选择多种私有化部署方案"],
    mContent: ["为实现对数据的完全控制和所有权，企业可选择多种私有化部署方案"],
    img: 'advantage/content4.png',
    mImg: 'advantage/mContent4.png'
  },
]
</script>

<style scoped>
.advantage-line {
  background: linear-gradient(136deg, #191626 0%, #183C34 25%, rgba(0,0,0,0) 100%);
}
.advantage-card {
  box-shadow: 0px 9px 32px 0px rgba(83,83,83,0.1);
}
</style>
