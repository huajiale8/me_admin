import api from './request'
import type {MenuType} from "@/utils/types";



export const getMenu = () => api({
    url: '/api/v1/menu', // 请求地址
    method: 'get',
})

export const addMenu = (params:MenuType) => api({
    url: '/api/v1/menu', // 请求地址
    method: 'post',
    data:params
})
export const addMenuParticulars = (data:number) => api({
    url: `/api/v1/menu/${data}`, // 请求地址
    method: 'get',
})

export const updateMenuParticulars = (id:number,params:MenuType) => api({
    url: `/api/v1/menu/${id}`, // 请求地址
    method: 'put',
    data:params
})
