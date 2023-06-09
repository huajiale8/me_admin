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
        >
            <el-table-column prop="id" label="id" align="center"/>
            <el-table-column prop="title" label="名称" align="center"/>
            <el-table-column prop="status" label="状态" align="center">
                <template #default="scope">
                    <el-tag v-if="scope.row.status === 1" class="ml-2" type="success">启用</el-tag>
                    <el-tag v-else class="ml-2" type="danger">禁用</el-tag>
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
            <el-table-column prop="updated_at" label="截止日期" align="center" width="90px">
                <template #default="scope">
                    <el-button @click="edit(scope.row.id)" type="primary" size="small" icon="Edit">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <ModpagingModule
            v-model:page-size="page.pageSize"
            v-model:page="page.page"
            :total="total"
            @render="getList"/>
    </el-card>

</template>
<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {addNav_group, getNav_group, getNav_groupDetails, updataNav_groupDetails} from "@/api/dataKnowledgeapi";
import {infoData} from '@/utils/infoData'
import ModpagingModule from "@/components/common/ModpagingModule.vue";
import AddButton from "@/components/common/AddButton.vue";
import {ElMessage, ElMessageBox} from 'element-plus'

const total = ref(0)
const navList = ref([])

const add = () => {
    ElMessageBox.prompt('新增导航目录', '新增', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern: /^.+$| /,
        inputErrorMessage: '导航目录不能为空！',
    })
        .then(({value}) => {
            addNav_group({
                title: value,
                tag: '导航目录',
                status: 1
            }).then(res => {
                ElMessage({
                    type: 'success',
                    message: res.msg,
                })
                getList()
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '添加失败',
            })
        })

}
const edit = (id: number) => {
    getNav_groupDetails(id).then(res => {
        console.log(res.data.data)
        ElMessageBox.prompt('编辑导航目录', '编辑', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            inputPattern: /^.+$| /,
            inputValue: res.data.data.title,
            inputErrorMessage: '导航目录不能为空！',
        })
            .then(({value}) => {
                updataNav_groupDetails(id,
                    {
                        title: value,
                        tag: '导航目录',
                        status: res.data.data.status
                    }
                ).then(res => {
                    ElMessage({
                        type: 'success',
                        message: res.msg,
                    })
                    getList()
                })
            })
            .catch(() => {
                ElMessage({
                    type: 'info',
                    message: '添加失败',
                })
            })
    })
}
const page = reactive({
    page: 1,
    pageSize: 10
})
onMounted(() => {
    getList()
})
const getList = () => {
    getNav_group(page).then(res => {
        navList.value = res.data.data.list
        total.value = res.data.data.total
    })
}
</script>

<style lang="scss" scoped>
.el-row1 {
    margin-bottom: 10px;
}
</style>
