import router from "@/router/index"; //引入路由添加路由守卫
import {useLoginStore} from "@/stores/login"
import {asideStore} from "@/stores/home/aside";
const store = useLoginStore()

const wgiteList = ['/login'] //路由白名单，没有token也可以去的地方
router.beforeEach((to,from,next)=>{
    const state = asideStore()
    const obj: any = {
        title: to.meta.title,
        url: to.path
    }
    const existingObject = state.headerList.find((person: Person) => person.title === to.meta.title);
    if (!existingObject) {
        // 不存在时添加对象
        // @ts-ignore
        state.headerList.push(obj)
    }
    state.currentRoute = to.path;
    const token = store.getToken()
    if(token){ //判断token是否存在
        if(to.path === '/login'){
            // 如果token已经存在还去登录页面的话，让他去首页
            next('/')
        }else {
            next()
        }
    }else {
        // 如果没有token要去白名单
        if(wgiteList.includes(to.path)){
            next()
        }else {
            // 如果不是白名单就去登录
            next('/login')
        }
    }
})
