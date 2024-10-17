<template>
  <div class="relative w-full group">
    <button
      @click="toggleDropdown"
      class="bg-gradient-to-l from-[#494949] duration-300 to-[#070707] px-3 transition-colors hover:bg-gradient-to-r hover:from-[#c8c7c7] hover:to-[#c8c7c7] py-3 rounded-md text-sm flex items-center space-x-2"
    >
      <i
        :class="[
          'transition-transform duration-300 transform text-[25px] text-white',
          showDropdown ? 'rotate-180 scale-125' : 'rotate-0 scale-100',
        ]"
      >
        <i :class="showDropdown ? 'ri-close-circle-line' : 'ri-menu-line'"></i>
      </i>
      <span class="font-semibold text-white hover:text-b">Каталог</span>
    </button>

    <transition name="fade-slide">
      <div
        v-if="showDropdown"
        class="absolute left-0 z-50 w-full p-6 bg-white shadow-lg top-full"
      >
        <div class="grid grid-cols-4 gap-8">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="category-column"
          >
            <h3 class="mb-3 text-lg font-bold">{{ category.title }}</h3>
            <ul>
              <li
                v-for="(item, i) in category.items"
                :key="i"
                class="text-slate-400 text-[15px] transition-colors duration-300 group-hover:text-[#f62559]"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const categories = ref([]);
</script>
  
  <style scoped>
.category-column {
  min-width: 200px;
}

button {
  cursor: pointer;
}

.category-column ul {
  list-style: none;
  padding: 0;
}

.category-column li {
  cursor: pointer;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.rotate-0 {
  transform: rotate(0deg);
}

.rotate-180 {
  transform: rotate(180deg);
}

.scale-100 {
  transform: scale(1);
}

.scale-125 {
  transform: scale(1.25);
}
</style>
  