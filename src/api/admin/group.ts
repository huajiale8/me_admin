import api from "@/api/request";
import {AddGroup, AddUser, PageType} from "@/utils/types";

export const getGroupList = (params:PageType)=> api ({
    url:'/api/v1/group',
    method:'get',
    params
})
export const getRule_treeList = ()=> api ({
    url:'/api/v1/rule_tree',
    method:'get',
})
export const addGroup = (params:any)=> api ({
    url:'/api/v1/group',
    method:'post',
    data:params
})
export const getGroupDetail = (id:number)=> api ({
    url:`/api/v1/group/${id}`,
    method:'get',
})
export const putGroupDetails = (id:number,params:any)=> api({
    url:`/api/v1/group/${id}`,
    method:'put',
    data:params
})
