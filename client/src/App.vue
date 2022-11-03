<template>
  <Navbar />
  <div class="main_block">
    <router-view v-slot="{ Component }">
      <transition 
       enter-active-class="animate__animated animate__fadeInLeft animate__faster"
       leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
       mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {Navbar},
}
</script>

<style lang="scss">
body{
  font-family: $bodyFont;
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  .container{
    max-width: 90%;
    margin: auto;
  }
  .main_block{
    position: relative;
    top: 150px;
  }
  a{
    text-decoration: none;
  }
}

</style>
