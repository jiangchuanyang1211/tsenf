<template>
  <div :class="{ ' tw-top-0 tw-w-full tw-z-50 tw-bg-[#1F1F1F]': isNavSticky, 'tw-bg-white': !isNavSticky }"
       class="lg:tw-fixed sm:tw-z-[99999] sm:tw-absolute tw-top-0 tw-w-full tw-z-50 tw-text-white tw-transition-colors tw-duration-300">
       <nav class="tw-bg-white tw-shadow">
        <div class="tw-container tw-mx-auto tw-px-4">
          <div class="tw-flex tw-justify-between tw-items-center lg:tw-h-16 sm:tw-h-[42px]">
            <div class="tw-flex-shrink-0">
              <router-link to="/">
                <img src="../public/default.png" data-src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/logo.webp" alt="阵风科技logo" class="sm:tw-h-6 lg:tw-h-[46px]"  />
                <!-- <img src="https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/logo_m.png" alt="阵风科技logo" class="tw-hidden sm:tw-block" height="24"/> -->
              </router-link>
            </div>
            <div class="tw-hidden md:tw-block">
              <div class="tw-ml-10 tw-flex tw-items-baseline tw-space-x-4">
                <client-only>
                  <a
                  v-for="(item, index) in menuItems"
                  :key="'header'+item.label+index"
                  :href="''+item.link"
                  :class="[isActive(item.link) ? 'tw-text-[#fff] head-parent-a-click' : 'tw-text-[#fff]', 'head-parent-a tw-relative tw-px-3  tw-rounded-none tw-inline-block tw-py-2 tw-rounded-md tw-text-sm tw-font-medium']"
                  @click.stop
                >
                  {{ item.label }}
                  <div v-if="item.children" class="tw-hidden tw-rounded tw-bg-[#fff] hover:tw-block tw-absolute tw-top-[38px] tw-flex tw-flex-wrap tw-w-[100px]" style="box-shadow: 0 2px 8px #00000026;left: calc(50% - 50px);">
                      <a v-for="(item1, index1) in item.children"
                      :key="index1+item1.label+item1.link"
                      :href="item1.link"
                      :class="[isActive(item1.link) ? 'tw-text-[#333] ' : 'tw-text-[#333]', ' first:tw-rounded-t last:tw-rounded-b tw-px-3 tw-w-full hover:tw-bg-[#ccc] tw-block tw-text-center  tw-bg-opacity-90 tw-py-2 tw-rounded-none tw-text-sm tw-font-medium']"
                      @click.stop
                      >{{ item1.label }}</a>
                  </div>
                </a>
                </client-only>
                
              </div>
            </div>
            <div class="tw--mr-2 tw-flex md:tw-hidden ">
              <button
                type="button"
                class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out"
                @click="mobileMenuOpen = !mobileMenuOpen"
              >
                <svg class="tw-h-6 tw-w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    :class="[mobileMenuOpen ? 'tw-hidden' : 'tw-inline-flex']"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="[mobileMenuOpen ? 'tw-inline-flex' : 'tw-hidden']"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          v-show="mobileMenuOpen"
          class="md:tw-hidden tw-bg-[#000] tw-flex tw-justify-end tw-bg-opacity-50   tw-transition-all tw-duration-300 tw-ease-in-out tw-origin-top-right tw-absolute tw-right-0 tw-top-0 tw-z-10 tw-w-full tw-bg-white tw-border-b tw-border-gray-200"
        >
          <div class="tw-absolute tw-right-0 tw-top-[20px]">
            <button
                type="button"
                class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out"
                @click="mobileMenuOpen = !mobileMenuOpen"
              >
                <svg class="tw-h-6 tw-w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    :class="[mobileMenuOpen ? 'tw-hidden' : 'tw-inline-flex']"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="[mobileMenuOpen ? 'tw-inline-flex' : 'tw-hidden']"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
          </div>
          <div class="tw-px-2 tw-py-3 tw-w-[64%] tw-bg-[#fff]  tw-h-[100vh] tw-pt-[50px] tw-pl-[26px]">
            <client-only>
              <a
              v-for="(item3, index3) in menuItems"
              :key="index3+item3.label+item3.link"
              :href="item3.link"
              :class="[isActive(item3.link) ? 'tw-text-gray-500' : 'tw-text-gray-900',  item3.children&&item3.children.length>0&& !item3.isShow ?'md-up' : '',item3.children&&item3.children.length>0 && item3.isShow ?'md-down' : '',  'tw-relative  tw-block tw-text-[14px] tw-px-3 tw-py-2 tw-rounded-md tw-font-medium'] "
              @click = "opentitle(index3)"
            >
              <img :src="item3.icon" width="18" height="18" class=" tw-inline-block tw-ml-[10px]" />
              {{ item3.label }}
              <div v-if="item3.children" v-show="item3.isShow" class=" tw-pl-[20px]  tw-flex tw-flex-wrap tw-w-full" >
                  <a v-for="(item4, index4) in item3.children"
                  :key="index4+item4.label"
                  :href="item4.link"
                  :class="[isActive(item4.link) ? 'tw-text-[#333]' : 'tw-text-[#333]', 'tw-px-3 tw-text-left tw-w-full tw-text-[12px] hover:lg:tw-bg-[#ccc] tw-block  tw-bg-opacity-90 tw-py-2 tw-rounded-md tw-font-medium']"
                  @click.stop
                  >{{ item4.label }}
                </a>
              </div>

            </a>
            </client-only>
      
           
          </div>
        </div>
      </nav>

  </div>

</template>

<script setup >
import {computed,onMounted,onUnmounted } from 'vue'
import { useRoute } from "vue-router"
const $route = useRoute();
const isNavSticky = ref(false);
const mobileMenuOpen = ref(false);
const menuItems = [
  { label: '产品中心',
    icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/product.png',
    children: [
      { label: '系统管理端', link: '/manage', },
      { label: '魔盒端', link: '/box' },
      { label: 'App端', link: '/app' },
    ],
    link:"#",
    isShow: false,
    key:0,
},
  { label: '核心优势', link: '/advantage',icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/advantage.png',key:1, },
  {
    label: '解决方案',
    icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/solution.png',
    link:"/solution",
    key:3,
  },
  { label: '服务中心', link: '/service',icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/service.png',key:2 },
  { label: '关于我们', link: '/about',icon:'https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/about.png',key:4, },
]
const isActive = computed(()=>(route)=>{ //计算属性传递参数
  const children = ['/app','/manage','/box'];
    if(route=='#' && children.includes($route.path))return true;
    return $route.path === route;
  })
  onMounted(()=>{
    window.addEventListener('scroll', handleScroll);
  })
  onUnmounted(()=>{
    window.removeEventListener('scroll', handleScroll);
  })
  const handleScroll = ()=>{
    if (window.scrollY > 300) {
        isNavSticky.value = true;
      } else {
        isNavSticky.value = false;
      }
  }
  const opentitle = (index)=>{
    if(!menuItems[index]?.children)return;
    menuItems[index].isShow = !menuItems[index].isShow;
  }
</script>
<style lang="less">
  a{
    font-size:14px;
  }
  .head-parent-a-click:after{
    content: '';
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 5px;
    background: linear-gradient(101deg, #AAFFF7 0%, #4C7673 100%);
    opacity: 0.7;
  }
  .head-parent-a:hover:after{
    content: '';
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 5px;
    background: linear-gradient(101deg, #AAFFF7 0%, #4C7673 100%);
    opacity: 0.7;
  }
  .head-parent-a:hover > *{
    display:block;
  }
  .md-down:after{
    content:'';
    position: absolute;
    right: 40px;
    top:10px;
    display: inline-block; /* 仅占据内容区域 */
    width: 16px; /* 图标宽度 */
    height: 16px; /* 图标高度 */
    background-image: url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/down.png'); /* 图标路径 */
    transform: rotate(180deg);
    background-size: 16px;

  }
  .md-up:after{
    content:'';
    position: absolute;
    right: 40px;
    top:10px;
    display: inline-block; /* 仅占据内容区域 */
    width: 16px; /* 图标宽度 */
    height: 16px; /* 图标高度 */
    background-image: url('https://aliyun-oss-imi.tsenf.com/tsenf-website/static/index/down.png'); /* 图标路径 */
    background-size: 16px;

  }
  
</style>
