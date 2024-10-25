<template>
  <footer class="bg-gray-50">
    <div class="py-[2px] mb-10 bg-[#f62559]"></div>

    <div
      class="flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-3 bg-slate-200 max-w-[1150px] rounded-xl mx-auto gap-5 md:gap-10"
    >
      <img
        src="https://toshkent-parfum.uz/images/logo.svg"
        alt="Logo"
        class="pink-logo w-32 md:w-auto"
      />

      <div class="flex flex-col sm:flex-row items-center gap-3 md:gap-5">
        <a class="flex items-center gap-2 group" href="tel:+998951455566">
          <i
            class="ri-phone-fill text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
          ></i>
          <p
            class="text-slate-900 font-semibold text-[16px] group-hover:text-[#f62559] transition-colors duration-300"
          >
            998 (95) 145 55 66
          </p>
        </a>
        <a
          href="mailto:tashkentparfume@gmail.com"
          class="group flex items-center gap-2"
        >
          <i
            class="ri-mail-line text-slate-400 text-[20px] group-hover:text-[#f62559] transition-colors duration-300"
          ></i>
          <p
            class="text-slate-900 font-semibold text-[16px] group-hover:text-[#f62559] transition-colors duration-300"
          >
            tashkentparfume@gmail.com
          </p>
        </a>
      </div>

      <div class="flex gap-3">
        <a href="https://apps.apple.com/uz/app/toshkent-parfum/id6458222909">
          <img
            src="/src//assets/svg/iPhone.svg"
            alt="iPhone"
            class="w-24 md:w-auto"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=uz.tashkentparfum.tashkentparfumapp&pli=1"
        >
          <img
            class="max-w-[100px] md:max-w-[131px]"
            src="https://toshkent-parfum.uz/images/googlePlay.png"
            alt="Google Play"
          />
        </a>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:my-8 max-w-[1200px] rounded-xl mx-auto gap-5 md:gap-10"
    >
      <div class="grid lg:grid-cols-3 grid-cols-2 py-5 gap-10 justify-between">
        <ul>
          <li class="text-[20px] font-bold">Мижозлар учун</li>
          <li class="footer-link">Магазин ҳақида</li>
          <li class="footer-link">Янгиликлар</li>
          <li class="footer-link">Тавсиялар</li>
          <li class="footer-link">Махфийлик</li>
          <li class="footer-link">Савол жавоб</li>
          <li class="footer-link">Оммавий оферта</li>
        </ul>
        <ul>
          <li class="text-[20px] font-bold">Мижозлар учун</li>
          <li class="footer-link">Магазин ҳақида</li>
          <li class="footer-link">Янгиликлар</li>
          <li class="footer-link">Тавсиялар</li>
          <li class="footer-link">Махфийлик</li>
          <li class="footer-link">Савол жавоб</li>
        </ul>
        <ul>
          <li class="text-[20px] font-bold">Мижозлар учун</li>
          <li class="footer-link">Магазин ҳақида</li>
          <li class="footer-link">Янгиликлар</li>
          <li class="footer-link">Тавсиялар</li>
          <li class="footer-link">Махфийлик</li>
          <li class="footer-link">Савол жавоб</li>
        </ul>
      </div>

      <div
        class="flex max-w-full lg:max-w-[500px] mb-10 bg-slate-100 px-5 py-5 md:px-10 md:py-10 rounded-xl gap-5 md:gap-10 items-center"
      >
        <div>
          <h2 class="text-slate-900 text-[17px] font-bold">
            Телеграм орқали барча сўнгги янгиликлардан хабардор бўлинг
          </h2>
          <button
            class="font-semibold flex items-center border hover:border-sky-500 transition-all duration-300 gap-2 py-3 px-3 rounded-lg mt-5 bg-sky-100"
          >
            <img src="https://toshkent-parfum.uz/images/telegram.svg" alt="" />
            Телеграм орқали боғланиш
          </button>
        </div>
        <img
          class="w-16 hidden lg:block lg:max-w-[100px] bg-cover"
          src="https://toshkent-parfum.uz/images/Send.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="lg:hidden bg-white w-full grid fixed z-50 grid-cols-5 px-5 gap-5 justify-center items-center bottom-0"
    >
      <router-link to="/">
        <div class="flex justify-center items-center">
          <i
            class="text-2xl text-slate-600 focus:text-[#f62559] transition-all duration-300 hover:text-slate-900 ri-home-3-fill"
            tabindex="0"
          ></i>
        </div>
      </router-link>
      <div class="flex justify-center items-center">
        <i
          class="text-2xl text-slate-600 transition-all focus:text-[#f62559] duration-300 hover:text-slate-900 ri-layout-grid-fill"
          tabindex="0"
        ></i>
      </div>
      <div class="flex justify-center items-center">
        <i
          class="text-2xl text-slate-600 transition-all focus:text-[#f62559] duration-300 hover:text-slate-900 ri-shopping-bag-line"
          tabindex="0"
        ></i>
      </div>
      <router-link to="/basket">
        <div class="flex justify-center items-center">
          <i
            class="text-2xl text-slate-600 transition-all focus:text-[#f62559] duration-300 hover:text-slate-900 ri-shopping-cart-2-line"
            tabindex="0"
          ></i>
        </div>
      </router-link>
      <div class="flex justify-center items-center">
        <i
          class="text-2xl text-slate-600 transition-all focus:text-[#f62559] duration-300 hover:text-slate-900 ri-user-3-fill"
          tabindex="0"
        ></i>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-slate-400 cursor-pointer hover:translate-x-1 text-[16px] hover:text-[#f62559] transition-all duration-300;
}
</style>
