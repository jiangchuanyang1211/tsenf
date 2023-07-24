<template>
  <div>
    <Header></Header>

    <img class="tw-hidden md:tw-flex tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/bg1.png">
    <img class="md:tw-hidden tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mBg1.png">

    <BaseTitle :data="data"></BaseTitle>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full tw-bg-[#eaedf0]
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/content1.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/mContent1.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end       tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="tw-hidden md:tw-flex tw-ml-[105px] tw-h-fit" :data="content[0]"></BaseTextContent>
        <BaseTextContent class="md:tw-hidden tw-mb-[34px] tw-h-fit" :data="content[0]"></BaseTextContent>
      </div>
    </div>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/content2.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/mContent2.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end   tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="tw-hidden md:tw-flex tw-ml-[494px] tw-h-fit" :data="content[1]"></BaseTextContent>
        <BaseTextContent class="md:tw-hidden tw-mb-[34px] tw-h-fit" :data="content[1]"></BaseTextContent>
      </div>
    </div>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/content3.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/app/mContent3.png')]
        md:tw-aspect-[192/73]
           tw-aspect-[75/67]
      "
    >
      <div
        class="
          tw-h-full tw-grid
          md:tw-content-center md:tw-w-[1200px] md:tw-min-w-[1200px] md:tw-px-0
             tw-content-end       tw-w-full                             tw-px-[30px]
        "
      >
        <BaseTextContent class="tw-hidden md:tw-flex tw-ml-[105px] tw-h-fit" :data="content[2]"></BaseTextContent>
        <BaseTextContent class="md:tw-hidden tw-mb-[34px] tw-h-fit" :data="content[2]"></BaseTextContent>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>

defineOptions({
  name: "App"
})

const data = {
  title: "APP端",
  enTitle: "ABOUT APP"
}

const content = [
  {
    type: 1,
    title: "魔盒空间",
    content: [
      "专属智能硬件数据存储，不再使用第三方云空间、云备份",
      "个人信息、文件信息、联系方式、照片、音频、视频、文件图片数据信息存魔盒、物理加密隔离",
      "防止第三方应用采集、收集 、存储"
    ],
  },
  {
    type: 1,
    title: "魔盒备忘录",
    content: [
      "端到端加密、一次一密",
      "即时笔记即写即存，数据信息存魔盒",
      "物理加密隔离，防止第三方应用采集、收集 、存储"
    ],
  },
  {
    type: 2,
    title: "通讯录备份",
    content: [
      "手机通讯录魔盒备份，魔盒端到手机端恢复",
      "智能手机遗失或更换，数据信息不再使用第三方应用恢复/克隆/备份",
    ],
  },
]

</script>
