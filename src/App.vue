<script setup lang="ts">
import {RouterView} from 'vue-router'
import {getRole_menu} from "@/api/login";
import {addRouteAll, getFirstRoute} from "@/utils/router";
import {onMounted} from "vue";
import pinia from "@/utils/pinia";
import {useLoginStore} from "@/stores/login";
import router from "@/router";

const store = useLoginStore(pinia)
const getList = () => {
    store.routeReady = false
    getRole_menu().then(res => {
        store.setNavMenu(res.data.data)
        addRouteAll(res.data.data, "home")
        store.routeReady = true
    })
}

// wdawwd
onMounted(() => {
    getList()

})

</script>

<template>
    <RouterView/>
</template>

<style scoped>

</style>
