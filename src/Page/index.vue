<template>
  <main>
    <Departments />
    <Popular />
    <Recommendation />
    <Accessible />
    <Male />
    <Bathroom />
    <TopComment/>
  </main>
</template>

<script setup>
import Departments from "../components/Sektion/Departments.vue";
import Popular from "../components/Sektion/Popular.vue";
import Recommendation from "../components/Sektion/Recommendation.vue";
import Accessible from "../components/Sektion/Accessible.vue";
import Male from "../components/Sektion/Male.vue"
import Bathroom from "../components/Sektion/Bathroom.vue"
import TopComment from "@/components/Sektion/topComment.vue";
</script>