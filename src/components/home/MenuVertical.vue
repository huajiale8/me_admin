<template>
    <template v-for="menu in props.menus">
        <template v-if="menu.is_show === 0">
            <template v-if="menu.children && menu.children.length > 0 && menu.type === 'menu_dir'">
                <el-sub-menu :index="menu.url" :key="menu.url">
                    <template #title>
<!--                        <el-icon>-->
<!--                            <component :is="menu.icon? menus.icon:'ss'"/>-->
<!--                        </el-icon>-->
                        <span>{{ menu?.title}}</span>
                    </template>
                    <MenuVertical :menus="menu.children"></MenuVertical>
                </el-sub-menu>
            </template>
            <template v-else>
                <el-menu-item :index="menu.url" :key="menu.url" >
                    <span>{{ menu.title}}</span>
                </el-menu-item>
            </template>
        </template>
    </template>
</template>
<script setup lang="ts">
import {RouteRecordRaw} from 'vue-router'
import {onMounted} from "vue";

const props = withDefaults(defineProps<Props>(), {
    menus: () => [],
})
onMounted(()=>{
})
interface Props {
    menus: RouteRecordRaw[]
}


</script>

<style scoped lang="scss">
.el-sub-menu .icon,
.el-menu-item .icon {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
}

.is-active > .icon {
    color: var(--el-menu-active-color) !important;
}
</style>
