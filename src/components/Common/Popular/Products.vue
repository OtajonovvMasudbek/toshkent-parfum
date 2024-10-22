<template>
  <div
    class="relative w-full overflow-x-auto scroll-smooth whitespace-nowrap py-4 px-2"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
  >
    <div
      v-for="(story, index) in stories"
      :key="index"
      class="inline-block min-w-[150px] cursor-pointer max-w-[100px] m-2 p-4 rounded-lg border border-spacing-1"
      @click="openModal(story, index)"
    >
      <img
        :src="story.image_src.default"
        alt="Story"
        class="w-full h-auto object-cover rounded-lg transition-all duration-500 -hover:translate-x-1 -hover:translate-y-1 hover:translate-x-1 hover:translate-y-1"
      />
      <h3 class="mt-2 text-lg font-semibold text-center">{{ story.title }}</h3>
    </div>
  </div>

  <div
    v-if="modalVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="rounded-lg w-[300px] max-w-full shadow-lg relative">
      <div class="absolute top-0 left-0 h-[8px] w-full">
        <div
          class="h-full rounded-xl Item bg-slate-400 transition-all duration-[5s] ease-linear"
          :style="{ width: progressBarWidth + '%' }"
        ></div>
      </div>

      <button
        @click="closeModal"
        class="text-white hover:text-[#f62559] transition-all duration-[0.3s] py-2 rounded flex items-center"
      >
        <i class="text-3xl absolute Icon ri-close-circle-line ml-2"></i>
      </button>
      <h2 class="text-xl font-bold">{{ selectedStory.title }}</h2>
      <img
        :src="selectedStory.image_src.default"
        alt="Story"
        class="lg:w-full w-[500px] h-auto object-cover rounded-lg"
      />
      <p class="mt-2">{{ selectedStory.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const stories = ref([]);
const modalVisible = ref(false);
const selectedStory = ref({});
const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const progressBarWidth = ref(0);

let timer = null;

const fetchStories = async () => {
  try {
    const response = await axios.get(
      "https://toshkent-parfum.xn--h28h.uz/api/v1/common/story/"
    );
    stories.value = response.data.results.map((story) => ({
      image_src: story.image_src,
      title: story.title,
      description: story.description,
    }));
  } catch (error) {
    console.error("Xato:", error);
  }
};

const openModal = (story, index) => {
  selectedStory.value = story;
  modalVisible.value = true;
  currentIndex.value = index;
  startStoryTimer();
  resetProgressBar();
  document.body.style.overflow = "hidden"; 
};

const startDrag = (event) => {
  isDragging.value = true;
  startX.value = event.pageX;
  scrollLeft.value = event.currentTarget.scrollLeft;
};

const onDrag = (event) => {
  if (!isDragging.value) return;
  const x = event.pageX;
  const walk = (x - startX.value) * 2;
  event.currentTarget.scrollLeft = scrollLeft.value - walk;
};

const endDrag = () => {
  isDragging.value = false;
};

const startStoryTimer = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    nextStory();
  }, 5000);
};

const nextStory = () => {
  if (currentIndex.value < stories.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  selectedStory.value = stories.value[currentIndex.value];
  resetProgressBar();
  startStoryTimer();
};

const closeModal = () => {
  modalVisible.value = false;
  progressBarWidth.value = 0;
  clearTimeout(timer);
  document.body.style.overflow = ""; 
};

const resetProgressBar = () => {
  progressBarWidth.value = 0;
  setTimeout(() => {
    progressBarWidth.value = 100;
  }, 100);
};

onMounted(() => {
  fetchStories();
});
</script>

<style scoped>
.whitespace-nowrap {
  white-space: nowrap;
}
.overflow-x-auto {
  overflow-x: auto;
}
.scroll-smooth {
  scroll-behavior: smooth;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
