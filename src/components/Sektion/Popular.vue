<template>
  <div class="bg-white/10">
    <div class="max-w-[1200px] mx-auto">
      <h2
        class="text-slate-800 ml-2 pt-14 pb-5 text-[25px] lg:text-[32px] font-bold"
      >
        Оммабоп бўлимлар
      </h2>
      <div class="grid grid-cols-2 px-2 lg:grid-cols-3 gap-7">
        <Card />
      </div>
      <div>
        <h2 class="lg:text-[33px] ml-2 text-[25px] py-5 font-semibold">
          Актуал маҳсулотлар
        </h2>
        <Products />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../Common/Popular/Card.vue";
import Products from "../Common/Popular/Products.vue";
</script>
