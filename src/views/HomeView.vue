<script setup lang="ts">
import AsideCommon from "@/components/home/aside-common.vue";
import HeaderCommon from "@/components/home/header-common.vue";
import {onMounted} from "vue";
import {getFirstRoute} from "@/utils/router";
import router from "@/router/index";
import pinia from "@/utils/pinia";
import {useLoginStore} from "@/stores/login";

const store = useLoginStore(pinia)
const init = () => {
    const firstRoute = getFirstRoute(store.getNavMenu())
    if (firstRoute) {
        router.push(firstRoute.path)
    }
}

onMounted(() => {
    init()
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
