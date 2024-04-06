<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img src="../../assets/techcareer.png" alt="" width="200">
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span class="ml-2"><router-link active-class="active" class="nav-item" :to="item.url">{{ item.label }}</router-link></span>
        </a>
      </template>
      <template #end>
        <div class="flex">
          <router-link to="/auth/login" class="mr-1"><Button label="Login"/></router-link>
          <Cart/>
        </div>
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
  },
  {
    label: "Electronics",
    url:"/electronics",
  },
  {
    label: "Jewelery",
    url:"/jewelery",
  },
  {
    label: "Men's clothing",
    url:"/men's clothing",
  },
  {
    label: "Women's clothing",
    url:"/women's clothing",
  },
  {
    label: "Favorites",
    url:"/favorites",
  }
]);
</script>
<style scoped>
.nav-item{
  color: #000 !important;
  text-decoration: none !important;
}
.active{
  color: #00c26d !important;
}
</style>