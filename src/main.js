import { createApp } from "vue";
import Antd from 'ant-design-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.css';
import '@ant-design-vue/pro-layout/dist/style.css'; // pro-layout css or style.less
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';

createApp(App).use(store).use(router).use(Antd).use(ProLayout).use(PageContainer).mount("#app");
