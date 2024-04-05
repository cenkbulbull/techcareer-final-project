<template>
  <DataView :value="favorites" :layout="layout">
    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div
          v-for="fav in favorites"
          class="col-12 sm:col-6 md:col-4 xl:col-6 p-2"
        >
          <div
            class="p-4 border-1 surface-border surface-card border-round flex flex-column justify-content-between"
          >
            <div
              class="surface-50 flex justify-content-center border-round p-3"
            >
              <div class="relative mx-auto">
                <img
                  class="border-round w-full"
                  :src="fav.image"
                  style="max-width: 300px; height: 200px"
                />
              </div>
            </div>
            <div class="pt-4">
              <div
                class="flex flex-row justify-content-between align-items-start gap-2"
              >
                <div>
                  <span class="font-medium text-secondary text-sm">{{
                    fav.category
                  }}</span>
                  <div class="text-lg font-medium text-900 mt-1">
                    {{ fav.title }}
                  </div>
                </div>
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div
                    class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                    style="
                      border-radius: 30px;
                      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                    "
                  >
                    <span class="text-900 font-medium text-sm">{{
                      fav.rating.rate
                    }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column gap-4 mt-4">
                <span class="text-2xl font-semibold text-900"
                  >${{ fav.price }}</span
                >
                <div class="flex gap-2">
                  <Button
                    @click="addToCart(fav)"
                    icon="pi pi-shopping-cart"
                    label="Add to cart"
                    class="flex-auto white-space-nowrap"
                  ></Button>
                  <Button
                    @click="removeFavorites(fav.id)"
                    icon="pi pi-heart-fill"
                    outlined
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>
<script setup>
import { ref, computed } from "vue";
import { useProducts } from "../store/index";

const store = useProducts();

const removeFavorites = (id) =>{
  store.removeFavorites(id)
}

const addToCart = (product) =>{
  store.setProducts(product)
}

const favorites = computed(() => {
  const favorites = ref([]);
  store.getFavorites.map((product) => {
    favorites.value.push(product);
  });
  console.log(favorites.value)
  return favorites.value;
});

const layout = ref("grid");
</script>
