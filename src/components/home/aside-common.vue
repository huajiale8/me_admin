<template>
    <el-card class="box-card">
        <el-aside :class="store.flag ? 'shrink' : 'unfold' ">
            <div class="header">
                <img v-if="!store.flag" class="logo-img" src="/src/assets/img/780.jpg">
                <div v-if="!store.flag" class="logo-title">花花后台</div>
                <div class="logo-icon">
                    <el-icon v-if="!store.flag" @click="store.flag = !store.flag">
                        <Fold/>
                    </el-icon>
                    <el-icon v-else @click="store.flag = !store.flag">
                        <Expand/>
                    </el-icon>
                </div>
            </div>
            <el-menu
                router
                :collapse="store.flag"
                class="el-menu-vertical-demo"
                :unique-opened="true"
                :default-active="store.currentRoute"
                :collapse-transition="false">
                <menu-vertical :menus="store1.navMenu"/>
            </el-menu>
        </el-aside>
    </el-card>
</template>
<script lang="ts" setup>
import {asideStore} from "@/stores/home/aside";
import {useLoginStore} from "@/stores/login";
import {onMounted} from 'vue'
import MenuVertical from "@/components/home/MenuVertical.vue";
import pinia from "@/utils/pinia";

const store = asideStore(pinia)
const store1 = useLoginStore(pinia)

onMounted(() => {
    console.log(store1.getNavMenu())
})

</script>

<style lang="scss" scoped>
.box-card {
    margin: 10px;

    .shrink {
        width: 70px;
        animation: 0.2s;
    }

    .unfold {
        width: 260px;
        animation: 0.2s;
    }
}

.el-menu {
    border: none;
}

:deep(.el-card__body) {
    padding: 0 !important;
}

.header {
    padding: 10px;
    display: flex;
    justify-content: space-around;

    .logo-img {
        width: 40px;
        height: 40px;
        line-height: 58px;
        border-radius: 50%;
    }

    .logo-title {
        display: block;
        width: 180px;
        padding-left: 4px;
        font-size: 24px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .logo-icon {
        line-height: 48px;
        font-size: 34px;
        font-weight: bolder;
    }

}

</style>
