import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/LoadingView.vue")
        }
    ]
})


export default router
