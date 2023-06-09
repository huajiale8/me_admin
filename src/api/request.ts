import axios from 'axios'
import {useLoginStore} from '@/stores/login'
import pinia from "@/utils/pinia"
import router from '@/router/index'
import { ElMessage } from 'element-plus'
const userStore = useLoginStore(pinia)
const api = axios.create({
    baseURL:'https://apis.bald3r.wang',
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    },
    responseType: "json"
})

// 请求相关处理 请求拦截 在请求拦截中可以补充请求相关的配置
api.interceptors.request.use((config)=>{
        if (config.headers) {
            const token = userStore.getToken()
            if (token) config.headers.Authorization ='Bearer '+ token.token
        }
        return config
    },
     (error) =>{
        return Promise.reject(error)
    }
)
api.interceptors.response.use(res => {
    // 我们一般在这里处理，请求成功后的错误状态码 例如状态码是500，404，403
    // res 是所有相应的信息
    ElMessage.success(res.data.msg)
    return Promise.resolve(res)
}, err => {
    // 服务器响应发生错误时的处理
    if(err.response.data.code === 403){
        router.push({name:'login'})
        console.log('1111')
        return ElMessage.error('请重新登录！')
    } else if(err.response.data.code === 401){
        router.push({name:'login'})
        return ElMessage.error(err)
    }
    Promise.reject(err)
})


export default api
