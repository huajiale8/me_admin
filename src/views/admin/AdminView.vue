<template>
    <el-card class="box-card">
        <el-row class="el-row1">
            <el-col :span="2">
                <AddButton @click="add"/>
            </el-col>
        </el-row>
        <el-table border :data="navList">
            <el-table-column prop="id" label="id" align="center"/>
            <el-table-column prop="name" label="名称" align="center"/>
            <el-table-column prop="status" label="状态" align="center">
                <template #default="scope">
                    <el-tag v-if="scope.row.status === 0" class="ml-2" type="success">启用💕</el-tag>
                    <el-tag v-else class="ml-2" type="danger">禁用🖤</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号码" align="center"/>
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
            <el-table-column prop="updated_at" label="操作" align="center" width="90px">
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
        <el-dialog
            v-model="centerDialogVisible"
            :title="title"
            width="30%"
            destroy-on-close
            :before-close="close"
            draggable
            center>
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="120px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"/>
                </el-form-item>
                <el-form-item label="管理员电话" prop="phone">
                    <el-input v-model="ruleForm.phone"/>
                </el-form-item>
                <el-form-item label="密码" v-if="buttonFlag">
                    <el-input v-model="ruleForm.password" show-password/>
                </el-form-item>
                <el-form-item label="是否启用" prop="delivery">
                    <el-switch
                        :active-value="0"
                        :inactive-value="1"
                        v-model="ruleForm.status"/>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                    <el-button v-if="buttonFlag === true" type="primary" @click="submitForm(ruleFormRef)">确定
                    </el-button>
                    <el-button v-else type="primary" @click="updata(ruleFormRef)">更新
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </el-card>
</template>
<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
import {infoData} from '@/utils/infoData'
import ModpagingModule from "@/components/common/ModpagingModule.vue";
import AddButton from "@/components/common/AddButton.vue";
import type {FormInstance, FormRules} from 'element-plus'
import {ElMessage} from 'element-plus'
import {addUser, getUserDetail, getUserList, putUserDetails} from "@/api/admin/user";

const total = ref(0)
const navList = ref([])
const centerDialogVisible = ref(false)
const buttonFlag = ref(false)
const title = ref('')
const add = () => {
    centerDialogVisible.value = true
    buttonFlag.value = true
    title.value = '新增管理员'
}
const page = reactive({
    page: 1,
    pageSize: 10
})
onMounted(() => {
    getList()
})
const getList = () => {
    getUserList(page).then(res => {
        navList.value = res.data.data.data
        total.value = res.data.data.total
    })
}
const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive({
    name: '',
    phone: '',
    id: 0,
    password: '',
    status: 0,
    avatar: '',
})

const rules = reactive<FormRules>({
    name: [
        {required: true, message: '请输入管理员名称', trigger: 'blur'},
    ],
    phone: [
        {required: true, message: '请输入管理员电话', trigger: 'blur'},
        {pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur'}

    ],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            addUser(ruleForm).then(res => {
                ElMessage({
                    type: 'success',
                    message: res.msg,
                })
                centerDialogVisible.value = false
                buttonFlag.value = false
                getList()
            })
        } else {
            return false
        }
    })
}
const edit = (id: number) => {
    title.value = '编辑管理员信息'
    getUserDetail(id).then(res => {
        let s = res.data.data
        ruleForm.name = s.name
        ruleForm.status = s.status
        ruleForm.id = s.id
        ruleForm.phone = s.phone
        centerDialogVisible.value = true
        buttonFlag.value = false
    })
}
const updata = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            putUserDetails(ruleForm.id, ruleForm).then(res => {
                centerDialogVisible.value = false
                buttonFlag.value = false
                getList()
            })
        } else {
            return false
        }
    })
}

const close = () => {
    centerDialogVisible.value = false
    buttonFlag.value = false
    ruleForm.id = 0
    ruleForm.name = ''
    ruleForm.password = ''
    ruleForm.phone = ''
    ruleForm.status = 0
}
</script>

<style lang="scss" scoped>
.el-row1 {
    margin-bottom: 10px;
}
</style>
