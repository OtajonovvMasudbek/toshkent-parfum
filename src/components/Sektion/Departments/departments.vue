<template>
  <div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await axios.get('https://toshkent-parfum.uz/api/v1/products/?size=12');
    
    products.value =  response.data.results; 

  } catch (err) {
    error.value = 'Error fetching products';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
}
</style>
