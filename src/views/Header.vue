<template>
  <div
    class="surface-overlay px-3 sm:px-7 flex flex-wrap align-items-stretch justify-content-between relative lg:border-bottom-1 surface-border"
  >
    <a
      v-ripple
      class="cursor-pointer flex align-items-center lg:hidden text-700 mr-3 p-ripple"
      v-styleclass="{
        selector: '#nav-2',
        enterClass: 'hidden',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-bars text-4xl"></i>
    </a>
    <div
      id="nav-2"
      class="surface-overlay hidden lg:flex absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto py-3 lg:py-0"
    >
      <ul class="list-none p-0 m-0 flex flex-column lg:flex-row">
        <Button class="pi  mr-2 mb-2 md:mb-0" style="background-color: rgb(20, 212, 155)" ><RouterLink to="/login">Login</RouterLink></Button>
        <Button class="pi  mr-2 mb-2 md:mb-0" style="background-color: rgb(37, 123, 180)" ><RouterLink to="/register">Register</RouterLink></Button>
        <Button class="pi  mr-2 mb-2 md:mb-0" style="background-color: rgb(199, 12, 12)" @click="handleSignOut" v-if="isLoggedIn">Sign out </Button>
      </ul>
    </div>

    <div class="flex align-items-center justify-content-center py-3">
      <img src="#" alt="Image" height="40" />
    </div>
    
  </div>
</template>
<script setup>
import Login from './Login.vue';
import Register from './Register.vue';
import { onMounted, ref } from 'vue';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from '@/router';
const isLoggedIn = ref(false);
let auth;
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth,(user) => {
    if (user) {isLoggedIn.value = true;}
    else {isLoggedIn.value = false}
    
  });
});
const handleSignOut = () =>{
  signOut(auth).then(() => {
    router.push("/")
  });
}

</script>