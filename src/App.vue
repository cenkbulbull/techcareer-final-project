<script setup>
import Navbar from "./components/shared/AppNavbar.vue";
import Footer from "./components/shared/AppFooter.vue";
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
  <Footer />
</template>
<style>
body {
  background-color: #f8fafc;
}
</style>
