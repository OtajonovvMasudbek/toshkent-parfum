<template>
  <div>
    <p
      class="text-slate-400 text-[13px] transition-colors duration-300 font-sans group-hover:text-[#f62559] truncate"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
