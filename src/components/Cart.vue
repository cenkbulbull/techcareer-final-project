
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-shopping-cart" label="Cart" @click="toggleCart" />

        <OverlayPanel ref="cart">
            <div class="flex flex-column gap-3 w-25rem">
                <div>
                    <span class="font-medium text-900 block mb-2">Cart</span>
                    <ul class="list-none p-0 m-0 flex flex-column gap-3">
                        <li v-for="product in products" :key="products.name" class="flex align-items-center gap-2">
                            <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${product.image}`" style="width: 32px" />
                            <div>
                                <span class="font-medium">{{ product.name }}</span>
                            </div>
                            <div class="flex align-items-center gap-2 text-color-secondary ml-auto text-sm">
                                <span>{{ product.count }} adet</span>
                                <span>{{ product.price }} tl</span>
                            </div>
                            <div>
                                <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const cart = ref();
const products = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', count: '5', price: '50' },
]);

const toggleCart = (event) => {
    cart.value.toggle(event);
}
</script>
