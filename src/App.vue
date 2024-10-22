<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Basket/>
    <index/>
    <Footer/>
    </div>
</template>

<script setup>
import index  from "./Page/index.vue";
import Basket from "./Page/basket.vue";
import Header from "./components/Leyauts/Header.vue";
import Footer from "./components/Leyauts/Footer.vue";

</script>
