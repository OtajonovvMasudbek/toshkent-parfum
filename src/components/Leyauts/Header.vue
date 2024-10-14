<template>
  <div>
    <header>
      <div class="bg-slate-100 w-full">
        <div class="container mx-auto px-10 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-10">
              <a
                href="tel:+998951455566"
                class="relative flex items-center gap-1 group transition-all duration-300 cursor-pointer w-full py-2"
              >
                <i
                  class="ri-phone-fill text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
                ></i>
                <Text text="+998 (95) 145 55 66" />
              </a>
              <a
                href="https://yandex.uz/maps/?ll=25.450000%2C41.578000&z=18"
                class="relative flex items-center group transition-all duration-300 cursor-pointer w-full py-2"
                aria-label="View location on map"
              >
                <i
                  class="ri-road-map-line text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
                ></i>
                <Text text="Yunus Obod,Ahmad donish ko'chasi, 4/80" />
              </a>
            </div>
            <div class="flex items-center gap-1">
              <a
                href=""
                class="relative group transition-all duration-300 cursor-pointer w-full py-2"
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
                class="relative group transition-all duration-300 cursor-pointer w-full py-2"
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
                class="relative group transition-all duration-300 cursor-pointer w-full py-2"
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
      <div class="flex container mx-auto px-10 gap-10 py-3">
        <img
          src="https://toshkent-parfum.uz/images/logo.svg"
          alt="Logo"
          class="pink-logo"
        />
        <div class="flex gap-5">
          <Button />
        </div>
        <Input />
        <div class="text-center group hover:text-slate-700">
          <i
            class="text-2xl text-slate-500 ri-archive-2-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p class="text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]">
            Buyurtmalarim
          </p>
        </div>
        <div class="text-center group hover:text-slate-700">
          <i
            class="text-2xl text-slate-500 ri-shopping-basket-2-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p class="text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]">
            Savatcha
          </p>
        </div>
        <div class="text-center group hover:text-slate-700">
          <i
            class="text-2xl text-slate-500 ri-heart-line transition-colors duration-300 group-hover:text-[#f62559]"
          ></i>
          <p class="text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]">
            Saqlanganlar
          </p>
        </div>
      </div>
    </header>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const showText3 = ref(false);
const showText4 = ref(false);
const showText5 = ref(false);

import Text from "../Common/Header/Text.vue";
import LanguageSelector from "../Common/Header/LanguageSelector.vue";
import Button from "../Common/Header/Button.vue";
import Input from "../Common/Header/Input.vue";
</script>
  
  <style scoped>
.pink-logo {
  filter: invert(50%) sepia(50%) saturate(5000%) hue-rotate(305deg)
    brightness(100%) contrast(101%);
}
</style>
  