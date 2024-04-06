<script setup>
import Navbar from "./components/shared/AppNavbar.vue";
import { onMounted } from "vue";
import { useUser } from "./store/index";

const store = useUser();

onMounted(async()=>{
    await store.setUsers()
})
</script>
<template>
  <Navbar />
  <router-view />
</template>
<style>
body {
  background-color: #f8fafc;
}
</style>
