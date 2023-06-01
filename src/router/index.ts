import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImgView from '../views/Homes/Imgview.vue'
import MusicView from '../views/Homes/MusicView.vue'
import DataKnowledge from '../views/Datas/dataKnowledge.vue'
import DataNavMenu from '../views/Datas/DataNavMenu.vue'
import InstallView from '../views/install/InstallView.vue'
import {asideStore} from "@/stores/home/aside";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAPI: true,
                title: '首页', // 自定义属性 requiresAuth
                role: 'admin' // 自定义属性 role
            },
            children: [
                {
                    path: '/imgView',
                    name: 'imgView',
                    component: ImgView,
                    meta: {
                        title: '图片', // 自定义属性 requiresAuth
                        role: 'admin', // 自定义属性 role
                        requiresAuth: true // 子路由的 meta 信息
                    },
                }, {
                    path: '/musicView',
                    name: 'musicView',
                    component: MusicView,
                    meta: {
                        title: '音乐', // 自定义属性 requiresAuth
                        role: 'admin', // 自定义属性 role
                        requiresAuth: true // 子路由的 meta 信息
                    },
                }, {
                    path: '/dataKnowledge',
                    name: 'dataKnowledge',
                    meta: {
                        title: '数据管理', // 自定义属性 requiresAuth
                        role: 'admin', // 自定义属性 role
                        requiresAuth: true // 子路由的 meta 信息
                    },
                    component: DataKnowledge
                }
                , {
                    path: '/dataNavMenu',
                    name: 'dataNavMenu',
                    meta: {
                        title: '导航菜单', // 自定义属性 requiresAuth
                        role: 'admin', // 自定义属性 role
                        requiresAuth: true // 子路由的 meta 信息
                    },
                    component: DataNavMenu
                }, {
                    path: '/installView',
                    name: 'installView',
                    meta: {
                        title: '系统设置', // 自定义属性 requiresAuth
                        role: 'admin', // 自定义属性 role
                        requiresAuth: true // 子路由的 meta 信息
                    },
                    component: InstallView
                }
            ],redirect:'/dataNavMenu'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/LoadingView.vue")
            // redirect: to => {
            //     return {
            //         name: "adminMainLoading",
            //         query: { url: to.path, query: JSON.stringify(to.query) }
            //     }
        }
    ]
})


export default router
