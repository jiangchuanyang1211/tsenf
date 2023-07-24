<template>
  <!-- 最外层全屏 -->
  <div class="footerBgColor tw-flex tw-justify-center tw-overflow-visible tw-w-full">
    <!-- 内容区 -->
    <div class="
      tw-flex tw-flex-col
      md:tw-w-[1200px] md:tw-px-0      md:tw-pt-[83px] md:tw-pb-[45px]
         tw-w-full        tw-px-[30px]    tw-pt-[19px]    tw-pb-[24px]"

    >
      <!-- 图标及link -->
      <div
        class="
          tw-flex
          md:tw-flex-row md:tw-flex-nowrap
          tw-flex-col"
      >
        <!-- 图标 -->
        <router-link to="/">
          <div class="tw-w-[320px] tw-pt-[8px]">
            <img
              src="../public/default.png"
              data-src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/footer/logo.png"
              class="
                md:tw-w-[220px] md:tw-h-[46px]
                   tw-w-[110]:     tw-h-[19px]
              "
            />
          </div>
        </router-link>
        <!-- 链接 -->
        <div
          class="
            tw-flex tw-flex-nowrap tw-justify-between
            md:tw-w-[880px]
               tw-w-full tw-mt-[14px]
          "
        >
          <div  v-for="item1,index1 in DATA" :id="index1"
            class="tw-flex tw-flex-col"
          >
            <span
              class="
                tw-text-[#FFFFFF]
                md:tw-pb-[22px] md:tw-text-[16px]/[22px]
                    tw-pb-[9px]    tw-text-[10px]/[14px]
              "
            >{{ item1.name }}</span>
            <a
              v-for="item2,index2 in item1.child" :id="index2" :href="item2.link"
              class="
                tw-text-[#999999]
                md:tw-mb-[10px] md:tw-text-[14px]/[20px]
                   tw-mb-[5px]     tw-text-[9px]/[13px]
              "
            >{{ item2.name }}</a>
          </div>
        </div>
      </div>
      <!-- 文本 -->
      <div class="tw-hidden md:tw-flex tw-justify-center tw-w-full tw-pt-[64px]">
        <span class="tw-flex tw-justify-center tw-text-[#FFFFFF] md:tw-text-[12px]/[17px]">
          Copyright © 2019-2022 Cometplay.ALL Right Reserved 四川阵风有限公司 版权所有 <span class="tw-cursor-pointer" @click="open">&nbsp蜀ICP备19013729号-1</span>
        </span>
      </div>
      <div class="md:tw-hidden tw-flex tw-flex-col tw-justify-center tw-w-full tw-pt-[20px]">
        <span class="tw-flex tw-justify-center tw-text-[#FFFFFF] tw-text-[6px]/[9px]">
          Copyright © 2019-2022 Cometplay.ALL Right Reserved
        </span>
        <span class="tw-flex tw-justify-center tw-text-[#FFFFFF] tw-text-[6px]/[9px]">
          四川阵风有限公司 版权所有 <span class="tw-cursor-pointer" @click="open">&nbsp蜀ICP备19013729号-1</span>
        </span>
      </div>
    </div>
  </div>

</template>

<script setup>

defineOptions({
  name: "Footer"
})

const DATA = [
  {
    name: "产品中心",
    child: [
      { name: "系统管理端", link: "/manage" },
      { name: "魔盒端", link: "/box" },
      { name: "APP端", link: "/app" }
    ]
  },
  {
    name: "核心优势",
    child: [
      { name: "核心优势", link: "/advantage" }
    ]
  },
  {
    name: "解决方案",
    child: [
      { name: "解决方案", link: "/solution" }
    ]
  },
  {
    name: "服务中心",
    child: [
      { name: "服务中心", link: "/service" }
    ]
  },
  {
    name: "关于我们",
    child: [
      { name: "公司简介", link: "/about" }
    ]
  }
]

const open = () => {
  window.open("https://beian.miit.gov.cn")
}
</script>

<style scoped>
.footerBgColor {
  background: linear-gradient(136deg, #191626 0%,#183C34 52%, #000000 100%)
}
</style>
