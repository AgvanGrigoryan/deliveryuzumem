<template>
    <swiper
      :effect="'fade'"
      :modules="modules"
      :loop="true"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      }"
      class="mainSlider">
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
    </swiper>
  </template>
  <script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "../assets/mainSlider.scss"
  import { EffectFade,Autoplay } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectFade, Autoplay], 
      };
    },
  };
  </script>
  