<template>
  <div class="tw-flex tw-flex-col">

    <span
      v-if="data.type==1"
      class="
        tw-font-medium tw-text-[#333333]
        md:tw-text-[16px]/[22px]
           tw-text-[14px]/[20px]
      "
    >{{ data.title }}</span>
    <span
      v-else-if="data.type==2"
      class="
        tw-font-medium tw-text-[#FFFFFF]
        md:tw-text-[16px]/[22px]
           tw-text-[14px]/[20px]
      "
    >{{ data.title }}</span>

    <!-- 分割线 -->
    <div
      v-if="data.type==1"
      class="
        base-line1
        md:tw-w-[56px] md:tw-h-[4px] md:tw-mt-[10px] md:tw-mb-[28px]
           tw-w-[25px]    tw-h-[2px]    tw-mt-[5px]     tw-mb-[19px]
      "
    ></div>
    <div
      v-else-if="data.type==2"
      class="
        base-line2
        md:tw-w-[56px] md:tw-h-[4px] md:tw-mt-[10px] md:tw-mb-[28px]
           tw-w-[25px]    tw-h-[2px]    tw-mt-[5px]     tw-mb-[19px]
      "
    ></div>

    <div class="tw-flex tw-flex-row" v-for="item,index in data.content" :id="index">
      <div class="tw-flex tw-items-center tw-w-auto md:tw-h-[37px] tw-h-[19px]">
        <div
          v-if="data.type==1"
          class="
            tw-bg-[#2C5C58]
            md:tw-w-[8px] md:tw-h-[8px] md:tw-rounded-[4px]
               tw-w-[4px]    tw-h-[4px]    tw-rounded-[2px]
          "
        ></div>

        <div
          v-else-if="data.type==2"
          class="
            tw-bg-[#FFFFFF]
            md:tw-w-[8px] md:tw-h-[8px] md:tw-rounded-[4px]
               tw-w-[4px]    tw-h-[4px]    tw-rounded-[2px]
          "
        ></div>
      </div>


      <span
        v-if="data.type==1"
        class="
          tw-font-normal tw-text-[#333333]
          md:tw-ml-[13px] md:tw-text-[14px]/[37px]
             tw-ml-[6px]     tw-text-[12px]/[19px]
        "
      >{{ item }}</span>
      <span
        v-else-if="data.type==2"
        class="
          tw-font-normal tw-text-[#FFFFFF]
          md:tw-ml-[13px] md:tw-text-[14px]/[37px]
             tw-ml-[6px]     tw-text-[12px]/[19px]
        "
      >{{ item }}</span>
    </div>

  </div>
</template>

<script setup>

defineOptions({
  name: "BaseTextContent"
})

/*
  data: {
    type: 1
    title: string
    content: [string, string]
  }
*/
defineProps(["data"])


</script>

<style scoped>
.base-line1 {
  background: linear-gradient(136deg, #191626 0%, #183C34 25%, rgba(0,0,0,0) 100%);
}
.base-line2 {
  background: linear-gradient(136deg, #FFFFFF 0%, #FFFFFF 25%, rgba(0,0,0,0) 100%);
}
</style>
