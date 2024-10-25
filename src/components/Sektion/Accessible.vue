<template>
  <div>
    <div class="flex justify-center gap-4 overflow-hidden moving-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="moving-card bg-slate-100 px-4 py-4 rounded-xl m-3 overflow-hidden max-w-[200px] flex justify-center items-center"
      >
        <img
          :src="card.icon"
          :alt="card.alt"
          class="card-image bg-cover max-h-[60px]"
        />
      </div>
    </div>
    <div class="flex justify-center gap-4 overflow-hidden moving-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="moving-card bg-slate-100 px-4 py-4 rounded-xl m-3 overflow-hidden max-w-[210px] flex justify-center items-center"
      >
        <img :src="card.icon" :alt="card.alt" class="card-image max-h-[60px]" />
      </div>
    </div>
    <div class="flex justify-center gap-4 overflow-hidden moving-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="moving-card bg-slate-100 px-4 py-4 rounded-xl m-3 overflow-hidden max-w-[300px] flex justify-center items-center"
      >
        <img :src="card.icon" :alt="card.alt" class="card-image max-h-[60px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cards = ref([]);
const error = ref(false);

const fetchCards = async () => {
  try {
    const response = await fetch(
      "https://toshkent-parfum.uz/api/v1/products/manufacture/",
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    cards.value = data.results;
  } catch {
    error.value = true;
  }
};

onMounted(fetchCards);
</script>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.moving-container {
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.moving-card {
  display: inline-block;
  animation: slide 10s linear infinite;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.moving-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
