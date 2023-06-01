<script setup lang="ts">
import AsideCommon from "@/components/home/aside-common.vue";
import HeaderCommon from "@/components/home/header-common.vue";
import {onMounted} from "vue";
import {useLoginStore} from "@/stores/login";
import {getRole_menu} from '@/api/login'
import {addRouteAll} from '@/utils/router'
import pinia from "@/utils/pinia";



const store = useLoginStore(pinia)
const getList = ()=>{
    store.routeReady = false
    getRole_menu().then(res=>{
        store.setNavMenu(res.data.data)
        addRouteAll(res.data.data,"home")
        store.routeReady = true
    })
}
onMounted(()=>{
    getList()
})
</script>

<template>
    <div class="common-layout">
        <el-container>
            <aside-common/>
            <el-container>
                <el-header>
                    <header-common/>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss" scoped>
.common-layout {
    height: 100%;

    :deep(.el-container) {
        height: 100% !important;
    }
}

.el-header {
    margin-top: 10px;
    color: white;
}
</style>
