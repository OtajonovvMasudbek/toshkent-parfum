<template>
  <div>
    <Header/>
    <router-view></router-view>
    <index/>
    <Footer/>
    </div>
</template>

<script setup>
import index  from "./Page/index.vue";
import Header from "./components/Leyauts/Header.vue";
import Footer from "./components/Leyauts/Footer.vue";

</script>
