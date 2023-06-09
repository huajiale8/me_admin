import api from './request'

// 下面是详细的写法


// 获取列表
export const getNav_itemList = (params:any) => api({
    url: '/api/v1/nav_item', // 请求地址
    method: 'get', // 请求方式
    params //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})

// add
export const addNav_item = (params:any) => api({
    url: '/api/v1/nav_item', // 请求地址
    method: 'post', // 请求方式
    data:params //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})

