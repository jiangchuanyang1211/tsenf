<template>
  <div>
    <NuxtPage />
  </div>
</template>
<style>
  a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
</style>
<script setup>
 
  if (typeof window !== 'undefined') {
    
//   let img = document.getElementsByTagName("img");

// const observer = new IntersectionObserver(changes => {
//   //changes 是被观察的元素集合
// debugger
//   for(let i = 0, len = changes.length; i < len; i++) {
//     let change = changes[i];
//     // 通过这个属性判断是否在视口中

//     if(change.isIntersecting) {
//       const imgElement = change.target;
//       imgElement.src = imgElement.getAttribute("data-src");
//       observer.unobserve(imgElement);
//    }
//  }
// })

// Array.from(img).forEach(item => observer.observe(item));


let img = document.getElementsByTagName("img");

let num = img.length;

let count = 0;//计数器，从第一张图片开始计

lazyload();//首次加载别忘了显示图片

window.addEventListener('scroll', lazyload);

function lazyload() {
   for(let i = count; i <num; i++) {
    // 元素现在已经出现在视口中
debugger
    if(img[i].getBoundingClientRect().top < 

document.documentElement.clientHeight) {
      if(img[i].getAttribute("src").includes("default.png")) continue;
 console.log(img[i])
      img[i].src = img[i].getAttribute("data-src");
      count ++;
   }
 }

}
 }

</script>

