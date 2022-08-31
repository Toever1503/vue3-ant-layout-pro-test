<template>
  <pro-layout
      :locale="locale"
      v-bind="layoutConf"
      title="HOCPTE"
      v-model:openKeys="state.openKeys"
  >
    <template #logo>
      <a href="">
        <img src="https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/11498-1667011830.jpg" alt="logo"/>
      </a>
    </template>

    hello world
  </pro-layout>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {useRouter} from 'vue-router';
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