import router from '@/router/index'
import {useLoginStore} from '@/stores/login'
import pinia from "@/utils/pinia";

const viewsComponent: Record<string, any> = import.meta.glob("/src/views/**/*.vue", { eager: true })

const store = useLoginStore(pinia)
export const addRouteAll = (menu: any[],parentName:string='') => {  //RoleMenu就是接口返回的数据的类型
    menu.forEach(item => {
        if (item.type === "menu" && viewsComponent[item.component]) {
            addRouteItem(item,parentName)
        }
        if (item.children && item.children.length > 0) {
            addRouteAll(item.children,parentName)
        }
    })
    store.routeReady = true
}

const addRouteItem = (route: any,parentName:string) => {
    const path = route.url
    const component = viewsComponent[route.component]
    const routeBaseInfo: any = {
        path,
        name: path.substring(1),
        component: component.default,
        meta: {
            title: route.title,
            icon: route.icon,
            keepalive: route.children && route.children.length > 0 ? 0 : path.substring(1),
            menu_type: "tab",
            type: route.type,
            url: route.url,
            addTab: true
        }
    }
    if (parentName) {
        router.addRoute(parentName, routeBaseInfo);
    } else {
        router.addRoute(routeBaseInfo);
    }
}
