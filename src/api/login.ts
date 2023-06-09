import api from './request'



export const getLogin = (params:any) => api({
    url: '/api/v1/login', // 请求地址
    method: 'post', // 请求方式
    data:params //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})

export const getRole_menu = () => api({
    url: '/api/v1/role_menu', // 请求地址
    method: 'get', // 请求方式
     //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})
