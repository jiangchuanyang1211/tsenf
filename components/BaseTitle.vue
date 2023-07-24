<template>
  <div
    class="
      tw-grid tw-flex-col tw-justify-center tw-justify-items-center
      md:tw-pt-[110px] md:tw-pb-[70px]
         tw-pt-[25px]     tw-pb-[23px]
    "
  >
    <div
      class="
        tw-font-semibold  tw-text-[#183C34]
        md:tw-text-[38px]/[53px] md:tw-tracking-widest
        tw-text-[16px]/[23px]
      "
    >{{data.title}}</div>

    <!-- 粗线 -->
    <div
      class="
        tw-bg-[#183C34] tw-rounded-[3px]
        md:tw-w-[80px] md:tw-h-[6px] md:tw-mt-[13px]
        tw-w-[40px] tw-h-[3px] tw-mt-[9px]
      "
    ></div>
    <!-- 细线 -->
    <div
      class="
        tw-bg-[#183C34]
        md:tw-w-[300px] md:tw-h-[1px] md:tw-mt-[-3px]
        tw-w-[150px] tw-h-[1px] tw-mt-[-2px]
      "
    ></div>

    <div
      class="
        md:tw-text-[#183C34]
        tw-text-[9px]/[13px] tw-mt-[8px]
        md:tw-text-[18px]/[25px] md:tw-mt-[16px]
      "
    >{{ data.enTitle }}</div>
  </div>
</template>

<script setup>

defineOptions({
  name: "BaseTitle"
})

defineProps(["data"])

</script>
