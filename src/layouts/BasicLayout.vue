<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :loading="loading"
    :menu-data="menuData"
    :breadcrumb="{ routes: breadcrumb }"
    disable-content-margin
    style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/c/font_3630424_fn5rr8v0dur.js"
    v-bind="proConfig"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/11498-1667011830.jpg" />
        <h1>HOCPTE</h1>
      </router-link>
    </template>

    <template #rightContentRender>
<!--      <RightContent :current-user="currentUser" />-->
      <div>hello world - usser</div>
    </template>

    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        <HeartOutlined />
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        <SmileOutlined />
        {{ route.breadcrumbName }}
      </router-link>
    </template>

<!--    <SettingDrawer v-model="proConfig" />-->

    <div class="p-2">
      <span class="text-red-500">sss</span>
      <RouterView  />
    </div>

  </pro-layout>
</template>

<script setup lang="ts">
import { useRouter, RouterView, RouterLink } from 'vue-router';
import { getMenuData, clearMenuItem, type RouteContextProps } from '@ant-design-vue/pro-layout';
import { SmileOutlined, HeartOutlined } from '@ant-design/icons-vue';
import {computed, onMounted, reactive, ref, watch} from "vue";

const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));


const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
});
const loading = ref(false);
const proConfig = ref({
  layout: 'side',
  navTheme: 'light',
  // fixedHeader: true,
  // fixSiderbar: true,
  splitMenus: true,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }),
);
const currentUser = reactive({
  nickname: 'Adminaaa',
  avatar: 'Affff',
});

watch(
  router.currentRoute,
  () => {
    const matched = router.currentRoute.value.matched.concat();
    state.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    state.openKeys = matched.filter(r => r.path !== router.currentRoute.value.path).map(r => r.path);
  },
  {
    immediate: true,
  },
);

onMounted(() => {
  console.log('router ', router.getRoutes());
  console.log('router ', menuData);
}
);
</script>
