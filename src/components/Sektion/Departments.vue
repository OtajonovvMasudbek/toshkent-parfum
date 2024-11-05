<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
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
          delay: 3000,
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
              <h2
                class="mb-10 hidden lg:block pr-32 text-[30px] font-bold text-white"
              >
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
                  >Mahsulotlar to'g'risida batafsil</span
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
    loading.value = false; // Yuklash tugadi
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #3498db;
  animation: bounce 0.6s infinite alternate;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
}

/* Media query for mobile adjustments */
@media (max-width: 768px) {
  .loader {
    flex-direction: column; /* Stack dots vertically */
  }
  
  .dot {
    width: 10px;  /* Smaller dots for mobile */
    height: 10px; /* Smaller dots for mobile */
    margin: 0 3px; /* Reduced margin */
  }

  .text-red-500 {
    font-size: 14px; /* Adjust error text size for mobile */
  }
}
</style>
