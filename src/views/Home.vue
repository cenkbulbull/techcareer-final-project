<template>
  <HighestRatedCarousel />
  <div>
    <h5 class="ml-7">Tüm Ürünler</h5>
    <ProductsDataView />
  </div>
</template>
<script setup>
import ProductsDataView from "../components/ProductsDataView.vue";
import HighestRatedCarousel from "../components/HighestRatedCarousel.vue";
</script>
