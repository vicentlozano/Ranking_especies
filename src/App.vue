<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Amanecer from '@/assets/amanecer.jpg'
import FondoPescadores from '@/assets/FondoPescadores.jpg'
import { onMounted, ref } from 'vue'
const images= [Amanecer,FondoPescadores]
const currentImageIndex = ref(0)
onMounted(()=>{
  setInterval(()=>{
    currentImageIndex.value = (currentImageIndex.value + 1 ) % images.length}, 10000)
  })

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" :src="images[currentImageIndex]" width="100%" height="325px" />

    <div class="wrapper">
      <HelloWorld msg="Ranking 2024" />

      <nav>
        <RouterLink to="/">1</RouterLink>
        <RouterLink to="/about">2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 100%;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
