import { defineStore } from 'pinia'

export const useProducts = defineStore('products', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('productsInCart')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    totalPrice: 0
  }),
  getters: {
    getAllProducts(state){
      return state.products
    },
    getTotalPrice(state){
      let totalPrice = 0
      state.products.map((product)=>{
        totalPrice += Number(product.price)
      })
      state.totalPrice = totalPrice
      return state.totalPrice
    },
    getDiscountedPrice(state){
      return state.totalPrice
    },
    getFavorites(state){
      return state.favorites
    }
  },
  actions: {
    setFavorites(product){
      this.favorites.push(product)
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFavorites(id){
      this.favorites = this.favorites.filter(product => product.id !== id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    setProducts(product){
      this.products.push(product)
      localStorage.setItem('productsInCart', JSON.stringify(this.products));
    },
    removeProduct(id){
      this.products = this.products.filter(product => product.id !== id);
      localStorage.setItem('productsInCart', JSON.stringify(this.products));
    },
    addDiscount(){
      this.totalPrice = this.getTotalPrice * 0.8
    }
  },
})