<template>
  <div class="container max-w-full sm:max-w-[1200px] mx-auto">
    <h2
      class="text-[28px] sm:text-[33px] mx-10 py-5 font-semibold text-slate-900"
    >
      Эркаклар учун энг яхши тоифалар
    </h2>
    <div
      class="grid grid-cols-2 lg:mx-10 mx-1 sm:grid-cols-2 px-1 lg:grid-cols-3 gap-5"
    >
      <div
        v-for="product in visibleProducts"
        :key="product.id"
        class="group flex justify-between items-end max-h-[120px] shadow rounded-lg transition-all duration-300 hover:shadow-lg pl-2 pt-2 my-2 overflow-hidden"
      >
        <div>
          <h2
            class="text-[10px] line-clamp-2 lg:line-clamp-none sm:text-[20px] text-slate-900 px-2 font-bold transition-all duration-300"
          >
            {{ product.title }}
          </h2>
          <button
            class="text-[#f62559] text-[12px] sm:text-[14px] pb-2 px-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Кўпроқ
            <i class="text-[12px] sm:text-[14px] ri-arrow-right-line"></i>
          </button>
        </div>
        <div class="max-w-[80px] sm:max-w-[100px] mt-auto rounded-b-3xl">
          <img
            class="object-contain w-full h-auto"
            :src="product.icon_src.medium"
            alt="product image"
          />
        </div>
      </div>
    </div>
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
const maxVisible = ref<number>(4);
const visibleProducts = ref<Product[]>([]);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await axios.get<Product[]>(
      "https://toshkent-parfum.uz/api/v1/products/categories/",
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
