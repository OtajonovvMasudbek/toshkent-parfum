<template>
  <div class="relative inline-block text-left">
    <div>
      <button @click="toggleDropdown" type="button" class="inline-flex justify-center text-slate-900 w-full rounded-xl border border-gray-300 shadow-sm px-7 py-3 text-sm font-bold outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f62559]" id="menu-button" aria-expanded="dropdownOpen" aria-haspopup="true">
        <img :src="selectedLanguage.flag" alt="" class="w-7 h-5 mr-2">
        {{ selectedLanguage.name }}
        <i :class="['ri-arrow-down-s-line pl-2 iconk', { 'rotate-180': dropdownOpen }]" class="transition-transform duration-200"></i>
      </button>
    </div>

    <transition name="fade">
      <div v-if="dropdownOpen" class="origin-top-right absolute right-0 mt-2 text-black border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <button v-for="language in languages" :key="language.code" @click="selectLanguage(language)" class="text-black text-centerlock px-4 py-2 text-sm" role="menuitem" tabindex="-1">
            <img :src="language.flag" alt="" class="w-7 h-5 mr-2 inline bg-cover">
            {{ language.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dropdownOpen = ref(false);
const languages = ref([
  { code: 'ru', name: 'RU', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png' },
  { code: 'uz', name: 'O’Z', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Uzbekistan.png' },
]);
const selectedLanguage = ref(languages.value[0]);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  dropdownOpen.value = false;
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.z-50 {
  z-index: 50;
}
</style>
