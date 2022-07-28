<template>
  <pro-layout
    v-bind="layoutConf"
    v-model:openKeys="state.openKeys"
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys">
    <!-- 侧边导航栏顶部 -->
    <template v-slot:menuHeaderRender>
      <div>
        <logo-svg />
        <h1>Antd</h1>
      </div>
    </template>
    <!-- 顶部导航 -->
    <template v-slot:headerContentRender>
      <div>
        <a-tooltip title="刷新页面">
          <div>Header</div>
        </a-tooltip>
      </div>
    </template>

    <template v-slot:rightContentRender>
      <div>header right</div>
    </template>

    <PageHeaderWrapper>
      <template v-slot:content>
        <div class="page-header-content">
          <div class="avatar">
            <a-avatar size="large" :src="currentUser.avatar" />
          </div>
          <div class="content">
            <div class="content-title">
              Jimmy，Aam<span class="welcome-text">Welcome</span>
            </div>
            <div>前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台</div>
          </div>
        </div>
      </template>
    </PageHeaderWrapper>
  </pro-layout>
</template>

<script setup>
import { reactive } from "vue";
import { PageHeaderWrapper } from "@ant-design-vue/pro-layout";

const state = reactive({
  collapsed: false, // default value
  openKeys: [],
  selectedKeys: [],
})
const layoutConf = reactive({
  navTheme: 'dark',
  layout: 'mix',
  splitMenus: false,
});
</script>

<style lang="scss" scoped></style>