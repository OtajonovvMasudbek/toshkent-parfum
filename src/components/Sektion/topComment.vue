<template>
  <div class="overflow-hidden">
    <h2 class="text-[33px] font-semibold pl-6 mb-4">Шарҳлар</h2>
    <div
      v-if="topComments.length"
      class="flex justify-center gap-4 cursor-pointer my-5 whitespace-nowrap animate-slide"
    >
      <div
        v-for="(comment, index) in topComments"
        :key="comment.id"
        class="max-w-[500px] w-full max-h-[200px] md:w-1/2 lg:w-1/3 rounded-xl shadow-lg px-4 transition-opacity duration-500 h-[250px] flex flex-col justify-between"
      >
        <div class="flex gap-4 mb-4">
          <img
            v-if="comment.product.images.length"
            class="max-w-[90px]"
            :src="comment.product.images[0].default"
            :alt="comment.product.name"
          />
          <div class="flex-1">
            <h2 class="text-[12px] font-bold">
              {{ comment.product.title }}
            </h2>
            <p class="comment text-[12px]">
              {{ comment.comment }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="py-3 pr-3 flex items-center gap-5">
            <i
              class="text-white text-[25px] px-2 py-1 rounded-full bg-slate-300 ri-user-fill"
            ></i>
            <div>
              <p class="font-bold text-slate-900">
                {{ comment.user.full_name }}
              </p>
              <p>{{ formatDate(comment.created_at) }}</p>
            </div>
          </div>

          <button
            class="py-1 px-3 rounded-sm translate-y-2 text-xl opacity-0 border group-hover:text-[#f62559] border-spacing-1 group-hover:border-[#f62559] group-hover:opacity-100 transition-all duration-300"
          >
            <i class="ri-share-forward-fill"></i>
          </button>
        </div>
      </div>
    </div>

    <p v-else>No comments found.</p>
  </div>
</template>
        
  <script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const topComments = ref([]);

const fetchTopComments = async () => {
  try {
    const response = await axios.get(
      "https://toshkent-parfum.uz/api/v1/products/top-comments/"
    );
    topComments.value = response.data.results;
  } catch (error) {
    console.error("Error fetching top comments:", error);
  }
};

onMounted(fetchTopComments);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>
        
  <style scoped>
.comment {
  color: #555;
}

.animate-slide {
  display: flex;
  animation: slide 12s linear infinite;
}

@keyframes slide {
  0%,
  10% {
    transform: translateX(0);
  }
  20%,
  30% {
    transform: translateX(-33.33%);
  }
  40%,
  50% {
    transform: translateX(-33.33%);
  }
  60%,
  70% {
    transform: translateX(-66.66%);
  }
  80%,
  90% {
    transform: translateX(-66.66%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .animate-slide {
    width: calc(100% + 40px);
  }
}
</style>
  