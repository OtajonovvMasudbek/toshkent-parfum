<template>
  <div>
    <div class="text-center save cursor-pointer group hover:text-slate-700">
      <i
        class="text-2xl text-slate-500 ri-shopping-basket-2-line transition-colors duration-300 group-hover:text-[#f62559]"
      ></i>
      <p
        class="text-xs text-slate-500 transition-colors duration-300 group-hover:text-[#f62559]"
      >
        Savatcha ({{ cartItems.length }})
      </p>
    </div>
  </div>
</template>
  
  <script setup>
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

console.log(cartItems);
</script>
  