<template>
  <div>
    <h2>Savatchangiz</h2>
    <div v-if="cartItems.length === 0">Savatchangiz bo'sh!</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <h3>{{ item.title }} ({{ item.quantity }})</h3>
        <button @click="removeFromCart(item.id)">O'chirish</button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cartItems = computed(() => store.getters.cartItems);

const removeFromCart = (productId) => {
  store.dispatch("removeFromCart", productId);
};
</script>
  
  <style scoped>
.cart-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
  