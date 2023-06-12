import api from "@/api/request";
import {AddUser, PageType} from "@/utils/types";

export const getUserList = (params:PageType)=> api ({
    url:'/api/v1/user',
    method:'get',
    params
})
export const addUser = (params:AddUser)=> api ({
    url:'/api/v1/user',
    method:'post',
    data:params
})
export const getUserDetail = (id:number)=> api ({
    url:`/api/v1/user/${id}`,
    method:'get',
})
export const putUserDetails = (id:number,params:AddUser)=> api({
    url:`/api/v1/user/${id}`,
    method:'put',
    data:params
})
