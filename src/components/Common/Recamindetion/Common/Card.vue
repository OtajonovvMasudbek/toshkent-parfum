<template>
  <div
    v-for="(product, index) in products.slice(0, 6)"
    :key="product.id"
    class="bg-white/25 rounded-xl h-[380px] shadow-lg border-spacing-[0.5px] transition-all duration-500 hover:shadow-2xl my-5 p-3 group relative flex flex-col justify-between"
  >
    <i
      class="absolute right-4 top-5 bg-slate-100 px-2 py-1 rounded-lg transition-all duration-300 hover:text-[#f62559] text-xl ri-heart-line"
    ></i>

    <div class="mb-3 flex justify-center">
      <img
        class="max-w-[150px] max-h-[150px] object-contain"
        :src="product.images[currentImageIndex[index]].default"
        :alt="product.name"
      />
    </div>

    <div class="flex flex-col flex-grow justify-between">
      <div>
        <p class="text-[#f62559] py-3 text-[15px]">
          {{ product.manufacturer.title }}
        </p>
        <p
          class="text-slate-800 line-clamp-1 text-[13px] transition-all duration-300 group-hover:text-[#f62559]"
        >
          {{ product.title }}
        </p>
        <p class="font-bold text-lg py-3 text-slate-800">
          {{ product.price }} UZS
        </p>
      </div>

      <button
        @click="addToCart(product)"
        class="bg-[#f62559] hover:bg-red-500 transition-all duration-300 flex items-center gap-2 px-3 text-white w-full text-[14px] font-semibold py-1 rounded-lg mt-auto"
      >
        <i class="text-white addition text-2xl ri-shopping-basket-2-line"></i>
        Саватчага қўшиш
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
};

const products = ref([]);
const currentImageIndex = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://toshkent-parfum.uz/api/v1/products?ordering=%3F&page=2&product_group_id=941"
    );
    products.value = response.data.results;

    // Initialize image indexes to 0 for all products
    products.value.forEach(() => {
      currentImageIndex.value.push(0);
    });

    // Start the image rotation for each product
    products.value.forEach((product, index) => {
      startImageRotation(index, product.images.length);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Method to rotate images
const startImageRotation = (productIndex, imageCount) => {
  setInterval(() => {
    // Update the image index, looping back to 0 when reaching the end
    currentImageIndex.value[productIndex] =
      (currentImageIndex.value[productIndex] + 1) % imageCount;
  }, 3000); // Change image every 3 seconds
};

// Fetch products when the component is mounted
onMounted(() => {
  fetchProducts();
});
</script>
  