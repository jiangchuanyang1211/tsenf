<template>
  <div>
    <Header></Header>

    <img class="tw-hidden md:tw-flex tw-w-full"  src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/bg1.png">
    <img class="md:tw-hidden tw-w-full" src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/manage/mBg1.png">

    <BaseTitle :data="data"></BaseTitle>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full tw-bg-[#eaedf0]
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/content1.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/mContent1.png')]
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
        <BaseTextContent class="md:tw-mb-[0px] tw-mb-[40px]" :data="content[0]"></BaseTextContent>
      </div>

    </div>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full tw-mt-[-4px]
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/content2.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/mContent2.png')]
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
        <BaseTextContent class="md:tw-mb-[0px] md:tw-ml-[708px] tw-mb-[28px]" :data="content[1]"></BaseTextContent>
      </div>
    </div>

    <div
      class="
        tw-flex tw-justify-center tw-bg-center tw-bg-no-repeat tw-bg-cover tw-w-full
        md:tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/content3.png')]
           tw-bg-[url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/box/mContent3.png')]
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
        <BaseTextContent class="md:tw-mb-[0px] tw-mb-[28px]" :data="content[2]"></BaseTextContent>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>

defineOptions({
  name: "Box"
})

const data = {
  title: "魔盒端",
  enTitle: "ABOUT BOX"
}

const content = [
  {
    type: 1,
    title: "按键销毁",
    content: [
      "魔盒硬件提供快速销毁功能",
      "根据不同的场景自主完成快速应急处理",
      "实现魔盒加密数据以及程序数据等快速擦除，不可恢复，不能再次使用"
    ],
  },
  {
    type: 1,
    title: "设备管理",
    content: [
      "魔盒与专属应用相互鉴权认证，实现智能控制",
      "针对复杂环境可以提供灯光、声音和振动的控制",
      "悄无声息的完成设备智能控制，实现设备的隐蔽性来提升自身安全性、保密性"
    ],
  },
  {
    type: 2,
    title: "无线连接",
    content: [
      "魔盒通过无线信号进行通讯和数据传输",
      "在物理链路层将安全隐患隔离在外，采用国密加密和系统身份鉴权",
      "保障通讯双方的身份真实可信，防止数据被篡改或伪造，保护数据安全"
    ],
  },
]

</script>
