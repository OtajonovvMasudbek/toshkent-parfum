<template>
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-60 backdrop-blur-sm transition duration-300 ease-in-out"
    >
      <div
        class="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md scale-95 transition-all duration-500 ease-in-out hover:scale-100"
      >
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Ro'yxatdan o'tish</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-5">
            <label
              for="name"
              class="block mb-2 text-sm font-semibold text-gray-700"
              >Ism</label
            >
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="surname"
              class="block mb-2 text-sm font-semibold text-gray-700"
              >Familya</label
            >
            <input
              type="text"
              id="surname"
              v-model="formData.surname"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-semibold text-gray-700"
              >Parol</label
            >
            <input
              type="password"
              id="password"
              v-model="formData.password"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-semibold text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg px-4 py-2 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Saqlash
          </button>
        </form>
        <button
          @click="closeModal"
          class="mt-6 text-sm text-red-500 hover:text-red-600 transition duration-200"
        >
          Yopish
        </button>
      </div>
    </div>

    <div
      v-if="showSuccessMessage"
      class="fixed left-0 top-1/2 z-50 transform -translate-y-1/2 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
    >
      Tabriklaymiz, akkaunt ochildi!
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { isOpen, closeModal } = defineProps({
  isOpen: Boolean,
  closeModal: Function,
});

const formData = ref({
  name: "",
  surname: "",
  password: "",
  email: "",
});

const showSuccessMessage = ref(false);

const handleSubmit = () => {
  localStorage.setItem("userData", JSON.stringify(formData.value));

  showSuccessMessage.value = true;

  setTimeout(() => {
    closeModal(); // Use closeModal directly
    showSuccessMessage.value = false;
  }, 1000);
};
</script>

<style scoped>
button:hover {
  transform: scale(1.05);
  transition: transform 0.1s ease-in-out;
}

button:active {
  transform: scale(0.95);
}

input:focus {
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
}

form {
  animation: fadeInUp 0.5s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
