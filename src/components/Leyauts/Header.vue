<template>
  <header class="w-full lg:bg-slate-100">
    <div class="container px-10 py-3 mx-auto">
      <!-- Yuqori qism: telefon va manzil -->
      <div class="hidden lg:flex items-center justify-between">
        <div class="flex items-center gap-10">
          <a href="tel:+998951455566" class="flex items-center gap-1 py-2 group">
            <i class="ri-phone-fill text-slate-400 text-[20px] group-hover:text-[#f62559]"></i>
            <Text text="+998 (95) 145 55 66" />
          </a>
          <a
            href="https://yandex.uz/maps/?ll=25.450000%2C41.578000&z=18"
            class="flex items-center gap-1 py-2 group"
            aria-label="View location on map"
          >
            <i class="ri-road-map-line text-slate-400 text-[20px] group-hover:text-[#f62559]"></i>
            <Text text="Yunus Obod, Ahmad donish ko'chasi, 4/80" />
          </a>
        </div>

        <!-- Ijtimoiy tarmoqlar -->
        <div class="flex items-center gap-4">
          <a href="" class="group" aria-label="Facebook">
            <i class="ri-facebook-box-fill text-slate-400 text-[25px] group-hover:text-[#f62559]"></i>
          </a>
          <a href="" class="group" aria-label="Instagram">
            <i class="ri-instagram-fill text-slate-400 text-[25px] group-hover:text-[#f62559]"></i>
          </a>
          <a href="" class="group" aria-label="Telegram">
            <i class="ri-telegram-2-fill text-slate-400 text-[25px] group-hover:text-[#f62559]"></i>
          </a>
          <language-selector />
        </div>
      </div>
    </div>

    <!-- Quyidagi qism: Logo, qidiruv va foydalanuvchi funksiyalari -->
    <div class="container flex flex-wrap lg:justify-between max-w-[1200px] gap-4 px-2 lg:px-7 py-3 mx-auto items-center">
      <!-- Logo -->
      <router-link to="/">
        <img src="https://toshkent-parfum.uz/images/logo.svg" alt="Logo" class="pink-logo lg:block" />
      </router-link>

      <!-- Qidiruv -->
      <div
        :class="[
          'w-full lg:relative lg:w-[450px] z-50 transition-transform duration-500 ease-in-out',
          isFixedOnMobile ? 'fixed top-0 left-0 w-full px-4 py-3 bg-white shadow-md' : ''
        ]"
      >
        <Input />
      </div>

      <!-- Foydalanuvchi uchun tugmalar -->
      <div class="flex lg:gap-7">
        <router-link to="/buyurtmalarim" class="text-center group">
          <i class="text-2xl text-slate-500 ri-archive-2-line group-hover:text-[#f62559]"></i>
          <p class="hidden lg:block text-xs text-slate-500 group-hover:text-[#f62559]">Buyurtmalarim</p>
        </router-link>
        <router-link to="/basket" class="text-center group">
          <i class="text-2xl text-slate-500 ri-shopping-basket-2-line group-hover:text-[#f62559]"></i>
          <p class="hidden lg:block text-xs text-slate-500 group-hover:text-[#f62559]">Savatcha</p>
        </router-link>
        <div class="text-center group">
          <i class="text-2xl text-slate-500 ri-heart-line group-hover:text-[#f62559]"></i>
          <p class="hidden lg:block text-xs text-slate-500 group-hover:text-[#f62559]">Saqlanganlar</p>
        </div>
      </div>

      <!-- Kirish modal -->
      <Access @click="openModal" />
      <Modal v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
    </div>

    <div class="hidden lg:block px-4">
      <Menu />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Modalni boshqarish
const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};

// Mobil qidiruvni boshqarish
const isFixedOnMobile = ref(false);
const handleScroll = () => {
  isFixedOnMobile.value = window.innerWidth < 1024 && window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Importlar
import Text from "../Common/Header/Text.vue";
import LanguageSelector from "../Common/Header/LanguageSelector.vue";
import Input from "../Common/Header/Input.vue";
import Menu from "../Common/Header/Menu.vue";
import Access from "../Common/Header/Accsess.vue";
import Modal from "../Common/Header/Modal.vue";
</script>

<style scoped>
.pink-logo {
  filter: invert(50%) sepia(50%) saturate(5000%) hue-rotate(305deg) brightness(100%) contrast(101%);
}
</style>
