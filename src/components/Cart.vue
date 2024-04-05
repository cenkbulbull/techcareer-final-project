<template>
  <div class="card flex justify-content-center" v-if="products.length > 0">
    <Button
      type="button"
      icon="pi pi-shopping-cart"
      label="Cart"
      @click="toggleCart"
    />
    <OverlayPanel ref="cart">
      <div class="flex flex-column gap-3 w-25rem">
        <div>
          <ul class="list-none p-0 m-0 flex flex-column gap-3">
            <li
              v-for="product in products"
              :key="product.id"
              class="flex align-items-center gap-2"
            >
              <img :src="product.image" style="width: 32px" />
              <div>
                <span class="font-medium">{{ product.title }}</span>
              </div>
              <div
                class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm"
              >
                <!--<span>.. adet</span>-->
                <span>{{ product.price }} $</span>
              </div>
              <div>
                <Button
                  @click="removeProduct(product.id)"
                  icon="pi pi-times"
                  severity="danger"
                  aria-label="Remove"
                />
              </div>
            </li>
            <span class="mt-3">%20 indirim kazanmak için kupon kodunu girin.</span>
            <div class="flex">
              <InputOtp v-model="couponCode" :length="5" />
              <Button @click="$router.push('/payment')" class="ml-2" :label="'Pay '+ getTotalPrice + '$'" />
            </div>
          </ul>
        </div>
      </div>
    </OverlayPanel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProducts } from "../store/index";

const store = useProducts();

const products = computed(() => {
  const products = ref([]);
  store.getAllProducts.map((product) => {
    products.value.push(product);
  });
  return products.value;
});

const couponCode = ref()

const getTotalPrice = computed(()=>{
    if(couponCode.value == import.meta.env.VITE_APP_COUPON_CODE){
      store.addDiscount()
      return store.getDiscountedPrice
    }
    return store.getTotalPrice
})

const removeProduct = (id) => {
  store.removeProduct(id);
};

const cart = ref();

const toggleCart = (event) => {
  cart.value.toggle(event);
};
</script>
