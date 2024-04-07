<template>
  <DataView :value="product" :layout="layout">
    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div class="col-12 p-2">
          <div
            class="p-4 border-1 surface-border surface-card border-round flex flex-column justify-content-between"
          >
            <div
              class="surface-50 flex justify-content-center border-round p-3"
            >
              <div class="relative mx-auto">
                <img
                  class="border-round w-full"
                  :src="product.image"
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
                    product.category
                  }}</span>
                  <div class="text-lg font-medium text-900 mt-1">
                    {{ product.title }} <br /><br />
                    {{ product.description }}
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
                      product.rating.rate
                    }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column gap-4 mt-4">
                <span class="text-2xl font-semibold text-900"
                  >${{ product.price }}</span
                >
                <div class="flex gap-2">
                  <Button
                    @click="addToCart(product)"
                    icon="pi pi-shopping-cart"
                    label="Add to cart"
                    class="flex-auto white-space-nowrap"
                  ></Button>
                  <Button
                    @click="addFavorites(product)"
                    icon="pi pi-heart"
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
import { ref, onMounted } from "vue";
import ProductsService from "../services/products/index";
import { useProducts } from "../store/index";
import { useRoute } from "vue-router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const route = useRoute();
const store = useProducts();
const product = ref();

onMounted(() => {
  ProductsService.getAllProducts().then((products) => {
    product.value = products.find((product) => product.id == route.params.id);
  });
});

const addFavorites = (product) => {
  if (store.getFavorites.length > 0) {
    const favoriteControl = store.getFavorites.find(
      (favoritedProduct) => favoritedProduct.id === product.id
    );
    if (favoriteControl === undefined) {
      store.setFavorites(product);
      toast.success(`${product.title} Favorilere Eklendi`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }else{
      toast.warn(`${product.title} Daha Önce Favorilere Eklenmiş`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } else {
    store.setFavorites(product);
    toast.success(`${product.title} Favorilere Eklendi`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};


const addToCart = (product) => {
  store.setProducts(product);
};

const layout = ref("grid");
</script>
