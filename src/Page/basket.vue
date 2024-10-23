<template>
  <div class="">
    <div class="text-left pt-4">
      <router-link
        class="px-10 text-[17px] font-bold transition-all duration-300 hover:text-slate-900 text-neutral-700 pt-3"
        to="/"
      >
        Асосий / <span class="font-normal text-neutral-500">Саватча</span>
      </router-link>
      <h2 class="px-10 py-3 text-3xl font-bold text-neutral-800">Саватча</h2>
    </div>

    <div
      class="bg-slate-100 max-w-[850px] shadow-sm rounded-xl py-10 m-10"
      v-if="cartItems.length === 0"
    >
      <div class="flex flex-col items-center">
        <img
          class="mb-4"
          src="https://toshkent-parfum.uz/images/no-data/products.svg"
          alt="products"
        />
        <div class="text-center">
          <h2 class="text-2xl font-bold">Бўшку 😕</h2>
          <p class="text-lg font-semibold">
            Сиз ҳали саватчага ҳеч қандай маҳсулотни қўшмадингиз
          </p>
        </div>
      </div>
    </div>

    <div
      class="bg-slate-100 max-w-[850px] shadow-sm rounded-xl py-10 m-5"
      v-else
    >
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div
          v-if="item.images.length > 0"
          class="mb-4 flex justify-between gap-3 mx-5 pb-4 border-stone-300 border-b-[1px]"
        >
          <img
            :src="item.images[0].default"
            alt="product image"
            class="w-20 h-auto border border-spacing-1 rounded-xl bg-cover object-cover"
          />
          <h3 class="text-lg font-semibold max-w-[300px]">
            {{ item.title }} ({{ item.quantity }})
          </h3>
          <div class="flex  gap-8">
            <div>
              <p class="font-bold text-[20px]">
                {{ formatPrice(item.price * item.quantity) }} UZS
              </p>
              <div class="flex items-center py-4 ">
                <button
                  @click="decreaseQuantity(item)"
                  class="bg-slate-200 group p-2 rounded-l-lg transition-all duration-300 border hover:border-red-500"
                >
                  <i class=" transition-all duration-300  text-red-500 ri-indeterminate-circle-line"></i>
                </button>
                <span class="mx-2 bg-slate-200 p-2 font-bold text-slate-900 border">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item)"
                  class="bg-slate-200 p-2 transition-all duration-300 border hover:border-green-500 rounded-r-lg"
                >
                  <i class="ri-add-circle-line text-green-500"></i>
                </button>
              </div>
            </div>
            <div>
              <button @click="removeFromCart(item.id)" class="">
                <i
                  class="text-slate-600 text-2xl bg-slate-200 rounded-lg p-2 transition-all duration-300 hover:text-[#f62559] ri-delete-bin-6-line"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="flex justify-between mx-5 pt-4 border-stone-300">
        <h3 class="text-xl font-bold">Жами:</h3>
        <p class="text-xl font-semibold">{{ formatPrice(totalPrice) }} so'm</p>
      </div>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const cartItems = computed(() => store.getters.cartItems);

const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const formatPrice = (price) => {
  return price.toLocaleString("ru-RU");
};

const removeFromCart = (productId) => {
  store.dispatch("removeFromCart", productId);
};

const increaseQuantity = (item) => {
  store.dispatch("updateCartItemQuantity", {
    productId: item.id,
    quantity: item.quantity + 1,
  });
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    store.dispatch("updateCartItemQuantity", {
      productId: item.id,
      quantity: item.quantity - 1,
    });
  }
};
</script>
  
  <style scoped>
.cart-item {
  margin-bottom: 20px;
}
</style>
  