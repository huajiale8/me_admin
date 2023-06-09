<script setup lang="ts">
import { useLoginStore } from "@/stores/login"

import pinia from "@/utils/pinia"
import { onMounted } from "vue"
import { watchEffect } from "vue"
import { useRouter } from "vue-router"

const globalStore = useLoginStore(pinia)
const router = useRouter()
watchEffect(() => {
    if (globalStore.routeReady) {
        router.push(router.currentRoute.value.fullPath)
    }
})

onMounted(() => {
    console.log()
})
</script>

<template>
    <div class="loading">
        loading
    </div>
</template>

<style scoped lang="scss">
.loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
