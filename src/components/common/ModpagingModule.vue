<template>
    <div class="right">
        <el-pagination
            background
            :page-sizes="[10,15,20,25]"
            v-model:page-size="pageSize"
            v-model:current-page="page"
            @update:current-page="handlePageChange"
            @update:page-size="handleSizeChange"
            :layout="layout"
            :total="total">
        </el-pagination>
    </div>
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps(
    {
        pageSize: [Number, String],//一页多少条
        page: [Number, String],//当前页
        total: {
            type: [Number, String],
            default: 0,
        },//总页数
        layout: {
            type: String,
            default: "total, sizes, prev, pager, next, jumper",
        },
    },
);
const emit = defineEmits(["update:pageSize", "update:page", "render"]);

const total = computed(() => {
    return Number(props.total);
});
const pageSize = computed({
    get() {
        return props.pageSize;
    },
    set(value) {
        emit("update:pageSize", value);
    },
});
const page = computed({
    get() {
        return props.page;
    },
    set(value) {
        emit("update:page", value);
    },
});

// 分页导航
const handlePageChange = (val: number | string) => {
    page.value = Number(val);
    emit("render");
};
//切换分页条数
const handleSizeChange = (val: number | string) => {
    pageSize.value = Number(val);
    page.value = 1;
    emit("render");
};


</script>

<style lang="scss" scoped>
.right {
    .el-pagination {
        display: flex;
        justify-content: end;
        padding-top: 20px;
    }
}
</style>
