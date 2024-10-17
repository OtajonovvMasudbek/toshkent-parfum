<template>
    <div class="flex flex-wrap justify-center gap-4 overflow-hidden">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="moving-card bg-slate-100 px-4 py-4 rounded-xl m-3 overflow-hidden animate-move max-w-[300px]" 
      >
        <img :src="card.icon" :alt="card.alt" class="card-image max-h-[60px]" />
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";

const cards = ref([]);
const loading = ref(true);
const error = ref(false);

const fetchCards = async () => {
  try {
    const response = await fetch(
      "https://toshkent-parfum.uz/api/v1/products/manufacture/"
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
  
  <style>
@keyframes move {
  0% {
    transform: translateX(100%); /* O'ngdan chapga harakat */
  }
  100% {
    transform: translateX(-100%); /* Chapdan o'ngga harakat */
  }
}

.animate-move {
  animation: move 10s linear infinite; /* 10 soniya davomida tez harakat */
}

.moving-card {
  display: inline-block;
}
</style>
  