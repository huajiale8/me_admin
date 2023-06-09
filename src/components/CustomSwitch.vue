<script lang="ts" setup>

import {computed, ref} from "vue";
import _ from "lodash";

const props = defineProps({
    id: {type: Number, required: true},
    enable: {type: Function, required: true},
    disable: {type: Function, required: true},
    modelValue: {type: Number},
    activeValue: {type: Number, default: 1},
    inActiveValue: {type: Number, default: 0},
});
const emit = defineEmits(["update:modelValue"]);
const loading = ref(false);

const status = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

const onChange = (val: number) => {
    loading.value = true;
    const oldVal = _.cloneDeep(status.value);
    status.value = val;
    const action = val === props.activeValue;
    if (action === true) {
        props.enable(props.id).catch(() => {
            status.value = oldVal;
        }).finally(() => {
            loading.value = false;
        });
    } else {
        props.disable(props.id).catch(() => {
            status.value = oldVal;
        }).finally(() => {
            loading.value = false;
        });
    }
};
</script>

<template>
    <el-switch
        :model-value="status"
        :loading="loading"
        @change="onChange"
        :active-value="activeValue"
        :inactive-value="inActiveValue"/>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
export default {
    name: "CustomSwitch",
};
</script>
