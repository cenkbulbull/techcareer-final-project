<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img src="../../assets/techcareer.png" alt="" width="200">
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span class="ml-2"><router-link class="nav-item" :to="item.url">{{ item.label }}</router-link></span>
        </a>
      </template>
      <template #end>
        <router-link to="/auth/login"><Button label="Login"/></router-link>
        <Cart/>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Cart from "../Cart.vue"

const items = ref([
  {
    label: "Home",
    url:"/",
    icon: "pi pi-home",
  },
  {
    label: "Electronics",
    url:"/electronics",
    icon: "pi pi-star",
  },
  {
    label: "Jewelery",
    url:"/jewelery",
    icon: "pi pi-star",
  },
  {
    label: "Men's clothing",
    url:"/mensclothing",
    icon: "pi pi-star",
  },
  {
    label: "Women's clothing",
    url:"/womensclothing",
    icon: "pi pi-star",
  }
]);
</script>
<style scoped>
.nav-item{
  color: #000 !important;
  text-decoration: none !important;
}
</style>