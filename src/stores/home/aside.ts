import { defineStore } from 'pinia'

export const asideStore = defineStore(
    'asideStore',
    () => {
        return {
            currentRoute:'/dashboard',
            flag:false,
            headerList:[],
            menuUniqueOpened:false,  // 是否只保持一个子菜单的展开(手风琴)
            menuCollapse:false // 是否水平折叠收起菜单
        }
    },
    {
        persist: true,
    }
)
