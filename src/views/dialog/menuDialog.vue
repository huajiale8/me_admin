<template>
    <el-dialog
        v-model="store.centerDialogVisible"
        :title="store.title"
        width="30%"
        destroy-on-close
        :before-close="close"
        draggable
        center>
        <el-form
            ref="ruleFormRef"
            :model="store.ruleForm"
            :rules="rules"
            label-width="120px"
            status-icon
        >
            <el-form-item label="菜单标题" prop="title">
                <el-input v-model="store.ruleForm.title"/>
            </el-form-item>
            <el-form-item label="菜单地址" prop="url">
                <el-input v-model="store.ruleForm.url"/>
            </el-form-item>
            <el-form-item label="菜单排序" prop="sort">
                <el-input v-model="store.ruleForm.sort"/>
            </el-form-item>
            <el-form-item label="菜单图标" prop="icon">
                <el-input v-model="store.ruleForm.icon"/>
            </el-form-item>
            <el-form-item label="菜单等级" prop="level">
                <el-input v-model="store.ruleForm.level"/>
            </el-form-item>
            <el-form-item label="菜单节点排序" prop="order">
                <el-input v-model="store.ruleForm.order"/>
            </el-form-item>
            <el-form-item label="菜单父级id" prop="pid">
                <el-input v-model="store.ruleForm.pid"/>
            </el-form-item>
            <el-form-item label="菜单状态" prop="status">
                <el-select v-model="store.ruleForm.status" placeholder="是否可用">
                    <el-option label="可用" :value="0"/>
                    <el-option label="不可用" :value="1"/>
                </el-select>
            </el-form-item>
            <el-form-item label="菜单类型" prop="type">
                <el-select v-model="store.ruleForm.type" placeholder="菜单类型">
                    <el-option label="菜单目录" value="menu"/>
                    <el-option label="菜单页面" value="menu_dir"/>
                    <el-option label="菜单按钮" value="button"/>
                </el-select>
            </el-form-item>
            <el-form-item label="菜单提示" prop="tips">
                <el-input v-model="store.ruleForm.tips"/>
            </el-form-item>
            <el-form-item label="组件地址" prop="component">
                <el-input v-model="store.ruleForm.component"/>
            </el-form-item>
            <el-form-item label="是否显示" prop="delivery">
                <el-switch
                    :active-value="0"
                    :inactive-value="1"
                    v-model="store.ruleForm.is_show"/>
            </el-form-item>

        </el-form>
        <template #footer>
      <span class="dialog-footer">
       <el-button v-if="store.addButton" type="primary" @click="submitForm(ruleFormRef)">
                    确定
                </el-button>
          <el-button v-if="!store.addButton" type="primary" @click="submitFormUpdate(ruleFormRef)">
                    更新
                </el-button>
       <el-button @click="close">取消</el-button>
      </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {menuStore} from '@/stores/menuStore'
import {addMenu, updateMenuParticulars} from "@/api/menuApi";

const store = menuStore()
const ruleFormRef = ref<FormInstance>()
const emit = defineEmits(["render"]);

const rules = reactive<FormRules>({
    title: [
        {required: true, message: '请输入菜单标题', trigger: 'blur'},
    ],
    sort: [
        {required: true, message: '请输入菜单排序', trigger: 'blur'},
    ],
    icon: [
        {required: true, message: '请输入菜单图标', trigger: 'blur'},
    ],
    level: [
        {required: true, message: '请输入菜单等级', trigger: 'blur'},
    ],
    tips: [
        {required: true, message: '请输入菜单提示', trigger: 'blur'},
    ],
    order: [
        {required: true, message: '请输入菜单节点排序', trigger: 'blur'},
    ],
    pid: [
        {required: true, message: '请输入菜单节点排序', trigger: 'blur'},
    ],
    status: [
        {required: true, message: '请选择是否可用', trigger: 'blur'},
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
     url: [
        {required: true, message: '请输入菜单地址', trigger: 'blur'},
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            addMenu(store.ruleForm).then(res => {
                emit("render");
                store.addButton = false
                store.centerDialogVisible = false
            })
        }
    })
}
const submitFormUpdate = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            let s = store.ruleForm
            updateMenuParticulars(s.id,s).then(res => {
                emit("render");
                store.addButton = false
                store.centerDialogVisible = false
            })
        }
    })
}


const close = () => {
    store.centerDialogVisible = false
    store.addButton = false
    const s = store.ruleForm
    s.title = ''
    s.url = ''
    s.sort = 0
    s.icon = ''
    s.is_show = 0
    s.level = 0
    s.order = ''
    s.pid = 0
    s.status = 0
    s.tips = ''
    s.type = 'menu'
    s.component = ''
}

</script>
