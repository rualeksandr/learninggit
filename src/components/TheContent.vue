<template>
  <v-container>
    <h1 class="title">Интернет-магазин</h1>
    <v-row>
      <product-item v-for="product in fetchProducts" :key="product.id" :product="product"/>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from './ProductItem.vue'
import apiService from '../api/apiService'

export default {
  components: { ProductItem },
  computed: {
    fetchProducts() {
      return apiService.fetchProducts();
    }
  },
  mounted() {
    console.log(apiService.fetchProducts())
  }
}
</script>

<style scoped>
    .title {
        
    }
</style>
