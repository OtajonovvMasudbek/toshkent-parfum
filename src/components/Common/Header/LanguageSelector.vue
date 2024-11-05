<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click="toggleDropdown"
        type="button"
        class="inline-flex justify-center text-slate-900 w-full rounded-xl border border-gray-300 shadow-sm px-7 py-3 text-sm font-bold outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f62559]"
        id="menu-button"
        :aria-expanded="dropdownOpen ? 'true' : 'false'"
        aria-haspopup="true"
      >
        <img :src="selectedLanguage.flag" alt="" class="h-5 z-50 mr-2 w-7" />
        {{ selectedLanguage.name }}
        <i
          :class="[
            'ri-arrow-down-s-line',
            'pl-2',
            { 'rotate-180': dropdownOpen },
          ]"
          class="transition-transform duration-200"
        ></i>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-2 text-black origin-top-right border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1 z-50" role="none">
          <button
            v-for="language in languages"
            :key="language.code"
            @click="selectLanguage(language)"
            class="px-4 py-2 text-sm text-center text-black"
            role="menuitem"
            tabindex="-1"
          >
            <img
              :src="language.flag"
              alt=""
              class="inline h-5 mr-2 bg-cover w-7"
            />
            {{ language.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const dropdownOpen = ref(false);
const languages = ref<Language[]>([
  {
    code: "ru",
    name: "RU",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png",
  },
  {
    code: "uz",
    name: "O’Z",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Uzbekistan.png",
  },
]);
const selectedLanguage = ref<Language>(languages.value[0]);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectLanguage = (language: Language) => {
  selectedLanguage.value = language;
  dropdownOpen.value = false;
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
