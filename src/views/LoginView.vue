<template>
    <div class="about">
        <el-card class="box-card">
            <h3>登录界面</h3>
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                :rules="rules"
                label-width="120px"
            >
                <el-form-item label="用户账号" prop="phone">
                    <el-input v-model="ruleForm.phone"/>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item class="css-right">
                    <el-button @click="resetForm(ruleFormRef)">取消</el-button>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        确认
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import {getLogin, getRole_menu} from "@/api/login";
import {useRouter} from "vue-router";
import {useLoginStore} from '@/stores/login'

const router = useRouter()
const store = useLoginStore()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    phone: '13776072264',
    password: '123456',
})

const rules = reactive<FormRules>({
    phone: [
        {required: true, message: '用户账户不能为空', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '用户密码不能为空', trigger: 'blur'},
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            getLogin(ruleForm).then(res => {
                store.setToken(res.data.data.token)
                router.push({path: '/'})
            })
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped lang="scss">
.about {
    width: 100%;
    height: 100%;
    background: #7d7a7a;

    .el-card {
        width: 500px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .el-form {
            margin-top: 30px;

            :deep(.el-form-item__content) {
                display: flex;
                justify-content: center;
                margin-left: 0 !important;
            }
        }

        h3 {
            text-align: center;
            font-weight: bolder;
        }
    }
}
</style>
