<template>
  <ConfigProvider>
    <router-view/>
  </ConfigProvider>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {useRouter, RouterView} from 'vue-router';
import {getMenuData, clearMenuItem} from '@ant-design-vue/pro-layout';

const locale = (i18n) => i18n;
const router = useRouter();

const {menuData} = getMenuData(clearMenuItem(router.getRoutes()));

const state = reactive({
  collapsed: false, // default value
  openKeys: ['/dashboard'],
  selectedKeys: ['/welcome'],
})
const layoutConf = reactive({
  navTheme: 'dark',
  layout: 'mix',
  splitMenus: false,
  menuData,
});

onMounted(() => {
  console.log('router ', router.getRoutes());
});

</script>