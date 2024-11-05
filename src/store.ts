import { createStore } from "vuex";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

interface State {
  cart: Product[];
}

const store = createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product: Product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity!++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId: number) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    UPDATE_CART_ITEM_QUANTITY(
      state,
      { productId, quantity }: { productId: number; quantity: number },
    ) {
      const product = state.cart.find((item) => item.id === productId);
      if (product && quantity > 0) {
        product.quantity = quantity;
      }
    },
  },
  actions: {
    addToCart({ commit }, product: Product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, productId: number) {
      commit("REMOVE_FROM_CART", productId);
    },
    updateCartItemQuantity(
      { commit },
      { productId, quantity }: { productId: number; quantity: number },
    ) {
      commit("UPDATE_CART_ITEM_QUANTITY", { productId, quantity });
    },
  },
  getters: {
    cartItems: (state) => state.cart,
    cartCount: (state) =>
      state.cart.reduce((total, item) => total + (item.quantity || 0), 0),
    cartTotalPrice: (state) =>
      state.cart.reduce(
        (total, item) => total + item.price * (item.quantity || 0),
        0,
      ),
  },
});

export default store;
