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
    
    <Button class="" style="background-color: orange" ><RouterLink to="/product">Product</RouterLink></Button>
    
  </main>
  <Footer/>
</template>
