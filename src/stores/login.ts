import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useLoginStore = defineStore(
    'login',
    () => {
        const access_token = ref<string>()
        const navMenu = ref<[]>()
        const setToken = (token: string) => {
            access_token.value = token
            sessionStorage.setItem("token", token)
        }
        const routeReady = ref(false)
        const setNavMenu = (menu:any)=>{
            navMenu.value = menu
            sessionStorage.setItem("menu", JSON.stringify(menu))
        }
        const getToken = () => {
            const token = access_token.value ?? sessionStorage.getItem("token")
            if (token) {
                return {
                    token
                }
            }
            return undefined
        }
        const getNavMenu = ()=>{
            const menus:any = sessionStorage.getItem("menu")
            return JSON.parse(menus)
        }
        const setAsyncRoutestMark = false
        return {
            navMenu,
            setToken,
            getToken,setNavMenu,getNavMenu,
            setAsyncRoutestMark,
            routeReady
        }
    },
    {
        persist: true,
    }
)
