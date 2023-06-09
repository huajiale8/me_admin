<template>
    <el-card class="box-card">
        <el-row class="el-row1">
            <el-col :span="2">
                <AddButton @click="add"/>
            </el-col>
        </el-row>
        <el-table
            border
            :data="navList"
            lazy
            row-key="id"
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
            <el-table-column prop="title" label="名称" min-width="150px"/>
            <el-table-column prop="icon" label="图标">
                <template #default="scope">
                    <el-icon>
                        <component :is="scope.row.icon? scope.row.icon:'ss'"/>
                    </el-icon>
                </template>
            </el-table-column>
            <el-table-column prop="url" label="url"/>
            <el-table-column prop="url" label="类型" align="center">
                <template #default="scope">
                    <el-tag v-if="scope.row.type === 'menu_dir'" type="warning">菜单目录</el-tag>
                    <el-tag v-if="scope.row.type === 'menu'" type="success">菜单项</el-tag>
                    <el-tag v-if="scope.row.type === 'button'">页面按钮</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="sort" label="排序" align="center"/>
            <el-table-column label="是否显示" align="center" min-width="100">
                <template #default="scope">
                    <el-tag v-if="scope.row.is_show === 0" type="success">😀😘💕💕💕显示</el-tag>
                    <el-tag v-else type="info">😒😒😒隐藏</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="tag" label="标签" align="center">
                <template #default="scope">
                    <el-tag v-if="scope.row.tag === '导航目录'" type="warning">导航目录</el-tag>
                    <el-tag v-if="scope.row.tag === 'button'">页面按钮</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="created_at" label="开始日期" align="center">
                <template #default="scope">
                    <span>{{ infoData(scope.row.created_at) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updated_at" label="截止日期" align="center">
                <template #default="scope">
                    <span>{{ infoData(scope.row.updated_at) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center" min-width="80">
                <template #default="scope">
                    <CustomSwitch
                        v-model="scope.row.status"
                        :id="scope.row.id"
                        :activeValue="0"
                        :inActiveValue="1"
                        :enable="enable"
                        :disable="disable"/>
                </template>
            </el-table-column>
            <el-table-column prop="updated_at" label="截止日期" align="center" width="170px">
                <template #default="scope">
                    <el-row class="mb-4">
                        <el-button type="warning" size="small" icon="Plus" @click="smallAdd(scope.row.id)">新增
                        </el-button>
                        <el-button @click="edit(scope.row.id)" type="primary" size="small" icon="Edit">编辑</el-button>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    <menu-dialog @render="getList"/>
</template>
<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {infoData} from '@/utils/infoData'
import AddButton from "@/components/common/AddButton.vue";
import {addMenuParticulars, getMenu} from "@/api/menuApi";
import CustomSwitch from "@/components/CustomSwitch.vue";
import MenuDialog from "@/views/dialog/menuDialog.vue";
import {menuStore} from "@/stores/menuStore"

const store = menuStore()
const navList = ref([])

const add = () => {
    store.title = '新增菜单'
    store.centerDialogVisible = true
    store.addButton = true
}
const edit = (id: number) => {
    addMenuParticulars(id).then(res => {
        let obj = res.data.data.info
        store.ruleForm = obj
        store.title = '编辑菜单'
        store.addButton = false
        store.centerDialogVisible = true
    })
}
const smallAdd = (id: number) => {
    addMenuParticulars(id).then(res => {
        let obj = res.data.data.info
        store.ruleForm.pid = obj.pid
        store.title = '新增子菜单'
        store.addButton = true
        store.centerDialogVisible = true
    })
}

const enable = (id: number) => {
    return new Promise<void>((resolve, reject) => {
        // MenuEnableApi({id}, 'enable').then(() => {
        //     resolve();
        // }).catch(() => {
        //     reject();
        // });
    });
};
const disable = (id: number) => {
    return new Promise<void>((resolve, reject) => {
        // MenuEnableApi({id}, 'disable').then(() => {
        //     resolve();
        // }).catch(() => {
        //     reject();
        // });
    });
};

onMounted(() => {
    getList()
})
const getList = () => {
    getMenu().then(res => {
        navList.value = res.data.content
        console.log(res.data.content)
    })
}
</script>

<style lang="scss" scoped>
.el-row1 {
    margin-bottom: 10px;
}
</style>
