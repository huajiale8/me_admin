<template>
<div>
    <el-button type="primary" @click="$attrs.onClick()">
        <el-icon class="add"><Plus /></el-icon>
        <span class="text">添加</span>
    </el-button>
</div>

</template>
<script  lang="ts">
import {Plus} from "@element-plus/icons";

export default {
    name: "BtnAdd",
    inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.text{
    padding-top: 5px;
}


</style>
