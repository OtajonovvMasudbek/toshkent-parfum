<template>
  <div class="">
    <div class="text-left pt-4">
      <router-link
        class="px-10 text-[17px] font-bold transition-all duration-300 hover:text-slate-900 text-neutral-700 pt-3"
        to="/"
      >
        Асосий  <span class="font-normal text-neutral-500">/ Саватча</span>
      </router-link>
      <h2 class="px-10 py-3 text-3xl font-bold text-neutral-800">Саватча</h2>
    </div>
    <div class="lg:flex justify-between mx-5">
      <div>
        <div
          class="bg-slate-100 lg:px-10 shadow-sm rounded-xl py-5 lg:py-10 lg:mx-5 my-5"
          v-if="cartItems.length === 0"
        >
          <div class="flex flex-col  items-center">
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
          class="bg-slate-100 max-w-[850px] shadow-sm rounded-xl py-5 lg:py-10 lg:m-5"
          v-else
        >
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <div
              v-if="item.images.length > 0"
              class="mb-4 flex justify-between group gap-3 mx-1 lg:mx-5 pb-4 border-stone-300 border-b-[1px]"
            >
              <img
                :src="item.images[0].default"
                alt="product image"
                class="lg:w-20 w-14  border border-spacing-1 rounded-lg bg-cover object-cover"
              />
              <h3
                class="lg:text-lg text-[10px]  text-left font-bold cursor-pointer text-gray-800 transition-all duration-300 group-hover:text-[#f62559] lg:max-w-[300px]"
              >
                {{ item.title }} 
              </h3>
              <div class="flex lg:gap-8 border-stone-300 lg:pl-5 pl-3 border-l-[1px]">
                <div>
                  <p class="font-bold lg:text-center  text-left text-[10px] lg:text-[16px]">
                    {{ formatPrice(item.price * item.quantity) }} UZS
                  </p>
                  <div class="flex items-center py-4">
                    <button
                      @click="decreaseQuantity(item)"
                      class="bg-slate-200 group lg:px-3 lg:py-2 py-1 px-[3px] rounded-l-lg transition-all duration-300 border hover:border-red-500"
                    >
                      <i class="transition-all duration-300 text-lg text-red-500 ri-indeterminate-circle-line"></i>
                    </button>
                    <span
                      class="mx-2 bg-slate-200 lg:px-3 px-1 py-[5px] lg:py-[10px] font-bold text-slate-900 border"
                      >{{ item.quantity }}</span
                    >
                    <button
                      @click="increaseQuantity(item)"
                      class="bg-slate-200 lg:px-3 lg:py-[9px] px-1 py-[5px] transition-all duration-300 border hover:border-green-500 rounded-r-lg"
                    >
                      <i class="ri-add-circle-line text-green-500"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <button @click="removeFromCart(item.id)" class="">
                    <i
                      class="text-slate-400  lg:text-xl bg-slate-200 rounded-lg lg:p-2 p-1 transition-all duration-300 hover:text-[#f62559] ri-delete-bin-6-line"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4 px-5 flex flex-col justify-between  max-h-[400px] my-5 rounded-xl bg-slate-100">
        <div class="flex items-center justify-between lg:gap-10 border-b-[2px] pb-3"> 
          <h3 class="lg:text-xl text-lg text-neutral-500 font-bold">
            Тўланадиган <br />
            нарх:
          </h3>
          <p class="lg:text-2xl text-lg font-bold">
            {{ formatPrice(totalPrice) }} <span class=" lg:text-2xl text-lg  font-semibold text-zinc-400">UZS</span>
          </p>
        </div>
        <div class="flex items-center justify-between border-b-[2px] py-3"> 
          <h3 class="text-xl text-neutral-800 font-bold">
            Умумий нарх:
          </h3>
          <p class="text-lg  font-bold">
            {{ formatPrice(totalPrice) }} <span class="text-sm  font-semibold text-zinc-400">UZS</span>
          </p>
        </div>
        <div class="flex items-center justify-between border-b-[2px] py-3"> 
          <h3 class="text-xl text-neutral-800 font-bold">
            Чегирма:
          </h3>
          <p class="text-lg  font-bold">
            0,00 <span class="text-sm  font-semibold text-zinc-400">UZS</span>
          </p>
        </div>
        <div class="flex items-center justify-between border-b-[2px] py-3"> 
          <h3 class="text-xl text-neutral-800 font-bold">
            Етказиб бериш усули:
          </h3>
          <p class="text-lg  font-bold">
            0,00 <span class="text-sm  font-semibold text-zinc-400">UZS</span>
          </p>
        </div>
        <button class="w-full bg-[#f62559] transition-all duration-300  hover:bg-red-500 py-2 rounded-lg text-white font-semibold  my-2">
          Тўловга ўтинг
        </button>
      </div>
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
  