<template>
  <div>
    <Header></Header>

    <img class="tw-hidden md:tw-flex tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/bg1.png">
    <img class="md:tw-hidden tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mBg1.png">

    <BaseTitle :data="data"></BaseTitle>

    <!-- 全屏外壳1  -->

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/content1.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mContent1.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <!-- 内容区1 -->
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end       tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="md:tw-mb-[0px] tw-mb-[33px] tw-w-fit" :data="content[0]"></BaseTextContent>
      </div>

    </div>

    <!-- 全屏外壳2 -->
    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/content2.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mContent2.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <!-- 内容区2 -->
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end       tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="md:tw-mb-[0px] md:tw-ml-[755px] tw-mb-[27px] tw-w-fit" :data="content[1]"></BaseTextContent>
      </div>
    </div>

    <!-- 全屏外壳3 -->
    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/content3.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mContent3.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <!-- 内容区3 -->
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end       tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="md:tw-mb-[0px] tw-mb-[27px] tw-w-fit" :data="content[2]"></BaseTextContent>
      </div>
    </div>

    <!-- 全屏外壳4 -->
    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/content4.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mContent4.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <!-- 内容区4 -->
      <div
        class="
          tw-h-full tw-grid tw-content-end
          md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="md:tw-mb-[232px] md:tw-ml-[755px] tw-mb-[29px] tw-w-fit" :data="content[3]"></BaseTextContent>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>

defineOptions({
  name: "Manage"
})

const data = {
  title: "系统管理端",
  enTitle: "ABOUT SYSTEM"
}

const content = [
  {
    type: 1,
    title: "魔盒管理",
    content: [
      "在魔盒丢失和高复杂环境下",
      "魔盒冻结、魔盒锁定、魔盒销毁等严格安全措施保证数据安全"
    ]
  },
  {
    type: 1,
    title: "通讯录管理",
    content: [
      "企业通讯录设置严格的权限等级和授权机制",
      "对于跨机构、跨部门有严格的审批流程，保证加密数据交流中的隐私性、安全性、可追溯性"
    ],
  },
  {
    type: 2,
    title: "协作管理",
    content: [
      "根据企业不同生态需求的统筹管理，设置内外不同的子系统",
      "实现跨机构、跨部门的授权管理协作，保证加密数据的隐私性、安全性、可追溯性"
    ],
  },
  {
    type: 1,
    title: "组织机构管理",
    content: [
      "解决企业分支机构地域分散、外派人员非常态办公情况",
      "可跨地域、跨境外在线随时随地数据加密传输",
      "数据实时加密回传，让企业获取数据源高效、即时、安全、隐私、可追溯"
    ],
  }
]
</script>
