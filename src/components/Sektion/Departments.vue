<template>
  <div>
    <div v-if="loading" class="text-lg text-center">Yuklanmoqda...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <Swiper
        :pagination="true"
        :slides-per-view="1"
        :space-between="30"
        effect="coverflow"
        :coverflow-effect="{
          rotate: 30,
          stretch: 50,
          scale: 1,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }"
        :loop="true"
        :autoplay="{
          delay: 500, 
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide
          v-for="product in products"
          :key="product.id"
          class="flex flex-col items-center lg:p-4"
        >
          <div class="relative flex flex-col items-center">
            <img
              class="w-full max-h-[500px] rounded-lg"
              :src="product.image_src.default"
              :alt="`Image of ${product.title}`"
            />
            <div class="absolute bottom-0 p-4 left-32">
              <h2 class="mb-10 hidden lg:block pr-32 text-[30px] font-bold text-white">
                {{ product.title }}
              </h2>
              <p class="mb-2 text-sm">{{ product.description }}</p>
              
              <button
                class="relative px-6 py-2 lg:mb-5 bg-black opacity-50 rounded group"
              >
                <span
                  class="absolute inset-0 bg-black opacity-50 rounded group-hover:bg-white group-hover:opacity-100 transition-all"
                ></span>
                <span
                  class="relative text-[12px] lg:text-[17px] font-bold text-white transition group-hover:text-black"
                >Mahsulotlar to'g'risida batafsil</span>
                >
              </button>
            
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const products = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await axios.get(
      "https://toshkent-parfum.xn--h28h.uz/api/v1/products/banner/"
    );
    products.value = response.data.results;
  } catch (err) {
    console.error(err);
    error.value = "Error fetching products";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
