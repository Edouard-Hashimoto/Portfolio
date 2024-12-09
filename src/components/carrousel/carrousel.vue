<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <div class="indicators">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IMG: [
        { src: "Citylight_Mockup_3.webp", alt: "Slide 1" },
        { src: "Free_Key_Chain_Mockup_1 1.webp", alt: "Slide 2" },
        { image: "public/iPhone_Mockup_2.webp", alt: "Slide 3" },
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 400px;
  margin: 0 auto;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
