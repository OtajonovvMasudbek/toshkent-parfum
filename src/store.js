import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [] 
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++; 
      } else {
        state.cart.push({ ...product, quantity: 1 }); 
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId); 
    },
    UPDATE_CART_ITEM_QUANTITY(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId);
      if (product && quantity > 0) {
        product.quantity = quantity;
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateCartItemQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_CART_ITEM_QUANTITY', { productId, quantity });
    }
  },
  getters: {
    cartItems: (state) => state.cart,
    cartCount: (state) => state.cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }
});
