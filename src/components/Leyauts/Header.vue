<template>
  <header>
    <div class="w-full lg:bg-slate-100">
      <div class="container px-10 py-3 mx-auto">
        <div class="hidden lg:flex items-center justify-between">
          <div class="flex items-center gap-10">
            <a
              href="tel:+998951455566"
              class="relative flex items-center w-full gap-1 py-2 transition-all duration-300 cursor-pointer group"
            >
              <i
                class="ri-phone-fill text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
              ></i>
              <Text text="+998 (95) 145 55 66" />
            </a>
            <a
              href="https://yandex.uz/maps/?ll=25.450000%2C41.578000&z=18"
              class="relative flex items-center w-full py-2 transition-all duration-300 cursor-pointer group"
              aria-label="View location on map"
            >
              <i
                class="ri-road-map-line text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
              ></i>
              <Text text="Yunus Obod, Ahmad donish ko'chasi, 4/80" />
            </a>
          </div>
          <div class="flex items-center gap-1">
            <a
              href=""
              class="relative w-full py-2 transition-all duration-300 cursor-pointer group"
              aria-label="Facebook"
              @mouseover="showText3 = true"
              @mouseleave="showText3 = false"
            >
              <i
                class="ri-facebook-box-fill text-slate-400 text-[25px] group-hover:text-[#f62559] transition-colors duration-300"
              ></i>
              <div
                v-if="showText3"
                class="absolute left-1/2 transform -translate-x-1/2 mt-1 text-white text-[12px] bg-zinc-500 px-[2px] py-[1px] rounded"
              >
                Facebook
              </div>
            </a>
            <a
              href=""
              class="relative w-full py-2 transition-all duration-300 cursor-pointer group"
              aria-label="Instagram"
              @mouseover="showText4 = true"
              @mouseleave="showText4 = false"
            >
              <i
                class="ri-instagram-fill text-slate-400 text-[25px] group-hover:text-[#f62559] transition-colors duration-300"
              ></i>
              <div
                v-if="showText4"
                class="absolute left-1/2 transform -translate-x-1/2 mt-1 text-white text-[12px] bg-zinc-500 px-[2px] py-[1px] rounded"
              >
                Instagram
              </div>
            </a>
            <a
              href=""
              class="relative w-full py-2 transition-all duration-300 cursor-pointer group"
              aria-label="Telegram"
              @mouseover="showText5 = true"
              @mouseleave="showText5 = false"
            >
              <i
                class="ri-telegram-2-fill text-slate-400 text-[25px] group-hover:text-[#f62559] transition-colors duration-300"
              ></i>
              <div
                v-if="showText5"
                class="absolute left-1/2 transform -translate-x-1/2 mt-1 text-white text-[12px] bg-zinc-500 px-[2px] py-[1px] shadow-md rounded"
              >
                Telegram
              </div>
            </a>
            <div>
              <language-selector />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container flex flex-wrap lg:justify-between max-w-[1200px] gap-4 px-2 lg:px-7 py-3 mx-auto items-center"
    >
      <div class="flex items-center gap-3">
        <router-link to="/">
          <img
            src="https://toshkent-parfum.uz/images/logo.svg"
            alt="Logo"
            class="pink-logo lg:block"
          />
        </router-link>
      </div>
      <div
        :class="[
          'w-full lg:relative lg:w-[450px] order-3 lg:order-none z-50 transition-transform duration-500 ease-in-out',
          {
            'fixed top-0 left-0 w-full px-4 py-3 z-50 bg-white shadow-md transform translate-y-0':
              isFixedOnMobile,
            'transform translate-y-[-20%]': !isFixedOnMobile,
          },
        ]"
        @scroll="handleScroll"
      >
        <Input />
      </div>

      <div class="flex  lg:gap-7">
        <router-link
          to="buyurtmalarim"
          class="text-center cursor-pointer group hover:text-slate-700"
        >
          <i
            class="text-2xl text-slate-500 ri-archive-2-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p
            class="hidden lg:block text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]"
          >
            Buyurtmalarim
          </p>
        </router-link>
        <router-link
          to="/basket"
          class="text-center save cursor-pointer group hover:text-slate-700"
        >
          <i
            class="text-2xl text-slate-500 ri-shopping-basket-2-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p
            class="hidden lg:block text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]"
          >
            Savatcha
          </p>
        </router-link>
        <div class="text-center cursor-pointer group hover:text-slate-700">
          <i
            class="text-2xl text-slate-500 ri-heart-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p
            class="hidden lg:block text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]"
          >
            Saqlanganlar
          </p>
        </div>
      </div>

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

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const isFixedOnMobile = ref(false);
const handleScroll = () => {
  if (window.innerWidth < 1024) {
    isFixedOnMobile.value = window.scrollY > 0;
  } else {
    isFixedOnMobile.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

import Text from "../Common/Header/Text.vue";
import LanguageSelector from "../Common/Header/LanguageSelector.vue";
import Button from "../Common/Header/Button.vue";
import Input from "../Common/Header/Input.vue";
import Menu from "../Common/Header/Menu.vue";
import Access from "../Common/Header/Accsess.vue";
import Modal from "../Common/Header/Modal.vue";
</script>

<style scoped>
.pink-logo {
  filter: invert(50%) sepia(50%) saturate(5000%) hue-rotate(305deg)
    brightness(100%) contrast(101%);
}
</style>
