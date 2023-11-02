<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

const router = useRouter();
const isLoggedIn = ref(false);
let auth;

onMounted(()=> {
auth = getAuth();
onAuthStateChanged(auth , (user) => {
   if (user) {
      isLoggedIn.value = true;
   } else {
      isLoggedIn.value = false;
   }
})
}); 
const signingOut = () => {
   signOut(auth).then(()=> {
      router.push("/")
   })
}

</script>

<script>
export default {
  data() {
    return {
      selectedItem: null,
      isSidebarOpen: false,
    };
  },
  methods: {
    selectItem(item) {
     
      this.selectedItem = this.selectedItem === item ? null : item;
    }
   
  },
  
};

</script>



<template>



<button @click="toggleSidebar" :class="{ 'active': isSidebarOpen, 'lg:hidden': !isSidebarOpen }"
data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" 
class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg 
lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform lg:translate-x-0"
      :class="{ '-translate-x-full': !isSidebarOpen }" aria-label="Sidebar" ref="sidebar">
   <div class="h-full  py-4 overflow-y-auto"> 

      <div class="w-48 h-52 overflow-hidden me-auto ms-auto">
         <RouterLink to="/login">
            <img class="w-full h-full object-cover object-bottom rounded border" src="../src/assets/img/avatar.PNG" alt="Default avatar">
         </RouterLink>
      </div>
      <p v-if="isLoggedIn" class="text-white text-center m-0">  <RouterLink to="/admin">ADMIN</RouterLink></p>
      <p class="text-red-800 text-center m-0">
         <button v-if="isLoggedIn" @click.prevent="signingOut">log out</button>
      </p>

      <ul class="space-y-6 font-medium mt-6 flex flex-col text-center">
         <li class="w-full" @click="selectItem('item1')"
        :class="{ 'active': selectedItem === 'item1' }"> 
          <RouterLink to="/">HOME</RouterLink>
         </li>
         <li class="w-full" @click="selectItem('item2')"
        :class="{ 'active': selectedItem === 'item2' }">
          <RouterLink to="/coding">CODING</RouterLink>
         </li>
         <li class="w-full" @click="selectItem('item3')"
        :class="{ 'active': selectedItem === 'item3' }">
          <RouterLink to="/graphics">GRAPHICS</RouterLink>
         </li>
         <li class="w-full" @click="selectItem('item4')"
        :class="{ 'active': selectedItem === 'item4' }">
          <RouterLink to="/photography">PHOTOGRAPHY</RouterLink>
         </li>
         <li class="w-full" @click="selectItem('item5')"
        :class="{ 'active': selectedItem === 'item5' }">
          <RouterLink to="/cv">MY CV</RouterLink>
         </li>
      </ul>
      <div class="border border-green-700 mt-8 mx-4">
            <p class="text-start  ms-1  text-green-700">
            CONTACT ME!
         </p>
         <p class="text-end mt-4 me-1 text-green-600">
            +45 81 92 02 94
         </p>
         <p class="text-end mt-2 me-1 mb-2 text-green-600">
            bartek.fenicki@gmail.com
         </p>
      </div>
      
   </div>
   
</aside>


<aside id="default-sidebar" class="fixed hidden lg:block top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto">

      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7bp5DfkdK1OAvNJ1U4HfDA?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <ul class="space-y-2 font-medium border-r-2 h-64 mt-24 mx-8">
         <p class="text-xl">SOCIALS</p>
         <li class="ms-28">
            <a href="https://github.com/bartekfenicki">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-7 w-7"
               fill="currentColor"
               style="color: #fff "
               viewBox="0 0 24 24">
               <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
               </svg>
            </a>
         </li>
         <li class="ms-28">
            <a href="https://www.facebook.com/bartek.fenicki/">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-7 w-7"
               fill="currentColor"
               style="color: #1877f2"
               viewBox="0 0 24 24">
               <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
               </svg>
            </a>
         </li>
         <li class="ms-28">
            <a href="https://www.instagram.com/bartekfenickio/">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-7 w-7"
               fill="currentColor"
               style="color: #c13584;"
               viewBox="0 0 24 24">
               <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
               </svg>
            </a>
         </li>
         <li class="ms-28">
            <a  href="https://www.linkedin.com/in/bartlomiej-fenicki/">
               <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-7 w-7"
               fill="currentColor"
               style="color: #0077b5"
               viewBox="0 0 24 24">
               <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
               </svg>
            </a>
         </li>
         

      </ul>
   </div>
</aside>


  <body>
    <RouterView />
  </body>
</template>

<style scoped>
body{
  background: radial-gradient(circle, #0E0517, #594B69);
  font-family: Futura,Trebuchet MS,Arial,sans-serif; 
  color: #ffffff;
}
aside {
  background-color: #0E0517;
  color: #ffffff;
  font-family: Futura,Trebuchet MS,Arial,sans-serif; 
}
li {
  color: #ffffff;
  font-size: 20px;
  padding: 10px;

}
.active {
background-color: #382C45;
}


</style>
