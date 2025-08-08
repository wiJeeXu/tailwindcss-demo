<script setup>
const topNavList = ['小米官网', '小米商城', '小米澎湃OS', '小米汽车', '云服务', 'loT', '有品', '小爱开发平台', '资质证照', '协议规则', '下载app', 'Select Location'];
const topRightList = ['登录', '注册', '消息通知'];


</script>

<template>
   <div class="relative z-30 h-[40px] text-xs text-cgray bg-[#333]">
     <div class="w-[1226px] ml-auto mr-auto h-full flex">
         <ul class="flex items-center h-full gap-x-[.8em]">
            <li v-for="(item) in topNavList" :key="item" class="text-cgray hover:text-white cursor-pointer h-full leading-[40px]">{{ item }}</li>
         </ul>
        <ul class="flex h-full mx-auto">
         <li class="h-full leading-[40px] pl-[5px] pr-[5px] cursor-pointer hover:text-white" v-for="value in topRightList" :key="value">{{ value }}</li>
        </ul>
        <div class="h-full flex items-center bg-[#424242] w-[120px] justify-center text-xs hover:bg-white hover:text-[#ff6700] relative">
         <em class="iconfont-cart text-xl  mr-[4px] align-[-4px]"></em>
          <span>购物车</span>
          <span>&nbsp;(0)&nbsp;</span>
          <div class="absolute top-[40px] h-[100px] w-[316px] flex items-center justify-center bg-white shadow-[0 2px 10px rgba(0,0,0,.15)]">
            购物车中还没有商品，赶紧选购吧！
          </div>
        </div>
     </div>

   </div>
</template>

<style scoped>

</style>
