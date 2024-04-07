<template>
    <div class="card mt-3">
        <h5 class="ml-7">En Yüksek Puanlı Ürünler</h5>
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3 h-26rem flex flex-column justify-content-between">
                    <div class="mb-3">
                        <div class="relative mx-auto flex justify-content-center">
                            <img :src="slotProps.data.image" class="w-15rem border-round h-15rem" @click="$router.push('/product/'+slotProps.data.id)" />
                            <Tag :value="slotProps.data.rating.rate" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ slotProps.data.title }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button @click="addFavorites(slotProps.data)" icon="pi pi-heart" severity="secondary" outlined />
                            <Button @click="addToCart(slotProps.data)" icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductsService from "../services/products/index";
import { useProducts } from "../store/index";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const store = useProducts();

const addFavorites = (product) =>{
  store.setFavorites(product)
  toast.success(`${product.title} Favorilere Eklendi`, {
    position: toast.POSITION.TOP_CENTER,
  });
}

const addToCart = (product) =>{
  store.setProducts(product)
}

onMounted(async () => {
    await ProductsService.getAllProducts().then((data) => {
        //burada ratingi 4ün üstünde olanları product.value içine at dicez, map ile döndür
        data.map((product)=>{
            if(product.rating.rate > 4){
                products.value.push(product)
            }
        })
    });
})

const products = ref([]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>
