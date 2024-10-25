<template>
  <div>
    <ul>
      <router-link class="flex items-center justify-center gap-4" to="">
        <li
          class="relative group pr-2 items-center borde border-r-[2px] font-medium text-slate-700 cursor-pointer text-[13px] transition-all duration-300 transform"
          v-for="menu in menus"
          :key="menu.id"
        >
          <span
            class="block p-[1px] transition-all duration-300 transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#f62559] group-hover:shadow-xl"
          >
            {{ menu.title }}
          </span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const menus = ref([]);

const fetchMenus = async () => {
  try {
    const response = await fetch(
      "https://toshkent-parfum.xn--h28h.uz/api/v1/common/header-menu",
    );
    const data = await response.json();
    menus.value = data.results;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
};

onMounted(() => {
  fetchMenus();
});
</script>
