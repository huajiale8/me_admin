import { defineStore } from 'pinia'
import type {MenuType} from "@/utils/types";

export const menuStore = defineStore(
    'menuStore',
    () => {
        return {
            centerDialogVisible:false,
            addButton:false,
            title:'',
             ruleForm: {
                 title: '',
                 url: '',
                 sort: 0,
                 icon: '',
                 level: 0,
                 order: '',
                 pid: 0,
                 status: 0,
                 tips: '',
                 id: 0,
                 is_show: 0,
                 type: 'menu',
                 component: '',
             }   as MenuType,
        }
    },
    {
        persist: true,
    }
)
