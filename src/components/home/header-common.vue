<template>
    <div style="display: flex">
        <el-scrollbar>
            <div class="navigation">
                <div class="nav_felx" v-for="(item, index) in store.headerList" :class="flag===item.url ? 'active' : ''"
                     :key="index">
                    <div @click="go(item)">{{ item.title }}</div>
                    <div class="nav-icon" @click="del(index)">
                        <el-icon>
                            <CloseBold/>
                        </el-icon>
                    </div>
                </div>
            </div>
        </el-scrollbar>
        <el-card class="box-card">

        </el-card>
    </div>
</template>
<script setup lang="ts">
import {asideStore} from '@/stores/home/aside'
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from 'vue'

const store = asideStore()
const router = useRouter()
const route = useRoute()
const flag = ref('')
const del = (index: number) => {
    store.headerList.splice(index, 1)
}

onMounted(() => {
    flag.value = route.path
})
watch(() => route.path, (newVlue: string) => {
    flag.value = newVlue
})
const go = (item: Person) => {
    router.push(item.url)
}

</script>

<style lang="scss" scoped>
.navigation {
    margin-top: 6px;
    color: rgb(132, 132, 132);
    display: flex;

    .nav_felx {
        display: flex;
        margin-left: 3px;
        padding: 10px;
        white-space: nowrap;

        .nav-icon {
            height: 15px;
            margin-left: 12px;
            margin-top: 4px;
            line-height: 15px;
        }

        .nav-icon:hover {
            background-color: #3f6ad8;
            border-radius: 50%;
            color: white;
            text-align: center;
        }
    }

    .nav_felx:hover {
        color: #181818;
        font-weight: 600;
        cursor: pointer;
    }

    .active {
        //background-color: ;
        color: #181818;
        font-weight: 600;
        cursor: pointer;
        background-color: white;
        border-radius: 5px;
        opacity: .7;
    }

    .scrollbar-flex-content {
        display: flex;
    }

    .scrollbar-demo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-danger-light-9);
        color: var(--el-color-danger);
    }
}
.box-card{
    position: absolute;
    right: 10px;
    width: 300px;
}
.el-scrollbar {
    width: 65vw;
}

</style>
