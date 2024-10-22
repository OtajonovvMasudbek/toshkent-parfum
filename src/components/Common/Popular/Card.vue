<template>
  <div
    v-for="product in visibleProducts"
    :key="product.id"
    class="group flex justify-between items-end max-h-[120px] shadow  rounded-lg transition-all  duration-300 hover:shadow-lg pl-2 pt-2 my-2 overflow-hidden"
  >
    <div class="flex flex-col gap-4">
      <h2
        class="text-[10px] lg:text-[17px] lg:line-clamp-none line-clamp-2 text-slate-900 px-2 font-bold transition-all duration-300"
      >
        {{ product.title }}
      </h2>
      <button
        class="text-[#f62559] text-[14px] pb-2 px-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        Кўпроқ
        <i class="text-[14px] ri-arrow-right-line"></i>
      </button>
    </div>
    <div class="lg:max-w-[100px] max-w-[70px] mt-auto rounded-b-3xl">
      <img
        class="object-contain"
        :src="product.icon_src.medium"
        alt="product image"
      />
    </div>
  </div>

  <div v-if="products.length > maxVisible" class="text-left top-0 mt-4">
    <button
      @click="showMore"
      class="text-[#5b5758]  hover:text-[#f62559] px-4 py-2 rounded-lg transition-all duration-[0.5s]"
    >
      Барча бўлимлар
      <i class="text-[14px] ri-arrow-right-line"></i>
    </button>
  </div>

  <p v-if="error" class="text-red-500">{{ error }}</p>
  <p v-if="loading" class="text-gray-500">Loading...</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  icon_src: {
    medium: string;
  };
}

const products = ref<Product[]>([]);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);
const maxVisible = ref<number>(12);
const visibleProducts = ref<Product[]>([]);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await axios.get<Product[]>(
      "https://toshkent-parfum.uz/api/v1/products/categories/"
    );
    products.value = response.data;
    updateVisibleProducts();
  } catch (err) {
    console.error(err);
    error.value = "Error fetching products";
  } finally {
    loading.value = false;
  }
};

const updateVisibleProducts = () => {
  visibleProducts.value = products.value.slice(0, maxVisible.value);
};

const showMore = () => {
  maxVisible.value += 12;
  updateVisibleProducts();
};

onMounted(() => {
  fetchProducts();
});
</script>
