import { defineStore } from 'pinia'

export const useProducts = defineStore('products', {
  state: () => ({
    products: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  }),
  getters: {
    getAllProducts(state){

    },
    getFavorites(state){
      return state.favorites
    }
  },
  actions: {
    setFavorites(product){
      this.favorites.push(product)
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  },
})