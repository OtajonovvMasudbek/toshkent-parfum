<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Leyauts/Header.vue";
import Footer from "./components/Leyauts/Footer.vue";
</script>
