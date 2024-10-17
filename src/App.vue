<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Departments/>
    <Popular/>
    <Recommendation/>
    <Accessible/>
  </div>
</template>

<script setup>
import Header from "./components/Leyauts/Header.vue";
import Accessible from "./components/Sektion/Accessible.vue";
import Departments from "./components/Sektion/Departments.vue";
import Popular from "./components/Sektion/Popular.vue";
import Recommendation from "./components/Sektion/Recommendation.vue";
</script>
