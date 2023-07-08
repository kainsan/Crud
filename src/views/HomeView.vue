<script setup >
import index from "@/components/product/index.vue"
import { RouterLink, RouterView } from 'vue-router'
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>
  
<template>
  <Header/>
  <main>
    <RouterView></RouterView>
    <Button class="pi pi-folder mr-2 mb-2 md:mb-0" style="color: red" ><RouterLink to="/product">Product</RouterLink></Button>
  </main>
  <Footer/>
</template>
