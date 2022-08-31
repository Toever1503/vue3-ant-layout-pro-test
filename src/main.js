import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'


// # ant design
import 'ant-design-vue/dist/antd.min.css'; // antd css
import '@ant-design-vue/pro-layout/dist/style.css'; // pro-layout css or style.less
import ProLayout, {PageContainer} from '@ant-design-vue/pro-layout';
import Antd from 'ant-design-vue';

//# css
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd).use(ProLayout).use(PageContainer);
app.mount('#app')
