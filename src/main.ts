import './assets/main.css'
import pinia from '@/stores/index'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/router/permission'
async function start() {
    const app = createApp(App)
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(router)
    app.use(pinia)
    app.use(ElementPlus, { locale });
    // 全局语言包加载
    app.use(ElementPlus)
    // 全局注册
    app.mount('#app')
}
start()
