<template>
  <div class="relative w-full">
    <div class="flex items-center justify-center border rounded p-2 w-full">
      <input
        v-model="searchTerm"
        type="search"
        placeholder="Qidirish"
        @input="debouncedSearch"
        class="flex-1 outline-none"
      />
      <button
        v-if="searchTerm"
        @click="clearSearch"
        class="ml-2 text-xl"
      ><i class="ri-close-line"></i></button>
    </div>
    <transition name="fade">
      <ul
        v-if="filteredProducts && filteredProducts.length"
        class="absolute left-0 w-full mt-2 bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-10"
      >
        <li
          v-for="product in filteredProducts"
          :key="product.id"
          class="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          @click="selectProduct(product)" 
        >
          <div class="flex items-center">
            <div v-if="product.images" class="mr-2">
              <img
                :src="product.images[0]?.default"
                alt="Product"
                class="w-8 h-8"
              />
            </div>
            <span v-html="highlightText(product.title)" class="ml-2"></span>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const searchTerm = ref("");
const filteredProducts = ref([]);

const fetchProducts = async (term = "") => {
  try {
    const response = await axios.get(
      `https://toshkent-parfum.uz/api/v1/products/?search=${term}&page=1&size=10`
    );

    filteredProducts.value = response.data.results || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    filteredProducts.value = [];
  }
};

const debouncedSearch = debounce(() => {
  if (searchTerm.value) {
    fetchProducts(searchTerm.value);
  } else {
    filteredProducts.value = [];
  }
}, 100);

const clearSearch = () => {
  searchTerm.value = "";
  filteredProducts.value = [];
};

const selectProduct = (product) => {
  console.log("Selected product:", product);
  searchTerm.value = product.title; 
  filteredProducts.value = []; 
};

const highlightText = (text) => {
  if (!searchTerm.value) return text;
  const regex = new RegExp(`(${searchTerm.value})`, "gi");
  return text.replace(regex, `<mark class="bg-yellow-300">$1</mark>`);
};

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
