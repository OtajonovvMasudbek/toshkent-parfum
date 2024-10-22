import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [] // Savatcha bo'sh holatda
  },
  mutations: {
    // Mahsulotni savatchaga qo'shish
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++; // Agar mahsulot savatchada bo'lsa, miqdorini oshiramiz
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Yangi mahsulotni qo'shamiz va quantity 1 bo'ladi
      }
    },
    // Mahsulotni savatchadan olib tashlash
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId); // Mahsulotni savatchadan filter orqali olib tashlaymiz
    }
  },
  actions: {
    // Mahsulotni qo'shish bo'yicha action
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    // Mahsulotni savatchadan olib tashlash bo'yicha action
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    }
  },
  getters: {
    // Savatchadagi mahsulotlarni qaytaruvchi getter
    cartItems: (state) => state.cart,
    // Umumiy mahsulotlar miqdorini hisoblaydigan getter
    cartCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0)
  }
});
